import styled, { css } from "styled-components";
import { ColumnQty } from "./Form.types";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  min-width: 100%;
`;

export const FormContent = styled.form<{
  columns: ColumnQty;
}>`
  display: grid;
  ${({ columns }) => {
    switch (columns) {
      case 1:
        return css`
          grid-template-columns: 1fr;
        `;
      case 2:
        return css`
          grid-template-columns: repeat(2, 1fr);
        `;
    }
  }};
  justify-content: center;
  gap: 16px;
  margin: 0 auto;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 100%;
`;
