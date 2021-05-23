import React from "react";
import { HomeCardButton } from "../HomeCardButton";
import Feather from "@expo/vector-icons/Feather";
import colors from "../../styles/colors";
import { Container, CardHeader, Title } from "./styles";

interface HomeCardProps {
  children: any;
  title: string;
  buttonTitle?: string;
  iconName: any;
}

export function HomeCard({
  children,
  title,
  buttonTitle,
  iconName,
}: HomeCardProps) {
  return (
    <Container>
      <CardHeader>
        <Feather name={iconName} size={16} color={colors.text_gray} />
        <Title>{title}</Title>
      </CardHeader>
      {children}
      {buttonTitle && <HomeCardButton title={buttonTitle} />}
    </Container>
  );
}
