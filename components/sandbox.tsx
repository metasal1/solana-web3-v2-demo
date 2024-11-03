import { Connection, PublicKey } from '@solana/web3.js';

const [pda] = PublicKey.findProgramAddressSync([Buffer.from("test")], new PublicKey("SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf"));

console.log(pda);

