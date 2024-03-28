import {
  z
} from "zod";
import {
  leoAddressSchema,
  leoPrivateKeySchema,
  leoViewKeySchema,
  leoTxIdSchema,
  leoScalarSchema,
  leoFieldSchema,
  leoBooleanSchema,
  leoU8Schema,
  leoU16Schema,
  leoU32Schema,
  leoU64Schema,
  leoU128Schema,
  leoGroupSchema,
  leoRecordSchema,
  leoTxSchema,
  leoSignatureSchema,
  LeoArray,
  LeoAddress
} from "@doko-js/core";

export interface withdrawal_state {
  microcredits: bigint;
  claim_block: number;
}

export const leoWithdrawal_stateSchema = z.object({
  microcredits: leoU64Schema,
  claim_block: leoU32Schema,
});
export type withdrawal_stateLeo = z.infer < typeof leoWithdrawal_stateSchema > ;