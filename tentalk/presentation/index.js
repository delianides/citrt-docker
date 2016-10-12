// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Code Walk Through
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/fonts.css");
require("../assets/code.css");

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const theme = createTheme({
  "primary": "#f89734",
  "secondary": "#FFAD5A",
  "tertiary": "#FFC284",

  "dark-primary": "#000000",
  "dark-secondary": "#505050",
  "dark-tertiary": "#858585",

  "light-primary": "#ffffff",
  "light-secondary": "#f7f7f7",
  "light-tertiary": "#dddddd",

  "alert": "#c64f55"
}, {
  primary: "Roboto",
  secondary: "Open Sans",
});

const images = {
  black: require("../assets/bg-black.jpg"),
  orange: require("../assets/bg-orange.jpg"),
  white1: require("../assets/bg-white-1.jpg"),
  white2: require("../assets/bg-white-2.jpg"),
};

preloader(images);

const platforms = {
  wordpress: "http://drwd.es/hkhQ/Image%202016-10-11%20at%208.59.21%20PM.png",
  jekyll: "http://drwd.es/hk7f/Image%202016-10-11%20at%208.58.53%20PM.png",
  hugo: "http://drwd.es/hkBi/Image%202016-10-11%20at%208.58.32%20PM.png",
  ghost: "http://drwd.es/hkDv/Image%202016-10-11%20at%209.00.38%20PM.png",
  pelican: "http://drwd.es/hkBj/Image%202016-10-11%20at%209.00.11%20PM.png",
};

preloader(platforms);

const AppearBox = ({ children, textColor, bgColor }) => (
  <Layout>
    <Appear>
      <Fill>
        <Text size={7} caps bold textColor={textColor} bgColor={bgColor} margin={10} padding={10}>
          {children}
        </Text>
      </Fill>
    </Appear>
  </Layout>
);

const Title = ({ children, textColor = "light-primary"}) => (
  <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor={textColor}>
    {children}
  </Heading>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgImage={images.orange.replace("/", "")}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Local Development Made Easy
            </Heading>
            <Heading size={6} fit caps lineHeight={1} textColor="light-tertiary">
              Drew Delianides - @delianides
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={platforms.wordpress} />
          <Slide transition={["slide"]} bgImage={platforms.jekyll} />
          <Slide transition={["slide"]} bgImage={platforms.hugo} />
          <Slide transition={["slide"]} bgImage={platforms.ghost} />
          <Slide transition={["slide"]} bgImage={platforms.pelican} />
          <Slide transition={["slide"]} bgImage={images.black.replace("/", "")}
            notes="35K+ Stars, 10K+ Forks on Github">
            <Image src={"https://d2mw6vgfxwlz2a.cloudfront.net/2016/Feb/docker_logo-1455828502290.png"} margin="0px auto 40px"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
