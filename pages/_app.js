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

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggleLight={handleToggleLight}
      />
    </Layout>
  );
}
