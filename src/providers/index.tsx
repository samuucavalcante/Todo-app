'use client'
import { queryClient } from "@/service/query-client";
import { ptBR } from '@clerk/localizations';
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import { QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider
      attribute="class" 
      defaultTheme="dark"
      forcedTheme="dark"
    >
      <ClerkProvider localization={ptBR} appearance={{
        baseTheme: dark
      }}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ClerkProvider>
    </ThemeProvider>
  );
}
