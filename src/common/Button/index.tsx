import { StyledButton } from "./styles";
import type { ButtonProps } from "../types";

export const Button = ({ color, children, onClick }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
);
