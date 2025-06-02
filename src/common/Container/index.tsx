import { StyledContainer } from "./styles";
import type { ContainerProps } from "../types";

const Container = ({ border, children }: ContainerProps) => (
  <StyledContainer border={border}>{children}</StyledContainer>
);

export default Container;
