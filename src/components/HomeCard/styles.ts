import styled from "styled-components/native";
import colors from "../../styles/colors";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  border-radius: 8px;
  background: #fff;
  padding: 24px;
  margin-bottom: 16px;
  width: 100%;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${() => colors.text_gray};
  font-size: 17px;
  margin-left: 16px;
`;
