import {
  withdrawal_state
} from "./types/arc_0038";
import {
  getwithdrawal_stateLeo
} from "./js2leo/arc_0038";
import {
  getwithdrawal_state
} from "./leo2js/arc_0038";
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
import { credits } from "./types/credits";
import { getcreditsLeo } from "./js2leo/credits";
import { getcredits } from "./leo2js/credits";

export class Arc_0038Contract extends BaseContract {

  constructor(config: ContractConfig = {}) {
    super(config);
    this.config = {
      ...this.config,
      appName: 'arc_0038',
      contractPath: 'artifacts/leo/arc_0038',
      fee: '0.01'
    };
  }
  async initialize(r0: bigint, r1: LeoAddress): Promise < [TransactionModel] > {
    const r0Leo = js2leo.u128(r0);
    const r1Leo = js2leo.address(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'initialize',
      params,
    });
    return [result.transaction];
  }

  async initial_deposit(r0: credits, r1: bigint, r2: LeoAddress): Promise < [credits, TransactionModel] > {
    const r0Leo = js2leo.json(getcreditsLeo(r0));
    const r1Leo = js2leo.u64(r1);
    const r2Leo = js2leo.address(r2);

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'initial_deposit',
      params,
    });
    const out0 = getcredits(result.data[0]);
    return [out0, result.transaction];
  }

  async set_commission_percent(r0: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.u128(r0);

    const params = [r0Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'set_commission_percent',
      params,
    });
    return [result.transaction];
  }

  async set_next_validator(r0: LeoAddress): Promise < [TransactionModel] > {
    const r0Leo = js2leo.address(r0);

    const params = [r0Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'set_next_validator',
      params,
    });
    return [result.transaction];
  }

  async unbond_all(r0: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.u64(r0);

    const params = [r0Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'unbond_all',
      params,
    });
    return [result.transaction];
  }

  async claim_unbond(): Promise < [TransactionModel] > {

    const params = []
    const result = await zkRun({
      config: this.config,
      transition: 'claim_unbond',
      params,
    });
    return [result.transaction];
  }

  async bond_all(r0: LeoAddress, r1: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u64(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'bond_all',
      params,
    });
    return [result.transaction];
  }

  async claim_commission(): Promise < [TransactionModel] > {

    const params = []
    const result = await zkRun({
      config: this.config,
      transition: 'claim_commission',
      params,
    });
    return [result.transaction];
  }

  async deposit_public(r0: credits, r1: bigint): Promise < [credits, TransactionModel] > {
    const r0Leo = js2leo.json(getcreditsLeo(r0));
    const r1Leo = js2leo.u64(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'deposit_public',
      params,
    });
    const out0 = getcredits(result.data[0]);
    return [out0, result.transaction];
  }

  async withdraw_public(r0: bigint, r1: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.u64(r0);
    const r1Leo = js2leo.u64(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'withdraw_public',
      params,
    });
    return [result.transaction];
  }

  async create_withdraw_claim(r0: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.u64(r0);

    const params = [r0Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'create_withdraw_claim',
      params,
    });
    return [result.transaction];
  }

  async claim_withdrawal_public(r0: LeoAddress, r1: bigint): Promise < [TransactionModel] > {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u64(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'claim_withdrawal_public',
      params,
    });
    return [result.transaction];
  }

  async is_initialized(key: number, defaultValue ? : boolean): Promise < boolean > {
    const keyLeo = js2leo.u8(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'is_initialized',
      params,
    });

    if (result != null)
      return leo2js.boolean(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`is_initialized returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async commission_percent(key: number, defaultValue ? : bigint): Promise < bigint > {
    const keyLeo = js2leo.u8(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'commission_percent',
      params,
    });

    if (result != null)
      return leo2js.u128(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`commission_percent returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async validator(key: number, defaultValue ? : LeoAddress): Promise < LeoAddress > {
    const keyLeo = js2leo.u8(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'validator',
      params,
    });

    if (result != null)
      return leo2js.address(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`validator returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async total_balance(key: number, defaultValue ? : bigint): Promise < bigint > {
    const keyLeo = js2leo.u8(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'total_balance',
      params,
    });

    if (result != null)
      return leo2js.u64(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`total_balance returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async total_shares(key: number, defaultValue ? : bigint): Promise < bigint > {
    const keyLeo = js2leo.u8(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'total_shares',
      params,
    });

    if (result != null)
      return leo2js.u64(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`total_shares returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async delegator_shares(key: LeoAddress, defaultValue ? : bigint): Promise < bigint > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'delegator_shares',
      params,
    });

    if (result != null)
      return leo2js.u64(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`delegator_shares returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async pending_withdrawal(key: number, defaultValue ? : bigint): Promise < bigint > {
    const keyLeo = js2leo.u8(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'pending_withdrawal',
      params,
    });

    if (result != null)
      return leo2js.u64(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`pending_withdrawal returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async current_batch_height(key: number, defaultValue ? : number): Promise < number > {
    const keyLeo = js2leo.u8(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'current_batch_height',
      params,
    });

    if (result != null)
      return leo2js.u32(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`current_batch_height returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async withdrawals(key: LeoAddress, defaultValue ? : withdrawal_state): Promise < withdrawal_state > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'withdrawals',
      params,
    });

    if (result != null)
      return getwithdrawal_state(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`withdrawals returned invalid value[input: ${key}, output: ${result}`);
    }
  }


}