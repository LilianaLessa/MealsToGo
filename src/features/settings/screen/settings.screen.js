import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { UnsafeArea } from "../../../components/utility/safe-area.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const FavouritesIcon = (props) => (
  <List.Icon {...props} color="black" icon="heart" />
);
const LogoutIcon = (props) => (
  <List.Icon {...props} color="black" icon="lock-outline" />
);

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <UnsafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          left={FavouritesIcon}
          onPress={() => navigation.navigate("Favourites")}
          description="View your favourites"
        />
        <SettingsItem title="Logout" left={LogoutIcon} onPress={onLogout} />
      </List.Section>
    </UnsafeArea>
  );
};
