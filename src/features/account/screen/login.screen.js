import React, { useContext, useState } from "react";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer position="top" size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error.message && (
          <Spacer>
            <ErrorContainer>
              <Text variant="error">{error.message}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer position="top" size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer position="top" size="large">
        <AuthButton mode="contained" onPress={navigation.goBack}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
