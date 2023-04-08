import { FC } from "react";

import Layout from "../components/Layout";

import image20190909 from "public/changelog/20190909.gif";
import image20190924_after from "public/changelog/20190924_after.png";
import image20190924_before from "public/changelog/20190924_before.png";
import image20191002 from "public/changelog/20191002.gif";
import image20191104 from "public/changelog/20191104.png";
import image20191105 from "public/changelog/20191105.png";
import image20200618 from "public/changelog/20200618.gif";
import image20200822 from "public/changelog/20200822.gif";
import image20201229 from "public/changelog/20201229.gif";

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
      <h2 className="text-lg text-primary mb-3">Dec 29, 2020</h2>
      <p className="text-gray-600">
        Adding galleries to your homepage (or any other part of your store that
        works with sections) has never been easier. No need to touch code at
        all.
      </p>
      <PhotoAlbum images={[image20201229]} />
      <p className="text-gray-600 mb-8">
        Add the section, select a gallery, save your theme, done!
      </p>
      <h2 className="text-lg text-primary mb-3">Aug 22, 2020</h2>
      <p className="text-gray-600 mb-8">
        Now you have full control over all the labels so you can customize or
        translate them according to your needs.
      </p>
      <PhotoAlbum images={[image20200822]} />
      <h2 className="text-lg text-primary mb-3">Jun 18, 2020</h2>
      <p className="text-gray-600 mb-8">
        You can now easily sort galleries. A little quality-of-life improvement
        for merchants with lots of galleries.
      </p>
      <PhotoAlbum images={[image20200618]} />
      <h2 className="text-lg text-primary mb-3">Nov 23, 2019</h2>
      <p className="text-gray-600 mb-8">
        When opening a gallery on a mobile device, users are presented with a
        quick reminder letting them know they can navigate between gallery
        images by swiping left and right.
      </p>
      <div className="mb-8">
        <iframe
          src="https://player.vimeo.com/video/375108954?h=a8578eb88e"
          width="320"
          height="694"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h2 className="text-lg text-primary mb-3">Nov 5, 2019</h2>
      <p className="text-gray-600 mb-8">
        Compact view galleries now show a <em>Reset</em> button to quickly
        minimize the expanded gallery back to the initial two rows of images.
      </p>
      <PhotoAlbum images={[image20191105]} />
      <h2 className="text-lg text-primary mb-3">Nov 4, 2019</h2>
      <p className="text-gray-600 mb-8">
        Thanks to smart caching, galleries are now returned and rendered up to
        2x faster!
      </p>
      <PhotoAlbum images={[image20191104]} />
      <h2 className="text-lg text-primary mb-3">Oct 29, 2019</h2>
      <p className="text-gray-600 mb-8">
        App CSS style definitions are now strictly scoped. This is to prevent
        conflicts in rare cases when parent Shopify theme also uses Photoswipe
        to render its images.
      </p>
      <h2 className="text-lg text-primary mb-3">Oct 8, 2019</h2>
      <p className="text-gray-600 mb-8">
        Optimized the way the list of your galleries is loaded so that they're
        only fetched once. This saves you time when you're returning back from
        the gallery view to the galleries list view.
      </p>
      <h2 className="text-lg text-primary mb-3">Oct 5, 2019</h2>
      <p className="text-gray-600 mb-8">
        The same gallery can now be displayed on the same page as many times as
        you need. Fixed a sneaky bug that would only permit the first instance
        of a gallery to be rendered.
      </p>
      <h2 className="text-lg text-primary mb-3">Oct 2, 2019</h2>
      <p className="text-gray-600">
        Image uploads are now multipart. This means they can be conveniently
        paused and resumed at any time.
      </p>
      <PhotoAlbum images={[image20191002]} />
      <p className="text-gray-600 mb-8">
        This is especially useful when an upload fails. When you retry, you’ll
        resume the previous upload. You’ll never have to re-upload the whole
        file from scratch again.
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
