import NextLink from "next/link";
import { ComponentProps } from "react";

export default function Link({ href, ...props }: ComponentProps<"a">) {
  if (!href) return null;

  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
  }

  return <NextLink href={href} {...props} />;
}
