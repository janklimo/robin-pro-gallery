import { FC } from "react";

import Layout from "../components/Layout";

import image20190909 from "public/changelog/20190909.gif";
import image20190924_after from "public/changelog/20190924_after.png";
import image20190924_before from "public/changelog/20190924_before.png";

import PhotoAlbum from "../components/PhotoAlbum";

export const WhatsNew: FC = () => {
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
        This is a brief timeline of new Robin PRO features as they were released
        to all merchants.
      </p>
      <h2 className="text-lg text-primary mb-3">Sep 24, 2019</h2>
      <p className="text-gray-600 mb-8">
        Responsive images for retina screens. The app now uses srcset to render
        high-resolution images on devices that support them.
      </p>
      <PhotoAlbum images={[image20190924_before, image20190924_after]} />
      <p className="text-gray-600 mb-8">
        This is critical for delivering a great user experience on mobile
        devices. The latest iPhones, as well as most high-end Android devices
        require images in 3x the resolution to deliver a sharp-looking image.
      </p>
      <h2 className="text-lg text-primary mb-3">Sep 13, 2019</h2>
      <p className="text-gray-600 mb-8">
        Fixed gallery style definitions to make them immune from being
        overridden by theme styles.
      </p>
      <h2 className="text-lg text-primary mb-3">Sep 9, 2019</h2>
      <p className="text-gray-600">
        Gallery image thumbnails now come with on-hover overlays. These display
        image caption (if provided) or show an icon as a fallback.
      </p>
      <PhotoAlbum images={[image20190909]} />
    </Layout>
  );
};

export default WhatsNew;
