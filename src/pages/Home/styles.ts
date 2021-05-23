import styled from "styled-components/native";
import { FlatList } from "react-native";
import colors from "../../styles/colors";
import { ServiceProps } from "./index";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 16px;
  background: ${() => colors.purple};
  justify-content: space-between;
`;

export const CardText = styled.Text`
  font-size: 17px;
  max-width: 90%;
  margin-bottom: 16px;
`;

export const CardsList = styled.ScrollView`
  flex: 1;
`;
export const CreditCardPayment = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${colors.text_blue};
`;

export const CreditCardText = styled.Text`
  font-size: 14px;
`;

export const CreditCardLimit = styled(CreditCardText)`
  color: ${() => colors.text_green};
  font-weight: bold;
`;

export const AccountCardText = styled(CreditCardText)``;

export const AccountCardMoney = styled(CreditCardPayment)`
  color: ${() => colors.text_dark};
`;

export const ServiceList = styled(FlatList as new () => FlatList<ServiceProps>)`
  margin-top: 32px;
  max-height: 100px;
`;

export const LoanText = styled(CardText)`
  margin-bottom: 0px;
`;

export const LoanTextBold = styled(CardText)`
  font-weight: bold;
`;

export const NotVisibleView = styled.View`
  background: ${() => colors.text_gray};
  height: 48px;
  opacity: 0.1;
`;

export const Load = styled.ActivityIndicator`
  margin-top: 50%;
`;

export const LoadingView = styled.View`
  flex: 1;
`;
