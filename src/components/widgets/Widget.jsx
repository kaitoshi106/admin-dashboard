import React from "react";
import styled from "styled-components";

import WidgetLg from "./WidgetLg";
import WidgetSm from "./WidgetSm";

const WidgetWrapper = styled.div`
  display: flex;
  margin: 20px;
`;

export default function HomeWidget() {
  return (
    <WidgetWrapper>
      <WidgetSm />
      <WidgetLg />
    </WidgetWrapper>
  );
}
