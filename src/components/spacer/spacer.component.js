import React from "react";
import styled from "styled-components/native";

const BaseSpacer = styled.View`
  margin-${(props) => props.direction}: 
          ${(props) => props.theme.space[props.spaceIndex]}
`;

export const Spacer = ({ variant }) => {
  let params = variant.split(".");
  params = {
    direction: (() => {
      return ["left"].includes(params[0]) ? params[0] : "top";
    })(),
    spaceIndex: (() => {
      return (
        {
          medium: 2,
          large: 3,
        }[params[1]] ?? 1
      );
    })(),
  };

  return (
    <BaseSpacer direction={params.direction} spaceIndex={params.spaceIndex} />
  );
};
