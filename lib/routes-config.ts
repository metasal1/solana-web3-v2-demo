// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Get Started", href: "/get-started",
    noLink: true,
  },
  {
    title: "Installation",
    href: "/installation",
    noLink: true,
    items: [
      { title: "Node", href: "/node" },
      { title: "CLI", href: "/cli" },
      { title: "Anchor", href: "/anchor" },
      { title: "Rust", href: "/rust" },
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
    title: "Basics", href: "/basics",
    noLink: true,
    items: [
      {
        title: "Create Keypair",
        href: "/create-keypair",
      },
      {
        title: "Load Keypair",
        href: "/load-keypair",
      },
      {
        title: "Set RPC",
        href: "/set-rpc",
      },
      {
        title: "Request Airdrop",
        href: "/request-airdrop",
      }, {
        title: "Transfer SOL",
        href: "/transfer-sol",
      }, {
        title: "Get Balance",
        href: "/get-balance",
      }, {
        title: "Get Blockhash",
        href: "/get-blockhash",
      }, {
        title: "Get Signature",
        href: "/get-signature",
      }, {
        title: "Get Health",
        href: "/get-health",
      },
      {
        title: "Get Fee",
        href: "/get-fee",
      }, {
        title: "Get Rent",
        href: "/get-rent",
      },
      {
        title: "Get Slot",
        href: "/get-slot",
      },
      {
        title: "Get Transaction",
        href: "/get-transaction",
      }
    ],
  },
  {
    title: "Advanced",
    href: "/advanced",
    items: [
      {
        title: "Deserialize Transactions",
        href: "/deserialize-transactions",
      },
      {
        title: "Convert Base 64 to Base 58",
        href: "/base64-to-base58",
      },
      {
        title: "Convert Base 58 to Base 64",
        href: "/base58-to-base64",
      },
      {
        title: "Update Blockhash",
        href: "/update-blockhash",
      }
    ],
  },
  {
    title: "Programs",
    href: "/programs",
    items: [
      { title: "Get Programs", href: "/get-programs" },
      { title: "Get Program Info", href: "/get-program-info" },
      { title: "Get Program IDL Address", href: "/get-idl-address" },
    ],
  },
  {
    title: "Tokens",
    href: "/tokens",
    items: [
      {
        title: "Create Token",
        href: "/create-token",
      },
      {
        title: "Create Token Account",
        href: "/create-token-account",
      },
      {
        title: "Mint Tokens",
        href: "/mint-tokens",
      },
      {
        title: "Create Metadata",
        href: "/create-metadata",
      },
      {
        title: "Get Metadata",
        href: "/get-metadata",
      },
      {
        title: "Get Token",
        href: "/get-token",
      },
      {
        title: "Get Token Account",
        href: "/get-token-account",
      },
      {
        title: "Get Token Balance",
        href: "/get-token-balance",
      },
      {
        title: "Transfer Token",
        href: "/transfer-token",
      },
      {
        title: "Burn Token",
        href: "/burn-token",
      },
      {
        title: "Close Account",
        href: "/close-account",
      },
      {
        title: "Set Token Authority",
        href: "/set-token-authority",
      }
    ],
  },
  {
    title: "Token Extensions",
    href: "/token-extensions",
    items: [
      { title: "Confidential Transfers", href: "/confidential-transfers" },
      { title: "Transfer Fees", href: "/transfer-fees" },
      { title: "Transfer Hooks", href: "/transfer-hooks" },
      { title: "Non-Transferable Tokens", href: "/non-transferable-tokens" },
      { title: "Interest-Bearing Tokens", href: "/interest-bearing-tokens" },
      { title: "Metadata Pointer", href: "/metadata-pointer" },
      { title: "Metadata", href: "/metadata" },
      { title: "Group Pointer", href: "/group-pointer" },
      { title: "Group Member Pointer", href: "/group-member-pointer" },
      { title: "Permanent Delegate", href: "/permanent-delegate" },
      { title: "Default Account State", href: "/default-account-state" },
      { title: "Immutable Ownership", href: "/immutable-ownership" },
      { title: "Mint Close Authority", href: "/mint-close-authority" },
    ],
  },
  {
    title: "Stake",
    href: "/stake",
    items: [
      { title: "Create Stake Account", href: "/create-stake-account" },
      { title: "Delegate Stake", href: "/delegate-stake" },
      { title: "Activate Stake", href: "/activate-stake" },
      { title: "Deactivate Stake", href: "/deactivate-stake" },
      { title: "Withdraw Stake", href: "/withdraw-stake" },
      { title: "Merge Stake", href: "/merge-stake" },
      { title: "List Stake", href: "/list-stake" }
    ],
  },
  {
    title: "Tables",
    href: "/tables",
    items: [
      { title: "Create ALT", href: "/create" },
      { title: "Extend ALT", href: "/extend" },
      { title: "Use ALT", href: "/use" },
      { title: "Get ALT", href: "/get" },
    ],
  },
  {
    title: "Nonce", href: "/nonce",
    items: [
      {
        title: "Create Nonce Account",
        href: "/create-nonce-account",
      },
      {
        title: "Get Nonce Account",
        href: "/get-nonce-account",
      }, {
        title: "Use Nonce Account",
        href: "/use-nonce-account",
      },
    ],
  }, {
    title: "Domains",
    href: "/domains",
    items: [
      { title: "Create Domain", href: "/create-domain" },
      { title: "Transfer Domain", href: "/transfer-domain" },
      { title: "Create and Transfer", href: "/create-transfer-domain" },
      { title: "Create Subdomain", href: "/create-subdomain" },
      { title: "Transfer Subdomain", href: "/transfer-subdomain" },
      { title: "Create and Transfer Subdomain", href: "/create-transfer-subdomain" },
    ],
  }, {
    title: "CLI",
    href: "/cli",
    noLink: true,
    items: [
      { title: "Create Token", href: "/create-token" },
      { title: "Create Account", href: "/create-account" },
      { title: "Mint Tokens", href: "/mint-tokens" },
      { title: "Burn Tokens", href: "/burn-tokens" },
      { title: "Close Token Account", href: "/close-token-account" },
      { title: "Disable Freeze", href: "/disable-freeze" },
      { title: "Disable Mint", href: "/disable-mint" },
      { title: "Get Supply", href: "/get-supply" },
      { title: "Display Information", href: "/display-information" }
    ],
  },
  {
    title: "Links",
    href: "/links",
  },
  {
    title: "Course", href: "/course",
    items: [
      {
        title: 'Introduction',
        href: '/introduction',
      },
      {
        title: 'Project 1 - Favourites',
        href: '/project-01',
      }, {
        title: 'Project 2 - Voting',
        href: '/project-02',
      }, {
        title: 'Project 3 - Blinks and Actions',
        href: '/project-03',
      }, {
        title: 'Project 4 - CRUD',
        href: '/project-04',
      }, {
        title: 'Project 5 - Tokens',
        href: '/project-05',
      }, {
        title: 'Project 6 - NFT',
        href: '/project-06',
      }, {
        title: 'Project 7 - Swap',
        href: '/project-07',
      }, {
        title: 'Project 8 - Vesting',
        href: '/project-08',
      }, {
        title: 'Project 9 - Lottery',
        href: '/project-09',
      }, {
        title: 'Project 10 - Lending',
        href: '/project-10',
      }, {
        title: 'Project 11 - Attacking the Bank',
        href: '/project-11',
      }, {
        title: 'Project 12 - Programmable Money',
        href: '/project-12',
      }, {
        title: 'Project 13 - Getting to Production',
        href: '/project-13',
      },
    ],
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
