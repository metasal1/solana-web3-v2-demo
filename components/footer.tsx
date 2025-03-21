import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CodeIcon, HeartIcon, TriangleIcon, MessageCircleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">

        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://t.me/solweb3js"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <MessageCircleIcon className="h-4 w-4 mr-2 text-blue-500 fill-current" />
        Telegram Channel
      </Link>
      <Link
        href="https://github.com/anza-xyz/kit"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Solana Kit
      </Link>
      <Link
        href="https://metasal.xyz"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <CodeIcon className="h-4 w-4 mr-2 text-green-600 fill-current" />
        Made by Metasal
      </Link>
    </>
  );
}
