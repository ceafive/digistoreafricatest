import React from "react";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { playCircle } from "react-icons-kit/fa/playCircle";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Rating from "common/components/Rating";
import Container from "common/components/UI/Container";
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
} from "./banner.style";

import microsoft from "common/assets/image/appClassic/microsoft.svg";
// import bannerImg from "common/assets/image/appClassic/bannerImg.jpeg";
import bannerImg from "common/assets/image/appClassic/bannerImg2.png";

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Empower Your Business with the tools to go Digital"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="All the tools you need to manage your business operations, reach more customers, and access financial services to expand your business." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <a href="https://signup.digistoreafrica.com/" target={"_blank"}>
                <Button className="primary" title="Sign Up" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=qOCFQPgpUe4"
                target={"_blank"}
              >
                <Button
                  className="text"
                  variant="textButton"
                  icon={<Icon icon={playCircle} />}
                  iconPosition="left"
                  title="Watch Video"
                />
              </a>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
