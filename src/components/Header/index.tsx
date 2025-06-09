import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { Link } from "react-router-dom";

import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
    HeaderSection,
    LogoContainer,
    Burger,
    NotHidden,
    Menu,
    CustomNavLinkSmall,
    Label,
    Outline,
    Span,
} from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const [visible, setVisibility] = useState(false);

    const toggleButton = () => {
        setVisibility(!visible);
    };

    const navigate = useNavigate();
    const location = useLocation();

    const scrollTo = (id: string) => {
        if (location.pathname !== "/") {
            // Navigate to home first, then scroll after slight delay
            navigate("/");

            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Adjust delay if needed
        } else {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }

        setVisibility(false); // Close drawer if open
    };

    const MenuItem = () => {
        // const scrollTo = (id: string) => {
        //     const element = document.getElementById(id) as HTMLDivElement;
        //     element.scrollIntoView({ behavior: "smooth" });
        //     setVisibility(false);
        // };

        return (
            <>
                <CustomNavLinkSmall onClick={() => scrollTo("about")}>
                    <Span>About</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
                    <Span>Mission</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall onClick={() => scrollTo("product")}>
                    <Span>Product</Span>
                </CustomNavLinkSmall>

                <CustomNavLinkSmall as={Link} to="/faq">
                    <Span>FAQ</Span>
                </CustomNavLinkSmall>

                <CustomNavLinkSmall
                    style={{ width: "180px" }}
                    onClick={() => scrollTo("contact")}
                >
                    <Span>
                        <Button>Contact</Button>
                    </Span>
                </CustomNavLinkSmall>
            </>
        );
    };

    return (
        <HeaderSection>
            <Container>
                <Row justify="space-between">
                    <LogoContainer to="/" aria-label="homepage">
                        <SvgIcon src="logo.svg" width="100%" height="100%" />
                    </LogoContainer>
                    <NotHidden>
                        <MenuItem />
                    </NotHidden>
                    <Burger onClick={toggleButton}>
                        <Outline />
                    </Burger>
                </Row>
                <Drawer closable={false} open={visible} onClose={toggleButton}>
                    <Col style={{ marginBottom: "2.5rem" }}>
                        <Label onClick={toggleButton}>
                            <Col span={12}>
                                <Menu>Menu</Menu>
                            </Col>
                            <Col span={12}>
                                <Outline />
                            </Col>
                        </Label>
                    </Col>
                    <MenuItem />
                </Drawer>
            </Container>
        </HeaderSection>
    );
};

export default Header;
