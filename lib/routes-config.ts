// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Installation",
    href: "/installation",
    noLink: true,
    items: [
      { title: "Anchor", href: "/anchor" },
      { title: "CLI", href: "/cli" },
      { title: "Node", href: "/node" },
      { title: "Rust", href: "/rust" },
    ],
  },
  {
    title: "Advanced",
    href: "/advanced",
    items: [
      { title: "Convert Base 58 to Base 64", href: "/base58-to-base64" },
      { title: "Convert Base 64 to Base 58", href: "/base64-to-base58" },
      { title: "Deserialize Transactions", href: "/deserialize-transactions" },
      { title: "Update Blockhash", href: "/update-blockhash" },
    ],
  },
  {
    title: "Basics",
    href: "/basics",
    items: [
      { title: "Create Keypair", href: "/create-keypair" },
      { title: "Get Balance", href: "/get-balance" },
      { title: "Get Blockhash", href: "/get-blockhash" },
      { title: "Get Fee", href: "/get-fee" },
      { title: "Get Health", href: "/get-health" },
      { title: "Get Rent", href: "/get-rent" },
      { title: "Get Signature", href: "/get-signature" },
      { title: "Get Slot", href: "/get-slot" },
      { title: "Get Transaction", href: "/get-transaction" },
      { title: "Load Keypair", href: "/load-keypair" },
      { title: "Request Airdrop", href: "/request-airdrop" },
      { title: "Set RPC", href: "/set-rpc" },
      { title: "Transfer SOL", href: "/transfer-sol" },
    ],
  },
  {
    title: "CLI",
    href: "/cli",
    items: [
      { title: "Burn Tokens", href: "/burn-tokens" },
      { title: "Close Token Account", href: "/close-token-account" },
      { title: "Create Account", href: "/create-account" },
      { title: "Create Token", href: "/create-token" },
      { title: "Disable Freeze", href: "/disable-freeze" },
      { title: "Disable Mint", href: "/disable-mint" },
      { title: "Display Information", href: "/display-information" },
      { title: "Get Supply", href: "/get-supply" },
      { title: "Mint Tokens", href: "/mint-tokens" },
    ],
  },
  {
    title: "Course",
    href: "/course",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Project 1 - Favourites", href: "/project-01" },
      { title: "Project 2 - Voting", href: "/project-02" },
      { title: "Project 3 - Blinks and Actions", href: "/project-03" },
      { title: "Project 4 - CRUD", href: "/project-04" },
      { title: "Project 5 - Tokens", href: "/project-05" },
      { title: "Project 6 - NFT", href: "/project-06" },
      { title: "Project 7 - Swap", href: "/project-07" },
      { title: "Project 8 - Vesting", href: "/project-08" },
      { title: "Project 9 - Lottery", href: "/project-09" },
      { title: "Project 10 - Lending", href: "/project-10" },
      { title: "Project 11 - Attacking the Bank", href: "/project-11" },
      { title: "Project 12 - Programmable Money", href: "/project-12" },
      { title: "Project 13 - Getting to Production", href: "/project-13" },
    ],
  },
  {
    title: "Domains",
    href: "/domains",
    items: [
      { title: "Create and Transfer", href: "/create-transfer-domain" },
      { title: "Create and Transfer Subdomain", href: "/create-transfer-subdomain" },
      { title: "Create Domain", href: "/create-domain" },
      { title: "Create Subdomain", href: "/create-subdomain" },
      { title: "Transfer Domain", href: "/transfer-domain" },
      { title: "Transfer Subdomain", href: "/transfer-subdomain" },
    ],
  },
  {
    title: "Nonce",
    href: "/nonce",
    items: [
      { title: "Create Nonce Account", href: "/create-nonce-account" },
      { title: "Get Nonce Account", href: "/get-nonce-account" },
      { title: "Use Nonce Account", href: "/use-nonce-account" },
    ],
  },
  {
    title: "Packages",
    href: "/packages",
    items: [
      { title: "Errors", href: "/errors" },
    ],
  },
  {
    title: "Privacy",
    href: "/privacy",
    items: [
      {
        title: "Privacy Cash",
        href: "/privacy-cash",
        items: [
          { title: "Installation", href: "/installation" },
          { title: "Deposit SOL", href: "/deposit" },
          { title: "Withdraw SOL", href: "/withdraw" },
          { title: "Get Balance", href: "/balance" },
          { title: "Deposit SPL", href: "/deposit-spl" },
          { title: "Withdraw SPL", href: "/withdraw-spl" },
        ],
      },
    ],
  },
  {
    title: "Programs",
    href: "/programs",
    items: [
      { title: "Get Program IDL Address", href: "/get-idl-address" },
      { title: "Get Program Info", href: "/get-program-info" },
      { title: "Get Programs", href: "/get-programs" },
    ],
  },
  {
    title: "Stake",
    href: "/stake",
    items: [
      { title: "Activate Stake", href: "/activate-stake" },
      { title: "Create Stake Account", href: "/create-stake-account" },
      { title: "Deactivate Stake", href: "/deactivate-stake" },
      { title: "Delegate Stake", href: "/delegate-stake" },
      { title: "List Stake", href: "/list-stake" },
      { title: "Merge Stake", href: "/merge-stake" },
      { title: "Withdraw Stake", href: "/withdraw-stake" },
    ],
  },
  {
    title: "Tables",
    href: "/tables",
    items: [
      { title: "Create ALT", href: "/create" },
      { title: "Extend ALT", href: "/extend" },
      { title: "Get ALT", href: "/get" },
      { title: "Use ALT", href: "/use" },
    ],
  },
  {
    title: "Token Extensions",
    href: "/token-extensions",
    items: [
      { title: "Confidential Transfers", href: "/confidential-transfers" },
      { title: "Default Account State", href: "/default-account-state" },
      { title: "Group Member Pointer", href: "/group-member-pointer" },
      { title: "Group Pointer", href: "/group-pointer" },
      { title: "Immutable Ownership", href: "/immutable-ownership" },
      { title: "Interest-Bearing Tokens", href: "/interest-bearing-tokens" },
      { title: "Metadata", href: "/metadata" },
      { title: "Metadata Pointer", href: "/metadata-pointer" },
      { title: "Mint Close Authority", href: "/mint-close-authority" },
      { title: "Non-Transferable Tokens", href: "/non-transferable-tokens" },
      { title: "Permanent Delegate", href: "/permanent-delegate" },
      { title: "Transfer Fees", href: "/transfer-fees" },
      { title: "Transfer Hooks", href: "/transfer-hooks" },
    ],
  },
  {
    title: "Tokens",
    href: "/tokens",
    items: [
      { title: "Burn Token", href: "/burn-token" },
      { title: "Close Account", href: "/close-account" },
      { title: "Create Metadata", href: "/create-metadata" },
      { title: "Create Token", href: "/create-token" },
      { title: "Create Token Account", href: "/create-token-account" },
      { title: "Get Metadata", href: "/get-metadata" },
      { title: "Get Token", href: "/get-token" },
      { title: "Get Token Account", href: "/get-token-account" },
      { title: "Get Token Balance", href: "/get-token-balance" },
      { title: "Mint Tokens", href: "/mint-tokens" },
      { title: "Set Token Authority", href: "/set-token-authority" },
      { title: "Transfer Token", href: "/transfer-token" },
    ],
  },
  {
    title: "Tokens - Compressed",
    href: "/compressed",
    items: [
      { title: "Airdrop", href: "/airdrop" },
      { title: "Decompress", href: "/decompress" },
      { title: "Installation", href: "/installation" },
      { title: "List", href: "/list" },
      { title: "Register", href: "/register" },
      { title: "Transfer", href: "/transfer" },
    ],
  },
  {
    title: "Links",
    href: "/links",
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
