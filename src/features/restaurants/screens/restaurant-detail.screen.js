import React, { useState } from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

const MenuAccordion = ({ title, iconName }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <List.Accordion
      title={title}
      left={(props) => <List.Icon {...props} icon={iconName} />}
      expanded={expanded}
      onPress={() => setExpanded(!expanded)}
    >
      <List.Item title="First item" />
      <List.Item title="Second item" />
    </List.Accordion>
  );
};

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <MenuAccordion title="Breakfast" iconName="bread-slice" />
        <MenuAccordion title="Lunch" iconName="hamburger" />
        <MenuAccordion title="Dinner" iconName="food-variant" />
        <MenuAccordion title="Drinks" iconName="cup" />
      </ScrollView>
    </SafeArea>
  );
};
