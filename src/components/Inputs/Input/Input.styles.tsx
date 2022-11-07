import { ColumnQty } from "@components/Form/Form.types";
import styled, { css } from "styled-components";
import { InputTheme, InputType } from "./Input.types";

export const StyledInput = styled.input<{
  type: InputType;
  inputTheme: InputTheme;
}>`
  display: block;
  width: 100%;
  padding: 12px 16px;
  border: none;
  outline: none;
  margin: 0 auto;
  border-radius: 5px;
  letter-spacing: ${({ type }) => (type === "password" ? "4px" : "normal")};

  ${({ inputTheme }) => {
    switch (inputTheme) {
      case "light":
        return css`
          color: ${(props) => props.theme.colors.bridalHeath};
          background-color: ${(props) => props.theme.colors.bridalHeath20};
          caret-color: ${(props) => props.theme.colors.bridalHeath};
          &::placeholder {
            color: ${(props) => props.theme.colors.bridalHeath};
          }
        `;
      case "dark":
        return css`
          color: ${(props) => props.theme.colors.petiteOrchid};
          background-color: ${(props) => props.theme.colors.petiteOrchid20};
          caret-color: ${(props) => props.theme.colors.petiteOrchid};
          &::placeholder {
            color: ${(props) => props.theme.colors.petiteOrchid};
          }
        `;
    }
  }}

  &::placeholder {
    font-size: 16px;
    letter-spacing: normal;
  }
`;

export const InputWrap = styled.div<{
  columnSpan: ColumnQty;
}>`
  ${({ columnSpan }) => {
    switch (columnSpan) {
      case 1:
        return css`
          grid-column: span 1;
        `;
      case 2:
        return css`
          grid-column: span 2;
        `;
    }
  }};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ErrorMessage = styled.p<{
  inputTheme: InputTheme;
}>`
  flex: 1 1 auto;
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  padding-left: 8px;
  color: ${(props) =>
    props.inputTheme === "light"
      ? props.theme.colors.bridalHeath
      : props.theme.colors.petiteOrchid};
`;

export const NoteMessage = styled.p`
  flex: 1 1 auto;
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  padding-right: 8px;
  text-align: right;
  color: ${(props) => props.theme.colors.bridalHeath};
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 4px;
`;
