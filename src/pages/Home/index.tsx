import React, { useState, useEffect } from "react";
import { View, RefreshControl } from "react-native";
import { HomeCard } from "../../components/HomeCard";
import { Header } from "../../components/Header";
import { HomeServiceCard } from "../../components/HomeServiceCard";
import colors from "../../styles/colors";
import api from "../../services/api";
import {
  Container,
  AccountCardMoney,
  AccountCardText,
  CardText,
  CardsList,
  CreditCardLimit,
  CreditCardPayment,
  CreditCardText,
  Load,
  LoadingView,
  LoanText,
  LoanTextBold,
  NotVisibleView,
  ServiceList,
} from "./styles";

export interface ServiceProps {
  id: number;
  title: string;
  iconName: string;
}

export function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [serviceList, setServiceList] = useState<Array<ServiceProps>>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchServiceList = async () => {
    setLoading(true);
    const { data } = await api.get("services");
    setServiceList(data);
    setLoading(false);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchServiceList();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchServiceList();
  }, []);

  return (
    <Container>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />
      {loading ? (
        <LoadingView>
          <Load color="#fff" size="large" />
        </LoadingView>
      ) : (
        <>
          <CardsList
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressBackgroundColor={colors.purple}
                colors={["#fff"]}
              />
            }
          >
            <HomeCard title="Cartão de crédito" iconName="credit-card">
              <CreditCardText>Fatura atual</CreditCardText>
              {isVisible ? (
                <>
                  <CreditCardPayment>R$ 76,53</CreditCardPayment>
                  <CreditCardText>
                    Limite disponível
                    <CreditCardLimit> R$ 723,47</CreditCardLimit>
                  </CreditCardText>
                </>
              ) : (
                <NotVisibleView />
              )}
            </HomeCard>
            <HomeCard title="Conta" iconName="dollar-sign">
              <AccountCardText>Saldo atual</AccountCardText>
              {isVisible ? (
                <AccountCardMoney>R$ 1.751,01</AccountCardMoney>
              ) : (
                <NotVisibleView />
              )}
            </HomeCard>
            <HomeCard
              title="Empréstimo"
              buttonTitle="SIMULAR EMPRÉSTIMO"
              iconName="dollar-sign"
            >
              {isVisible ? (
                <>
                  <LoanText>Valor disponível de até </LoanText>
                  <LoanTextBold>R$ 8.900</LoanTextBold>
                </>
              ) : (
                <View style={{ marginBottom: 16 }}>
                  <NotVisibleView />
                </View>
              )}
            </HomeCard>
            <HomeCard
              title="Seguro de vida"
              buttonTitle="CONHECER"
              iconName="umbrella"
            >
              <CardText>
                Conheça Nubank Vida: um seguro simples e que cabe no bolso.
              </CardText>
            </HomeCard>
            <HomeCard title="Rewards" buttonTitle="CONHECER" iconName="gift">
              <CardText>Apague compras com pontos que nunca expiram.</CardText>
            </HomeCard>
            <HomeCard
              title="Investimentos Easynvest"
              buttonTitle="CONHECER"
              iconName="bar-chart"
            >
              <CardText>
                Conheça a Easynvest e invista com taxa zero de corretagem e sem
                burocracias!
              </CardText>
            </HomeCard>
            <HomeCard
              title="Google Pay"
              buttonTitle="REGISTRAR MEU CARTÃO"
              iconName="credit-card"
            >
              <CardText>Use o Google Pay com seus cartões Nubank.</CardText>
            </HomeCard>
          </CardsList>
          <ServiceList
            data={serviceList}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <HomeServiceCard title={item.title} iconName={item.iconName} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </>
      )}
    </Container>
  );
}
