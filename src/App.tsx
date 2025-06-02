import { Suspense, lazy } from "react";
import Header from "./components/Header";
import ScrollToTop from "./common/ScrollToTop";
import MiddleBlockContent from "./content/MiddleBlockContent.json";
import IntroContent from "./content/IntroContent.json";

const ContentBlock = lazy(() => import("./components/ContentBlock"));
const MiddleBlock = lazy(() => import("./components/MiddleBlock"));
const Contact = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
    return (
        <>
            <Header />
            {/* <ScrollToTop />
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
                <Contact />
                <Footer />
            </Suspense> */}
        </>
    );
}

export default App;
