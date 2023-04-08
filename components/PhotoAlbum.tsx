import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import LightboxImage from "./LightboxImage";

interface Props {
  images: StaticImageData[];
}

const PhotoAlbum: FC<Props> = ({ images }) => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, i) => (
          <div key={i}>
            <Image
              src={image}
              layout="responsive"
              alt="Robin PRO Photo Gallery changelog update"
              title="Robin PRO Photo Gallery changelog update"
              onClick={() => setIndex(i)}
              className="cursor-pointer rounded-lg"
            />
          </div>
        ))}
      </div>
      <Lightbox
        carousel={{ finite: true }}
        open={index > -1}
        close={() => setIndex(-1)}
        slides={images}
        render={{ slide: LightboxImage }}
      />
    </div>
  );
};

export default PhotoAlbum;
