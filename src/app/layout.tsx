import Header from "@/components/Header";
import PageContainer from "@/components/PageContainer";
import { FilterProvider } from "@/context/filterContext";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "TMDB",
  description: "Sua fonte de filmes e séries",
};

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <FilterProvider>
          <Header />
          <PageContainer>{children}</PageContainer>
        </FilterProvider>
      </body>
    </html>
  );
}
