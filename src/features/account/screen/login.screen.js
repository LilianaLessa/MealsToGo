import React, { useContext, useEffect, useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  LoginFormContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextInput } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, isAuthenticated, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("Restaurants");
    }
  }, [isAuthenticated, navigation]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <LoginFormContainer>
          <TextInput
            label="E-mail"
            value={email}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
          <Spacer position="top" size="large">
            <TextInput
              label="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </Spacer>
          <Spacer position="top" size="large">
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={handleLogin}
            >
              Login
            </AuthButton>
          </Spacer>
        </LoginFormContainer>
      </AccountContainer>
    </AccountBackground>
  );
};
