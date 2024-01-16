import { type ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

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
      <ClerkProvider>{children}</ClerkProvider>
    </ThemeProvider>
  );
}
