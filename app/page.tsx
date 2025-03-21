import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        A place to quickly find that sneaky little snippet
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground ">
        v1 to v2 is pretty big diff
        <br />
        This resource might help / save / teach
        <br />
        Inspired by <Link href="https://github.com/yihau/solana-web3-demo">Yihau</Link> (last
        updated 3 years back)
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/get-started`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
      <span className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code text-base font-medium">
        <TerminalSquareIcon className="w-5 h-5 mr-1 mt-0.5" />
        {"npm install @solana/kit"}
      </span>
    </div>

  );
}
