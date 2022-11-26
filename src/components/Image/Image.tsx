import StyledImage from "next/image";
import { ImageContainer } from "./Image.styles";

interface ImageProps {
  width?: string;
  height?: string;
  src: string;
  alt: string;
}

export const Image = ({
  // width,
  // height,
  src,
  alt,
}: ImageProps): JSX.Element => {
  return (
    <ImageContainer>
      <StyledImage
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </ImageContainer>
  );
};
