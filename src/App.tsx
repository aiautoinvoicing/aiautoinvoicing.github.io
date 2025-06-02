import { Suspense, lazy } from "react";
import Header from "./components/Header";
import ScrollToTop from "./common/ScrollToTop";
import MiddleBlockContent from "./content/MiddleBlockContent.json";
import IntroContent from "./content/IntroContent.json";
import { Styles } from "./styles/styles";
const Container = lazy(() => import("././common/Container"));

import AboutContent from "././content/AboutContent.json";
import MissionContent from "././content/MissionContent.json";
import ProductContent from "././content/ProductContent.json";
import ContactContent from "././content/ContactContent.json";

const ContentBlock = lazy(() => import("./components/ContentBlock"));
const MiddleBlock = lazy(() => import("./components/MiddleBlock"));
const Contact = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
    return (
        <Container>
            <Styles />
            <Header />
            <ScrollToTop />
            <Suspense fallback={<div>Loading...</div>}>
                <ContentBlock
                    direction="right"
                    title={IntroContent.title}
                    content={IntroContent.text}
                    button={IntroContent.button}
                    icon="developer.svg"
                    id="intro"
                />
                <MiddleBlock
                    title={MiddleBlockContent.title}
                    content={MiddleBlockContent.text}
                    button={MiddleBlockContent.button}
                    id="about"
                />
                <ContentBlock
                    direction="left"
                    title={AboutContent.title}
                    content={AboutContent.text}
                    section={AboutContent.section}
                    icon="graphs.svg"
                    id="about"
                />
                <ContentBlock
                    direction="right"
                    title={MissionContent.title}
                    content={MissionContent.text}
                    icon="product-launch.svg"
                    id="mission"
                />
                <ContentBlock
                    direction="left"
                    title={ProductContent.title}
                    content={ProductContent.text}
                    icon="waving.svg"
                    id="product"
                />
                <Contact
                    title={ContactContent.title}
                    content={ContactContent.text}
                    id="contact"
                />

                <Footer />
            </Suspense>
        </Container>
    );
}

export default App;
