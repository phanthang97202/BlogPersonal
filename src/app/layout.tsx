import AuthLogin from "@context/AuthContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import RouterLink from "@components/RouterLink/RouterLink";
import QueryClientProviderApp from "@context/QueryClientProviderApp";
import ToastifyContainerApp from "@context/ToastifyContainerApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "This is my blog app using nextjs 13",
  icons: {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    icon: "https://c0.klipartz.com/pngpicture/332/60/sticker-png-anime-non-non-biyori-npm-manga-installation-anime-purple-cg-artwork-black-hair-manga-cartoon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-full w-full">
          <QueryClientProviderApp>
            <AuthLogin>
              <ToastifyContainerApp />
              <RouterLink />
              {children}
            </AuthLogin>
          </QueryClientProviderApp>
        </div>
      </body>
    </html>
  );
}
