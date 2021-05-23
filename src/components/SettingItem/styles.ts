import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  border-top-width: ${() => StyleSheet.hairlineWidth}px;
  border-top-color: #fff;
  padding: 16px;
  justify-content: space-between;
`;

export const SettingItemView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SettingItemTitle = styled.Text`
  font-size: 17px;
  color: #fff;
  margin-left: 16px;
`;
