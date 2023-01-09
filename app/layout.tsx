import "./globals.css";
import Header from "./Header";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main className={`${roboto.className} p-5`}>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
