import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Container, SettingItemTitle, SettingItemView } from "./styles";

interface SettingItemProps {
  title: string;
  iconName: any;
}

export function SettingItem({ title, iconName }: SettingItemProps) {
  return (
    <Container>
      <SettingItemView>
        <FontAwesome name={iconName} color="#FFF" size={24} />
        <SettingItemTitle>{title}</SettingItemTitle>
      </SettingItemView>
      <FontAwesome name="chevron-right" color="#FFF" />
    </Container>
  );
}
