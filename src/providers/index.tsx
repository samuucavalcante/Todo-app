'use client'
import { ClerkProvider } from "@clerk/nextjs";
import { type ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/service/query-client";

type AppProviderProps = {
  children: ReactNode;
};
export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      disableTransitionOnChange
    >
      <ClerkProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ClerkProvider>
    </ThemeProvider>
  );
}
