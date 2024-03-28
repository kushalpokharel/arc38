import { parseRecordString } from '@doko-js/core';
import { PrivateKey } from '@aleohq/sdk';

import { Arc_0038Contract } from '../artifacts/js/arc_0038';
import { credits, creditsLeo } from '../artifacts/js/types/credits';
import { getcredits } from '../artifacts/js/leo2js/credits';
import { CreditsContract } from '../artifacts/js/credits';

const TIMEOUT = 200_000;
const amount = BigInt(2);

// Available modes are evaluate | execute (Check README.md for further description)
const mode = 'evaluate';
// Contract class initialization
const contract = new Arc_0038Contract({ mode });
const CreditContract = new CreditsContract({mode});

// This maps the accounts defined inside networks in aleo-config.js and return array of address of respective private keys
const [admin, user] = contract.getAccounts();

// This method returns private key of associated aleo address
const adminPrivateKey = contract.getPrivateKey(admin);

// Custom function to parse token record data
function parseRecordtoCredits(
  recordString: string,
  mode?: 'execute' | 'evaluate',
  privateKey?: string
): credits {
  // Records are encrypted in execute mode so we need to decrypt them
  if (mode && mode === 'execute') {
    if (!privateKey)
      throw new Error('Private key is required for execute mode');
    const record = getcredits(
      parseRecordString(
        PrivateKey.from_string(privateKey).to_view_key().decrypt(recordString)
      ) as creditsLeo
    );
    return record;
  }
  const record = getcredits(
    parseRecordString(JSON.stringify(recordString)) as creditsLeo
  );
  return record;
}

describe("ARC38 test", ()=>{
  test(
    'mint private',
    async () => {
      console.log(admin);
      const [tx1] = await contract.initialize(BigInt(100), "aleo12ux3gdauck0v60westgcpqj7v8rrcr3v346e4jtq04q7kkt22czsh808v2");
      const [rec, tx] = await CreditContract.transfer_public_to_private("aleo12ux3gdauck0v60westgcpqj7v8rrcr3v346e4jtq04q7kkt22czsh808v2",BigInt(10000000000000));
  
      // tx is undefined in evaluate mode
      // This method waits for the transction to be broadcasted in execute mode
      if (tx1) await contract.wait(tx1);
  
      const senderRecord: credits = parseRecordtoCredits(
        rec,
        mode,
        adminPrivateKey
      );
      const [rec1, tx2] = await contract.initial_deposit(senderRecord, BigInt(10000000), "aleo12ux3gdauck0v60westgcpqj7v8rrcr3v346e4jtq04q7kkt22czsh808v2" );
      expect(rec1.microcredits).toBe(BigInt(9999990000000));
      
      expect(senderRecord.owner).toBe(admin);
      expect(senderRecord.microcredits.toString()).toBe(amount.toString());
    },
    TIMEOUT
  );
  
  // test(
  //   'transfer private',
  //   async () => {
  //     const [token, tx] = await contract.mint_private(admin, amount);
  //     if (tx) await contract.wait(tx);
  //     const record: token = parseRecordtoToken(token, mode, adminPrivateKey);
  
  //     // Transfer private returns two records so result1 and result2 hold those records and tx1 holds the transaction execution data
  //     const [result1, result2, tx1] = await contract.transfer_private(
  //       record,
  //       user,
  //       amount
  //     );
  
  //     if (tx1) await contract.wait(tx1);
  
  //     const privateKey = contract.getPrivateKey(user);
  //     const record1 = parseRecordtoToken(result1, mode, adminPrivateKey);
  //     const record2 = parseRecordtoToken(result2, mode, privateKey);
  
  //     expect(record1.amount).toBe(BigInt(0));
  //     expect(record2.amount).toBe(amount);
  //   },
  //   TIMEOUT
  // );  
})
