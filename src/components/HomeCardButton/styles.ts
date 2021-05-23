import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  border: 1px solid ${colors.purple};
  padding: 8px 16px;
  border-radius: 4px;
  align-self: flex-start;
`;

export const ButtonText = styled.Text`
  color: ${colors.purple};
  font-weight: bold;
`;
