import React, { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { Header } from "../../components/Header";
import { SettingItem } from "../../components/SettingItem";
import colors from "../../styles/colors";
import api from "../../services/api";
import {
  AccountInfoText,
  Container,
  Load,
  LogoutButton,
  LogoutButtonText,
  SettingItemItemsList,
} from "./styles";

export interface SettingItemProps {
  id: number;
  title: string;
  iconName: string;
}

const ListHeader = () => {
  return (
    <AccountInfoText>
      Agência 0000 Conta 0000000-0 {"\n"}
      Banco 000 - Nu Pagamentos S.A.
    </AccountInfoText>
  );
};

const ListFooter = () => {
  return (
    <LogoutButton>
      <LogoutButtonText>SAIR DO APP</LogoutButtonText>
    </LogoutButton>
  );
};

export function SettingsPage() {
  const [settingItems, setSettingItems] = useState<Array<SettingItemProps>>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchSettingItems();
  }, []);

  const fetchSettingItems = async () => {
    setLoading(true);
    const { data } = await api.get("setting_items");

    setSettingItems(data);
    setLoading(false);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchSettingItems();
    setRefreshing(false);
  };
  return (
    <Container>
      <Header />
      {loading ? (
        <Load size="large" color="#FFF" />
      ) : (
        <SettingItemItemsList
          data={settingItems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <SettingItem title={item.title} iconName={item.iconName} />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressBackgroundColor={colors.purple}
              colors={["#fff"]}
            />
          }
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeader}
          ListFooterComponent={ListFooter}
        />
      )}
    </Container>
  );
}
