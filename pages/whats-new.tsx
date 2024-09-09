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
import image20210126 from "public/changelog/20210126.png";
import image20211223 from "public/changelog/20211223.png";
import image20220921 from "public/changelog/20220921.png";
import image20221105 from "public/changelog/20221105.png";
import image20221228 from "public/changelog/20221228.png";
import image20230201 from "public/changelog/20230201.png";
import image20230204 from "public/changelog/20230204.png";
import image20230214 from "public/changelog/20230214.png";
import image20230405 from "public/changelog/20230405.gif";
import image20230414_admin from "public/changelog/20230414_admin.png";
import image20230414_client from "public/changelog/20230414_client.png";
import image20230605 from "public/changelog/20230605.png";
import image20230712 from "public/changelog/20230712.png";
import image20231105 from "public/changelog/20231105.png";
import image20240909 from "public/changelog/20240909.png";

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
        This is a brief timeline of major new Robin PRO features as they were
        released to all merchants.
      </p>
      {/**
       * Changelog entries
       */}
      <h2 className="text-lg text-primary mb-3">Sep 9, 2024</h2>
      <p className="text-gray-600">
        The app is now using Shopify's new admin design language. The refreshed
        interface aligns perfectly with other Shopify admin tools, creating a
        consistent look and feel throughout the platform.
      </p>
      <p className="text-gray-600">
        By adopting the latest Polaris components and styling, the app now
        offers improved usability, accessibility, and visual harmony, making it
        feel like a natural extension of the Shopify admin environment.
      </p>
      <PhotoAlbum images={[image20240909]} />
      <h2 className="text-lg text-primary mb-3">Aug 6, 2024</h2>
      <p className="text-gray-600">Easily export and download your galleries</p>
      <div
        style={{
          position: "relative",
          paddingBottom: "55.61277033985582%",
          height: 0,
        }}
        className="mb-6"
      >
        <iframe
          src="https://www.loom.com/embed/1b99151891aa47dd8e35537550feb4f2?sid=d3085abd-1db8-4734-8166-2d1e01a5bc90"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <h2 className="text-lg text-primary mb-3">Feb 22, 2024</h2>
      <p className="text-gray-600">
        Improved support for uploads involving a large number of images. You can
        now comfortably upload thousands of images in one drag-and-drop action
        without any issues, addressing previous concerns where a large number of
        images could lead to request timeouts and images being dropped.
      </p>
      <p className="text-gray-600">
        Additionally, we've fixed an issue that occasionally caused images to be
        stored out of order, ensuring a smoother and more reliable upload
        process.
      </p>
      <h2 className="text-lg text-primary mb-3">Nov 5, 2023</h2>
      <p className="text-gray-600">
        Hovering over images with configured links will show an icon indicating
        that clicking on them will take the user to a new location.
      </p>
      <PhotoAlbum images={[image20231105]} />
      <h2 className="text-lg text-primary mb-3">Aug 27, 2023</h2>
      <div className="text-gray-600">
        <p>
          Galleries now have their own settings so you're free to make every
          gallery unique!
        </p>
        <p>
          When creating a new gallery you can conveniently clone settings of an
          existing gallery.
        </p>
        <p>
          Gallery view has been split into 3 tabs, making it wider and easier to
          work with.
        </p>
      </div>
      <div className="w-full md:w-3/5 my-6">
        <video controls src="/changelog/20230827.mp4" />
      </div>
      <h2 className="text-lg text-primary mb-3">Jul 12, 2023</h2>
      <p className="text-gray-600">
        Lazy loading is now disabled by default but it's configurable under
        settings. This loads all gallery images at once so users don't have to
        wait for them when they scroll down the page.
      </p>
      <PhotoAlbum images={[image20230712]} />
      <h2 className="text-lg text-primary mb-3">Jul 9, 2023</h2>
      <p className="text-gray-600">
        Galleries and images data is now served from{" "}
        <code>https://robinpro.org</code> host. This fixes the app for users
        visiting from China.
      </p>
      <h2 className="text-lg text-primary mb-3">Jun 10, 2023</h2>
      <div className="text-gray-600">
        <p>Added the ability to configure aspect ratio of grid tiles.</p>
        <p>
          You can specify a completely freeform setting or choose form a list of
          popular aspect ratios. Out of the box, all images in a grid layout
          will be square.
        </p>
      </div>
      <div className="w-full md:w-3/5 my-6">
        <video controls src="/changelog/20230610.mp4" />
      </div>
      <h2 className="text-lg text-primary mb-3">Jun 5, 2023</h2>
      <div className="text-gray-600">
        <p>Added visual cards for choosing between image gallery layouts.</p>
      </div>
      <PhotoAlbum images={[image20230605]} />
      <h2 className="text-lg text-primary mb-3">Apr 14, 2023</h2>
      <div className="text-gray-600">
        <p>
          The app is now even faster thanks to optimized JavaScript bundles.
        </p>
        <p>
          On the storefront, it uses 7% less JavaScript. The{" "}
          <code>client.js</code> file that gets loaded on every page got reduced
          to just 1.1kB. The code loaded by the app in the admin interface got
          trimmed down by 55kB (12%).
        </p>
        <p>
          For the technical reader, this was accomplished by migrating asset
          bundling from Webpack to Vite.
        </p>
      </div>
      <PhotoAlbum images={[image20230414_client, image20230414_admin]} />
      <h2 className="text-lg text-primary mb-3">Apr 5, 2023</h2>
      <p className="text-gray-600">
        Added a way to disable the app temporarily. This is useful when you want
        to work on your galleries but don't want to remove their embed codes
        from your pages.
      </p>
      <PhotoAlbum images={[image20230405]} />
      <h2 className="text-lg text-primary mb-3">Feb 14, 2023</h2>
      <p className="text-gray-600">
        Robin PRO is now officially speed-tested by Shopify ⚡️, meaning it has
        no impact on the speed of your online store whatsoever.
      </p>
      <PhotoAlbum images={[image20230214]} />
      <h2 className="text-lg text-primary mb-3">Feb 4, 2023</h2>
      <p className="text-gray-600">New navigation menu.</p>
      <PhotoAlbum images={[image20230204]} />
      <h2 className="text-lg text-primary mb-3">Feb 1, 2023</h2>
      <p className="text-gray-600">
        Yearly plans and a revamped <em>Plans</em> page.
      </p>
      <PhotoAlbum images={[image20230201]} />
      <h2 className="text-lg text-primary mb-3">Jan 22, 2023</h2>
      <p className="text-gray-600 mb-8">
        Optimized JavaScript bundle to only load the full client app when a
        gallery is embedded on a given page. This reduces the amount of
        JavaScript necessary by up to 90%.
      </p>
      <h2 className="text-lg text-primary mb-3">Jan 3, 2023</h2>
      <p className="text-gray-600 mb-8">
        Redirect directly to the gallery page once a new gallery is created.
      </p>
      <h2 className="text-lg text-primary mb-3">Dec 28, 2022</h2>
      <p className="text-gray-600">
        Your galleries are now paginated. This makes the app faster for users
        with a large number of galleries. Use <em>J</em> and <em>K</em> keys for
        faster navigation.
      </p>
      <PhotoAlbum images={[image20221228]} />
      <h2 className="text-lg text-primary mb-3">Nov 5, 2022</h2>
      <p className="text-gray-600">
        Added in-app chat to make reaching out for help faster and easier.
      </p>
      <PhotoAlbum images={[image20221105]} />
      <h2 className="text-lg text-primary mb-3">Sep 27, 2022</h2>
      <p className="text-gray-600 mb-8">
        The app will now keep its app section up-to-date for every active theme
        installed on your store. This way you can switch themes seamlessly.
      </p>
      <h2 className="text-lg text-primary mb-3">Sep 21, 2022</h2>
      <p className="text-gray-600">
        New loading screen for a nicer loading experience.
      </p>
      <PhotoAlbum images={[image20220921]} />
      <h2 className="text-lg text-primary mb-3">Sep 18, 2022</h2>
      <p className="text-gray-600 mb-8">
        The app now uses session tokens so logging in becomes faster and
        smoother, especially in Safari.
      </p>
      <h2 className="text-lg text-primary mb-3">Dec 23, 2021</h2>
      <p className="text-gray-600">
        Added the ability to specify how many rows of images will be shown when
        using <em>Compact view</em>.
      </p>
      <PhotoAlbum images={[image20211223]} />
      <h2 className="text-lg text-primary mb-3">Jan 26, 2021</h2>
      <p className="text-gray-600">
        You can now add <em>alt</em> text to your images
      </p>
      <PhotoAlbum images={[image20210126]} />
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
        This is especially useful when an upload fails. When you retry, you'll
        resume the previous upload. You'll never have to re-upload the whole
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
