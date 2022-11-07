import { useMemo } from "react";
import { ProgressWrapper, StyledCircle } from "./ProgressBar.styles";

interface ProgressBarSteps {
  current: number;
  steps: number;
}

export const ProgressBar = ({
  current,
  steps,
}: ProgressBarSteps): JSX.Element => {
  const progressArray = useMemo(() => [...Array(steps)], [steps]);
  const currentProgress = useMemo(() => current - 1, [current]);
  return (
    <ProgressWrapper>
      {progressArray &&
        progressArray.map((_v, i) => (
          <StyledCircle key={i} active={currentProgress === i} />
        ))}
    </ProgressWrapper>
  );
};
