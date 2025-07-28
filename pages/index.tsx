import Head from "next/head";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Welcome to ALX Project 2" />
      </Head>
      <main className="p-6">
        <Header />
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold">Hello, this is the home page!</h2>
        </div>
      </main>
    </>
  );
}
