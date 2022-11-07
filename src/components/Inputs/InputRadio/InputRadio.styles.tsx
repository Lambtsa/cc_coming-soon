import styled from "styled-components";

export const InputRadioWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const InputRadioBtn = styled.button<{
  active: boolean;
  error: boolean;
}>`
  min-width: 30px;
  min-height: 30px;
  border-radius: 7px;
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.bridalHeath
      : props.theme.colors.bridalHeath20};
  border: 1px solid
    ${(props) => (props.error ? props.theme.colors.newYorkPink : "none")};
`;

export const InputRadioLabel = styled.p`
  color: ${(props) => props.theme.colors.bridalHeath};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-wrap: wrap;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
`;
