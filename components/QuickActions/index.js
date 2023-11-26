import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleLightsOff,
  handleLightsOn,
  countedLights,
  lights,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={handleLightsOff}
        disabled={countedLights === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={handleLightsOn}
        disabled={countedLights === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
