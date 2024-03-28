// The 'sample_program' program.

program credits.aleo {

    mapping account : address => u64;

    record credits {
        owner : address,
        microcredits : u64,
    }

    transition transfer_public_to_private(public receiver: address, public amount: u64) -> credits {
        // Produces a token record for the token receiver.
        let transferred: credits = credits {
            owner: receiver,
            microcredits: amount,
        };

        // Output the receiver's record.
        // Decrement the token amount of the caller publicly.
        return transferred then finalize(self.caller, amount);
    }

    finalize transfer_public_to_private(public sender: address, public amount: u64) {
        // Decrements `account[sender]` by `amount`.
        // If `account[sender]` does not exist, it will be created.
        // If `account[sender] - amount` underflows, `transfer_public_to_private` is reverted.
        let sender_amount: u64 = Mapping::get_or_use(account, sender, 0u64);
        Mapping::set(account, sender, sender_amount - amount);
    }
}