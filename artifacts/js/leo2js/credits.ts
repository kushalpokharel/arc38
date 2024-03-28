import {
  committee_state,
  committee_stateLeo,
  bond_state,
  bond_stateLeo,
  unbond_state,
  unbond_stateLeo,
  credits,
  creditsLeo
} from "../types/credits";
import {
  leo2js
} from "@doko-js/core";


export function getcommittee_state(committee_state: committee_stateLeo): committee_state {
  const result: committee_state = {
    microcredits: leo2js.u64(committee_state.microcredits),
    is_open: leo2js.boolean(committee_state.is_open),
  }
  return result;
}

export function getbond_state(bond_state: bond_stateLeo): bond_state {
  const result: bond_state = {
    validator: leo2js.address(bond_state.validator),
    microcredits: leo2js.u64(bond_state.microcredits),
  }
  return result;
}

export function getunbond_state(unbond_state: unbond_stateLeo): unbond_state {
  const result: unbond_state = {
    microcredits: leo2js.u64(unbond_state.microcredits),
    height: leo2js.u32(unbond_state.height),
  }
  return result;
}

export function getcredits(credits: creditsLeo): credits {
  const result: credits = {
    owner: leo2js.address(credits.owner),
    microcredits: leo2js.u64(credits.microcredits),
    _nonce: leo2js.group(credits._nonce),
  }
  return result;
}