import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

export const UnsafeArea = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
