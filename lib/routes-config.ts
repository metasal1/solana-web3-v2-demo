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
    title: "Basics", href: "/basics",
    noLink: true,
    items: [
      {
        title: "Create Keypair",
        href: "/create-keypair",
      },
      {
        title: "Set RPC",
        href: "/set-rpc",
      },
      {
        title: "Request Airdrop",
        href: "/request-airdrop",
      }, {
        title: "Get Balance",
        href: "/get-balance",
      }, {
        title: "Transfer",
        href: "/transfer",
      }, {
        title: "Get Blockhash",
        href: "/get-blockhash",
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
    title: "Tokens",
    href: "/tokens",
    items: [
      {
        title: "Create Token",
        href: "/create-token",
      },
      {
        title: "Mint Token",
        href: "/mint-token",
      },
      {
        title: "Get Token",
        href: "/get-Token",
      },
      {
        title: "Get Token Balance",
        href: "/get-token-balance",
      }, {
        title: "Transfer Token",
        href: "/transfer-token",
      }, {
        title: "Get Token Account",
        href: "/get-token-account",
      },
      {
        title: "Set Token Authority",
        href: "/set-token-authority",
      },
      {
        title: "Burn Token",
        href: "/burn token",
      },
      {
        title: "Close Account",
        href: "/close-account",
      }
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
  },
  {
    title: "Links",
    href: "/links",
  }, ,
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
        title: 'Project 5 - Token',
        href: '/project-05',
      }, {
        title: 'Project 6 - NFT',
        href: '/project-06',
      }, {
        title: 'Project 7 - Swap',
        href: '/project-07',
      }, {
        title: 'Project 8 - Token Vesting',
        href: '/project-08',
      }, {
        title: 'Project 9 - Token Lottery',
        href: '/project-09',
      }, {
        title: 'Project 10 - Lending',
        href: '/project-10',
      }, {
        title: 'Project 11 - Programmable Money',
        href: '/project-11',
      }, {
        title: 'Project 12 - Attacking the Bank',
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
