import React from "react";
import { ButtonText, Container } from "./styles";

interface HomeCardButtonProps {
  title: string;
}

export function HomeCardButton({ title }: HomeCardButtonProps) {
  return (
    <Container activeOpacity={0.6}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
