import Image from "next/image";
import { FC } from "react";

import Layout from "../components/Layout";

import image20190909 from "public/changelog/20190909.gif";

export const About: FC = () => {
  return (
    <Layout
      customMeta={{
        title: "What's New - Robin PRO Image Gallery",
      }}
    >
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        What's New?
      </h1>
      <p className="mt-6 mb-10 text-lg leading-8 text-gray-600">
        This is a quick timeline of new Robin PRO features as they were released
        to all merchants.
      </p>
      <h2 className="text-lg text-primary mb-3">Sep 9, 2019</h2>
      <p className="text-gray-600">
        Gallery image thumbnails now come with on-hover overlays. These display
        image caption (if provided) or show an icon as a fallback.
      </p>
      <div className="w-full md:w-1/2 lg:w-1/3 h-auto">
        <Image
          src={image20190909}
          layout="responsive"
          width={634}
          height={628}
          alt="Hover image overlay"
          title="Hover image overlay"
        />
      </div>
    </Layout>
  );
};

export default About;
