import Container from "@/common/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Styles } from "@/styles/styles";

const FAQPage = () => {
    return (
        <Container>
            <Styles />
            <Header />

            <div style={{ padding: "60px 20px", textAlign: "center" }}>
                <h1 style={{ fontSize: "2rem", marginBottom: "60px", }}>Frequently Asked Questions</h1>
                <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left", lineHeight: "1.8" }}>
                    <p><strong>1. How do I delete app data?</strong><br />
                    You can delete app data anytime via your device’s app settings by using the “Clear Data” option.</p>

                    <p><strong>2. Do you collect any personal information?</strong><br />
                    No. We do not collect your name, email, or any payment info.</p>

                    <p><strong>3. How does the BuyMeACoffee link work?</strong><br />
                    Clicking it will simply open an external support page. No user tracking or interaction is stored by us.</p>
                </div>
            </div>

            <Footer />
        </Container>
    );
};

export default FAQPage;
