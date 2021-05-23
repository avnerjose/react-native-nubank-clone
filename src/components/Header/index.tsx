import React from "react";
import { useNavigation } from "@react-navigation/core";
import Feather from "@expo/vector-icons/Feather";
import { Container, Button, ButtonsView, Title } from "./styles";

interface HeaderProps {
  isVisible?: boolean;
  setIsVisible?: (b: boolean) => void;
}

export function Header({ isVisible, setIsVisible }: HeaderProps) {
  const navigation = useNavigation();

  const handleSettingsClick = () => {
    navigation.navigate("settings");
  };

  const handleCloseSettingsClick = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Title>Olá, Avner</Title>
      <ButtonsView>
        {setIsVisible ? (
          <ButtonsView>
            <Button onPress={() => setIsVisible(!isVisible)}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={24}
                color="#fff"
              />
            </Button>
            <Button onPress={handleSettingsClick}>
              <Feather name="settings" size={24} color="#fff" />
            </Button>
          </ButtonsView>
        ) : (
          <Button onPress={handleCloseSettingsClick}>
            <Feather name="x" size={24} color="#fff" />
          </Button>
        )}
      </ButtonsView>
    </Container>
  );
}
