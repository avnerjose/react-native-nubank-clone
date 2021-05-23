import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background: ${() => colors.purple_light};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
`;
