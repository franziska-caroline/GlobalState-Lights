import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ light, isOn, onToggleLight }) {
  return (
    <LightButton type="button" onClick={onToggleLight} $isOn={isOn}>
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
