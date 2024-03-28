import {
  withdrawal_state,
  withdrawal_stateLeo
} from "../types/arc_0038";
import {
  js2leo
} from "@doko-js/core";


export function getwithdrawal_stateLeo(withdrawal_state: withdrawal_state): withdrawal_stateLeo {
  const result: withdrawal_stateLeo = {
    microcredits: js2leo.u64(withdrawal_state.microcredits),
    claim_block: js2leo.u32(withdrawal_state.claim_block),
  }
  return result;
}