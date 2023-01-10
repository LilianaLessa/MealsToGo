import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { UnsafeArea } from "../../../components/utility/safe-area.component";
import { TouchableOpacity } from "react-native";
import { UserProfileContext } from "../../../services/userProfile/user-profile.contex";

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
  const { userProfilePictureUri } = useContext(UserProfileContext);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    setPhoto(userProfilePictureUri);
  }, [userProfilePictureUri]);

  return (
    <UnsafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <AvatarContainer>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
      </TouchableOpacity>

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
