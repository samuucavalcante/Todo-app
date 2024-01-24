"use client";
import { UserButton } from "@clerk/nextjs";
import { User } from "@prisma/client";
import Image from "next/image";
import { ReactNode } from "react";

type SidebarProfileActionsProps = {
  children: ReactNode;
};
export function SidebarProfileActions({ children }: SidebarProfileActionsProps) {
  const onButtonClick = () => {
    const userButtonElement = document.querySelector<HTMLButtonElement>(
      ".cl-userButtonTrigger"
    );
    if (userButtonElement) {
      userButtonElement.click();
    }
  };
  
  return (
    <>
      <button
        onClick={onButtonClick}
        className="flex flex-row items-center mx-2 gap-2 hover:opacity-85 cursor-pointer"
      >
        {children}
      </button>
      <div
        id="userButton"
        style={{ visibility: "hidden" }}
        className="absolute bottom-5 left-2 -z-10"
      >
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </>
  );
}
