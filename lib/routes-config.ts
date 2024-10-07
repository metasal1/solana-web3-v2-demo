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
      },
      {
        title: "Get Slot",
        href: "/get-slot",
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
