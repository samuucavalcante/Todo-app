import { type ComponentProps } from "react";
import { Share_Tech_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Share_Tech_Mono({ subsets: ['latin'], weight: ["400"] });

type LogoProps = ComponentProps<"h3"> & {};
export function Logo({ ...props }: LogoProps) {
  return (
    <h3 className={cn(font.className,props.className, "text-center break-normal  overflow-hidden text-nowrap md:text-xl")} {...props}>
      {"</>"} Samuel Cavalcante
      <span className="block" {...props}>
        {"{"}To Do{"}"}
      </span>
    </h3>
  );
}
