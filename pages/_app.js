import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLightsStatus = [
  { id: 1, name: "livingRoom", isOn: false },
  { id: 2, name: "kitchen", isOn: false },
  { id: 3, name: "bedroom", isOn: false },
  { id: 4, name: "bathroom", isOn: false },
  { id: 5, name: "garage", isOn: false },
  { id: 6, name: "porch", isOn: false },
  { id: 7, name: "garden", isOn: false },
  { id: 8, name: "office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLightsStatus);

  // Counting Lights
  const countedLights = lights.filter((light) => light.isOn).length;

  function handleToggleLight(lightId) {
    setLights(
      lights.map((light) => {
        if (light.id === lightId) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }

  // Quick Actions
  function handleLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function handleLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  return (
    <Layout isDimmed={countedLights === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggleLight={handleToggleLight}
        countedLights={countedLights}
        handleLightsOff={handleLightsOff}
        handleLightsOn={handleLightsOn}
      />
    </Layout>
  );
}
