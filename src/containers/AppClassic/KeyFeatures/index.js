import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { mediaRecordOutline } from "react-icons-kit/typicons/mediaRecordOutline";
import { plus } from "react-icons-kit/typicons/plus";
import { starOutline } from "react-icons-kit/typicons/starOutline";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import FeatureBlock from "common/components/FeatureBlock";
import { SectionHeader } from "../appClassic.style";
import SectionWrapper, { FeatureWrapper } from "./keyFeatures.style";

import { keyFeatures } from "common/data/AppClassic";

const KeyFeatures = () => {
  const { slogan, title, features } = keyFeatures;

  return (
    <SectionWrapper id="keyFeatures">
      <Container>
        <div
          style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Fade up>
            <>
              <Heading content={title} />
              <img
                src="//images01.nicepage.com/c461c07a441a5d220e8feb1a/ce3b776fd515502ca81efe76/60028-Converted.png"
                alt=""
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 300,
                }}
                data-image-width="411"
                data-image-height="393"
              />
            </>
          </Fade>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default KeyFeatures;
