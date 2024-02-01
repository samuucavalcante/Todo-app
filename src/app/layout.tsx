import 'react-circular-progressbar/dist/styles.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppProvider } from "@/providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Tasks",
  description:
    "My Tasks é um site que te ajuda a organizar suas tarefas diárias de forma simples e eficiente. Você pode criar listas de todos, definir prioridades, prazos e lembretes, e acompanhar seu progresso em tempo real. My Tasks é ideal para quem quer aumentar sua produtividade, gerenciar seus projetos e alcançar seus objetivos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={cn(
          inter.className,
          "bg-[#09090B] p-4 w-[calc(100vw-64px)] h-[calc(100vh-64px)]",
          "overflow-hidden"
        )}
      >
        <NextTopLoader
          height={2}
          color={"rgb(255 255 255)"}
          easing="cubic-bezier(0.53, 0.21, 0,.67)"
        />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
