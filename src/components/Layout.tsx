import Footer from "./Footer";
import Head from "next/head";
import NavBar from "./NavBar";
import { ReactNode } from "react";

export default function Layout({
  children,
  location,
}: {
  children: ReactNode;
  location: string;
}) {
  return (
    <div className="relative min-h-screen">
      <Head>
        <link rel="icon" href="cflabs-logo.png" />
        <title>CFLabs</title>
      </Head>
      <NavBar location={location} />
      <main className="flex flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}
