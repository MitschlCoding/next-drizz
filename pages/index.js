import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <Head>
        <title>Next-Drizz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Welcome to Next-Drizz on Docker!
        </h1>
      </main>
    </div>
  );
}
