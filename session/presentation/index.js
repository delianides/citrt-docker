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
          <Slide transition={["slide"]} bgImage={images.black.replace("/", "")}>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Docker
            </Heading>
            <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
              Build, Run, and Ship Apps Anywhere
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="Not Pants">
            <Image src={"http://drwd.es/hhfR/Image%202016-10-06%20at%207.06.57%20PM.jpg"} margin="0px auto 40px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="TRS-80">
            <Image src={"http://drwd.es/heo4/me.jpg"} margin="0px auto 40px"/>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.white2.replace("/", "")}
            notes="35K+ Stars, 10K+ Forks on Github">
            <Image src={"https://d2mw6vgfxwlz2a.cloudfront.net/2016/Feb/docker_logo-1455828502290.png"} margin="0px auto 40px"/>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.orange.replace("/", "")}>
            <Heading fit caps lineHeight={1} textColor="gray">
              Learning Outcomes
            </Heading>
            <Appear><Text size={7} caps lineHeight={1.4} bold bgColor="white">To understand Docker, what problems it solves, and how it can help you.</Text></Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.black.replace("/","")}>
            <Heading fit caps textColor="primary">What is Docker?</Heading>
            <AppearBox textColor="black" bgColor="white">Introduced in 2013</AppearBox>
            <AppearBox textColor="black" bgColor="white">Server API with Client</AppearBox>
            <AppearBox textColor="black" bgColor="white">Containers have always been around</AppearBox>
          </Slide>
          <Slide bgImage={images.orange.replace("/","")} notes="magic">
            <Heading fit caps textColor="black">What Docker Isn't</Heading>
          </Slide>
          <Slide transition={"slide"} bgImage={images.white2.replace("/","")}>
            <Image src={"http://www.reactiongifs.com/wp-content/uploads/2013/03/magic.gif"} />
          </Slide>
          <Slide transition={"slide"} bgImage={images.orange.replace("/", "")}>
            <Heading caps fit textColor="black">Why Docker Excites Me</Heading>
            <AppearBox textColor="primary" bgColor="white">Accelerates Development</AppearBox>
            <AppearBox textColor="primary" bgColor="white">Development = Production</AppearBox>
            <AppearBox textColor="primary" bgColor="white">Simplifies Deployment</AppearBox>
            <AppearBox textColor="primary" bgColor="white">Containerize Almost Anything</AppearBox>
          </Slide>
          <Slide transition={"slide"} bgImage={images.black.replace("/", "")}>
            <Heading caps fit textColor="primary">Why Docker Should Excite You</Heading>
            <AppearBox textColor="black" bgColor="primary">Cost Efficient</AppearBox>
            <AppearBox textColor="black" bgColor="primary">Easy Onboarding</AppearBox>
            <AppearBox textColor="black" bgColor="primary">Extensive Community</AppearBox>
            <AppearBox textColor="black" bgColor="primary">Scales as you do</AppearBox>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.orange.replace("/","")} notes="magic">
            <Heading fit caps textColor="black">How Does Docker work?</Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.black.replace("/", "")}>
            <Layout>
              <Fill>
                <Appear fid="1"><Text size={7} caps bold textColor="black" bgColor="primary" margin={10} padding={10}>Linux</Text></Appear>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Appear fid="2"><Text size={7} caps bold textColor="black" bgColor="primary" margin={10} padding={10}>Operating System</Text></Appear>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Appear fid="3"><Text size={7} caps bold textColor="black" bgColor="#3F95E2" margin={10} padding={10}>Docker Engine</Text></Appear>
              </Fill>
            </Layout>
            <Layout>
              <Appear>
                  <Fill>
                    <Text size={7} caps bold textColor="black" bgColor="white" margin={10} padding={10}>App</Text>
                  </Fill>
              </Appear>
              <Appear>
                  <Fill>
                    <Text size={7} caps bold textColor="black" bgColor="white" margin={10} padding={10}>App</Text>
                  </Fill>
              </Appear>
              <Appear>
                  <Fill>
                    <Text size={7} caps bold textColor="black" bgColor="white" margin={10} padding={10}>App</Text>
                  </Fill>
              </Appear>
              </Layout>
            </Slide>
            <Slide transition={["slide"]} bgColor="black">
              <Heading caps size={2} textColor="primary">Dockerfiles</Heading>
              <CodePane
                lang="docker"
                source={require("raw!./dockerfile.example")}
              />
            </Slide>
            <CodeSlide
              transition={["slide"]}
              lang="docker"
              code={require("raw!./dockerfile.example")}
              ranges={[
                { loc: [0,1], title: "FROM"},
                { loc: [3,6] },
                { loc: [9,17] },
                { loc: [19, 22], title: "VOLUME"},
                { loc: [22, 24], title: "ENV"},
                { loc: [25, 32] },
                { loc: [33, 34], title: "COPY"},
                { loc: [34, 35]},
                { loc: [37, 39], title: "ENTRYPOINT & CMD"}
              ]}
            />
            <Slide transition={["slide"]}>
              <Heading fit caps>Demo!</Heading>
            </Slide>
            <Slide transition={["slide"]} bgImage={images.white2.replace("/","")}>
              <Heading fit caps>Tools</Heading>
            </Slide>
            <Slide transition={["slide"]} bgImage={images.black.replace("/","")}>
              <Title>Docker Compose</Title>
              <AppearBox bgColor="primary">Easily Create and Manage Containers</AppearBox>
              <AppearBox bgColor="primary">Versionable</AppearBox>
              <AppearBox bgColor="primary">Easily Configurable with YAML</AppearBox>
            </Slide>
            <Slide transition={["slide"]} bgImage={images.orange.replace("/", "")}>
              <Title>Docker Machine</Title>
              <AppearBox bgColor="white">Create local and remote machines</AppearBox>
              <AppearBox bgColor="white">Docker on different OS</AppearBox>
              <AppearBox bgColor="white">Integrates with Docker Swarm</AppearBox>
            </Slide>
            <Slide transition={["slide"]} bgImage={images.white2.replace("/", "")}>
              <Title textColor="primary">Kitematic</Title>
              <AppearBox bgColor="primary">GUI</AppearBox>
              <AppearBox bgColor="primary">Integrates with DockerHub</AppearBox>
              <AppearBox bgColor="primary">Still in Beta</AppearBox>
            </Slide>
            <Slide transition={["slide"]} bgImage={images.black.replace("/", "")}>
              <Title textColor="primary">Production</Title>
              <AppearBox bgColor="primary" textColor="black">Docker Swarm</AppearBox>
              <AppearBox bgColor="primary" textColor="black">Kubernetes</AppearBox>
              <AppearBox bgColor="primary" textColor="black">Rancher</AppearBox>
              <AppearBox bgColor="primary" textColor="black">Amazon ECS</AppearBox>
            </Slide>
            <Slide transition={["slide"]} bgImage={images.white1.replace("/", "")}>
              <Title textColor="dark-tertiary">The End</Title>
            </Slide>
            <Slide transition={["slide"]} bgImage={images.orange.replace("/", "")}>
              <Title textColor="dark-tertiary">Further Study</Title>
              <Text>All Slides and notes are available on Github at http://drwd.es/hiIs</Text>
            </Slide>
            <Slide transition={["slide"]} bgImage={images.white2.replace("/", "")}>
              <Title textColor="dark-tertiary">Questions?</Title>
            </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
