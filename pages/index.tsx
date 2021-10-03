import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Robin PRO Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-600">
          Welcome to{" "}
          <a
            className="text-primary"
            href="https://apps.shopify.com/robin-pro-image-gallery"
          >
            Robin PRO!
          </a>
        </h1>
      </main>
    </div>
  );
}
