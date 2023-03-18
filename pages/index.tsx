import Layout from "../components/Layout";

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-16">
        <h1 className="text-6xl font-bold text-gray-500">
          Welcome to{" "}
          <div className="group inline-block">
            <a
              target="_blank"
              href="https://apps.shopify.com/robin-pro-image-gallery"
              className="text-primary transition duration-300"
            >
              Robin PRO!
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary"></span>
            </a>
          </div>
        </h1>
      </main>
    </Layout>
  );
};

export default Index;
