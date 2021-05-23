import styled from "styled-components/native";
import { FlatList, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { SettingItemProps } from "./index";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 16px;
  background: ${() => colors.purple};
`;

export const AccountInfoText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-bottom: 32px;
  text-align: center;
`;

export const SettingItemItemsList = styled(
  FlatList as new () => FlatList<SettingItemProps>
)`
  flex: 1;
`;

export const LogoutButton = styled.TouchableOpacity`
  border: ${() => StyleSheet.hairlineWidth}px solid #fff;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 16px;
`;

export const LogoutButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const Load = styled.ActivityIndicator`
  margin-top: 50%;
`;
