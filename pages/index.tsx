import Image from "next/image";

import image1 from "public/image1.png";
import image2 from "public/image2.png";
import image3 from "public/image3.png";
import image4 from "public/image4.png";
import image5 from "public/image5.png";
import Decorations from "../components/Decorations";
import Head from "../components/Head";

export default function Home() {
  return (
    <>
      <Head />
      <div className="bg-white">
        <main>
          <div className="relative isolate">
            <Decorations />

            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Shopify photo gallery app built for{" "}
                      {new Date().getFullYear()}
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      With Robin PRO you can easily create beautiful, fast,
                      mobile-friendly photo galleries, protect them with
                      watermarks and link them to products to drive sales.
                      Design pixel-perfect grid and masonry layouts. Let it
                      optimize and lazy-load your images in the perfect size and
                      format from a fast CDN. Upload in bulk and publish in
                      seconds.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="https://apps.shopify.com/robin-pro-image-gallery"
                        target="_blank"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out duration-500"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <Image
                          src={image1}
                          layout="responsive"
                          placeholder="blur"
                          width={500}
                          height={750}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          alt="A bouquet of flowers"
                          title="A bouquet of flowers"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <Image
                          src={image2}
                          layout="responsive"
                          placeholder="blur"
                          width={500}
                          height={750}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          alt="A bouquet of flowers"
                          title="A bouquet of flowers"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          src={image3}
                          layout="responsive"
                          placeholder="blur"
                          width={500}
                          height={749}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          alt="A bouquet of flowers"
                          title="A bouquet of flowers"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <Image
                          src={image4}
                          layout="responsive"
                          placeholder="blur"
                          width={500}
                          height={750}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          alt="A bouquet of flowers"
                          title="A bouquet of flowers"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          src={image5}
                          layout="responsive"
                          placeholder="blur"
                          width={500}
                          height={667}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          alt="Flower shop"
                          title="Flower shop"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
