import styled from "styled-components";

export const ProgressWrapper = styled.div`
  position: absolute;
  bottom: 48px;
  left: 50%;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const StyledCircle = styled.div<{
  active?: boolean;
}>`
  display: flex;
  min-width: 10px;
  min-height: 10px;
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.bridalHeath
      : props.theme.colors.bridalHeath20};
  border-radius: 50%;
`;
