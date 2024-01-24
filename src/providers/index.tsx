'use client'
import { ClerkProvider } from "@clerk/nextjs";
import { type ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/service/query-client";
import { dark } from '@clerk/themes';
import { ptBR } from '@clerk/localizations';

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
