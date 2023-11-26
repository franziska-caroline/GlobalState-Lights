import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleLightsOff,
  handleLightsOn,
  countedLights,
  lights,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleLightsOff={handleLightsOff}
        handleLightsOn={handleLightsOn}
        countedLights={countedLights}
        lights={lights}
      />
    </>
  );
}
