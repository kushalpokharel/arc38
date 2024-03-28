import {
  credits,
  committee_state,
  bond_state,
  unbond_state
} from "./types/credits";
import {
  getcreditsLeo,
  getcommittee_stateLeo,
  getbond_stateLeo,
  getunbond_stateLeo
} from "./js2leo/credits";
import {
  getcredits,
  getcommittee_state,
  getbond_state,
  getunbond_state
} from "./leo2js/credits";
import {
  zkRun,
  ContractConfig,
  zkGetMapping,
  LeoAddress,
  LeoRecord,
  js2leo,
  leo2js
} from "@doko-js/core";
import {
  BaseContract
} from "../../contract/base-contract";
import {
  TransactionModel
} from "@aleohq/sdk";

export class CreditsContract extends BaseContract {

  constructor(config: ContractConfig = {}) {
    super(config);
    this.config = {
      ...this.config,
      appName: 'credits',
      contractPath: 'artifacts/leo/credits',
      fee: '0.01'
    };
  }
  async bond_public(r0: LeoAddress, r1: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u64(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'bond_public',
      params,
    });
    return [result.transaction];
  }

  async unbond_public(r0: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.u64(r0);

    const params = [r0Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'unbond_public',
      params,
    });
    return [result.transaction];
  }

  async unbond_delegator_as_validator(r0: LeoAddress): Promise < [TransactionModel] > {
    const r0Leo = js2leo.address(r0);

    const params = [r0Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'unbond_delegator_as_validator',
      params,
    });
    return [result.transaction];
  }

  async claim_unbond_public(): Promise < [TransactionModel] > {

    const params = []
    const result = await zkRun({
      config: this.config,
      transition: 'claim_unbond_public',
      params,
    });
    return [result.transaction];
  }

  async set_validator_state(r0: boolean): Promise < [TransactionModel] > {
    const r0Leo = js2leo.boolean(r0);

    const params = [r0Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'set_validator_state',
      params,
    });
    return [result.transaction];
  }

  async transfer_public(r0: LeoAddress, r1: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u64(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'transfer_public',
      params,
    });
    return [result.transaction];
  }

  async transfer_private(r0: credits, r1: LeoAddress, r2: bigint): Promise < [LeoRecord, LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.json(getcreditsLeo(r0));
    const r1Leo = js2leo.address(r1);
    const r2Leo = js2leo.u64(r2);

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'transfer_private',
      params,
    });
    const out0 = result.data[0];
    const out1 = result.data[1];
    return [out0, out1, result.transaction];
  }

  async transfer_private_to_public(r0: credits, r1: LeoAddress, r2: bigint): Promise < [LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.json(getcreditsLeo(r0));
    const r1Leo = js2leo.address(r1);
    const r2Leo = js2leo.u64(r2);

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'transfer_private_to_public',
      params,
    });
    const out0 = result.data[0];
    return [out0, result.transaction];
  }

  async transfer_public_to_private(r0: LeoAddress, r1: bigint): Promise < [LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u64(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'transfer_public_to_private',
      params,
    });
    const out0 = result.data[0];
    return [out0, result.transaction];
  }

  async join(r0: credits, r1: credits): Promise < [LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.json(getcreditsLeo(r0));
    const r1Leo = js2leo.json(getcreditsLeo(r1));

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'join',
      params,
    });
    const out0 = result.data[0];
    return [out0, result.transaction];
  }

  async split(r0: credits, r1: bigint): Promise < [LeoRecord, LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.json(getcreditsLeo(r0));
    const r1Leo = js2leo.u64(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'split',
      params,
    });
    const out0 = result.data[0];
    const out1 = result.data[1];
    return [out0, out1, result.transaction];
  }

  async fee_private(r0: credits, r1: bigint, r2: bigint, r3: bigint): Promise < [LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.json(getcreditsLeo(r0));
    const r1Leo = js2leo.u64(r1);
    const r2Leo = js2leo.u64(r2);
    const r3Leo = js2leo.field(r3);

    const params = [r0Leo, r1Leo, r2Leo, r3Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'fee_private',
      params,
    });
    const out0 = result.data[0];
    return [out0, result.transaction];
  }

  async fee_public(r0: bigint, r1: bigint, r2: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.u64(r0);
    const r1Leo = js2leo.u64(r1);
    const r2Leo = js2leo.field(r2);

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'fee_public',
      params,
    });
    return [result.transaction];
  }

  async committee(key: LeoAddress, defaultValue ? : committee_state): Promise < committee_state > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'committee',
      params,
    });

    if (result != null)
      return getcommittee_state(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`committee returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async bonded(key: LeoAddress, defaultValue ? : bond_state): Promise < bond_state > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'bonded',
      params,
    });

    if (result != null)
      return getbond_state(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`bonded returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async unbonding(key: LeoAddress, defaultValue ? : unbond_state): Promise < unbond_state > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'unbonding',
      params,
    });

    if (result != null)
      return getunbond_state(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`unbonding returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async account(key: LeoAddress, defaultValue ? : bigint): Promise < bigint > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'account',
      params,
    });

    if (result != null)
      return leo2js.u64(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`account returned invalid value[input: ${key}, output: ${result}`);
    }
  }


}