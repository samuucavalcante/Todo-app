"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps } from "react";
import { motion } from "framer-motion";

type MenuLinkProps = ComponentProps<typeof Link> & {};
export function MenuLink({ ...props }: MenuLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
      <Link
        className={cn(
          "flex flex-row gap-4 px-4  text-muted-foreground w-full p-2 text-sm relative",
          { "brightness-200 bg-white/5 transition-all duration-500": isActive }
        )}
        {...props}
      >
        {isActive ? (
          <motion.span
            layoutId="underline"
            className="absolute right-0 top-0 h-full w-1 rounded-md bg-white"
          />
        ) : null}
        {props.children}
      </Link>
  );
}
