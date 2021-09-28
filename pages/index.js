import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Abel Kibebe</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#10101A] w-full h-screen text-white">
        <Sidebar />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
