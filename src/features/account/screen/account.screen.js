import React from "react";
import {
  AccountScreenBackgroundImage,
  DemoText,
  ScreenContainer,
} from "../components/account.styles";

export const AccountScreen = () => {
  return (
    <ScreenContainer>
      <AccountScreenBackgroundImage>
        <DemoText>Account Screen</DemoText>
      </AccountScreenBackgroundImage>
    </ScreenContainer>
  );
};
