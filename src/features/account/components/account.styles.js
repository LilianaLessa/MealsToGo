import { ImageBackground } from "react-native";
import styled from "styled-components/native";

export const AccountScreenBackgroundImage = styled(ImageBackground).attrs({
  resizeMode: "cover",
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
`;

export const ScreenContainer = styled.View`
  flex: 1;
`;

export const DemoText = styled.Text`
  color: white;
  font-size: 42px;
  line-height: 84px;
  font-weight: bold;
  text-align: center;
  background-color: #000000c0;
`;
