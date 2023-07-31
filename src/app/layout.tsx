import AuthLogin from "@context/AuthContext";
import "./globals.css";
import type { Metadata } from "next";
import RouterLink from "@components/RouterLink/RouterLink";
import QueryClientProviderApp from "@context/QueryClientProviderApp";
import ToastifyContainerApp from "@context/ToastifyContainerApp";

export const metadata: Metadata = {
  title: "PhanThang",
  description: "This is my blog app using nextjs 13",
  icons: {
    icon: "/assets/images/favicon.png",
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
              {/*    // top-0 fixed bg-zinc-300 w-full */}
              <div className="h-[5vh]">
                <RouterLink />
              </div>
              <div className="h-[95vh]">{children}</div>
            </AuthLogin>
          </QueryClientProviderApp>
        </div>
      </body>
    </html>
  );
}
