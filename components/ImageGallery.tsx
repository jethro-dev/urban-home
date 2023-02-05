import Image from "next/image";
import React, { useState } from "react";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={selectedImage.src}
        alt={selectedImage.alt}
        width={100}
        height={100}
        className="w-full h-full object-contain mb-4 rounded ring-2 ring-inset aspect-square"
      />

      <div className="flex gap-4 overflow-auto">
        {images.map((image, index) => (
          <div className="relative flex-1 ring-2 aspect-square">
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              fill={true}
              className={`object-cover cursor-pointer ring-2 ring-inset rounded ${
                selectedImage === image ? "shadow-lg" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
