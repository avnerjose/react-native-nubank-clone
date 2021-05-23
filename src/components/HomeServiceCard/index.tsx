import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Container, Title } from "./styles";

interface HomeServiceCardProps {
  title: string;
  iconName: any;
}

export function HomeServiceCard({ title, iconName }: HomeServiceCardProps) {
  return (
    <Container activeOpacity={0.6}>
      <FontAwesome name={iconName} color="#FFF" size={16} />
      <Title>{title}</Title>
    </Container>
  );
}
