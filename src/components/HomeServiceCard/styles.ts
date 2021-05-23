import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  height: 100px;
  width: 90px;
  padding: 8px;
  justify-content: space-between;
  background: ${() => colors.purple_light};
  border-radius: 8px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #fff;
`;
