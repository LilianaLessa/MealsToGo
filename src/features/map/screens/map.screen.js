import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

const StyledMapView = styled(MapView)`
  height: 100%;
`;

export const MapScreen = () => <StyledMapView />;
