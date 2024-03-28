import {
  withdrawal_state,
  withdrawal_stateLeo
} from "../types/arc_0038";
import {
  leo2js
} from "@doko-js/core";


export function getwithdrawal_state(withdrawal_state: withdrawal_stateLeo): withdrawal_state {
  const result: withdrawal_state = {
    microcredits: leo2js.u64(withdrawal_state.microcredits),
    claim_block: leo2js.u32(withdrawal_state.claim_block),
  }
  return result;
}