import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledInput = styled.textarea`
  display: block;
  width: 100%;
  color: ${(props) => props.theme.colors.bridalHeath};
  background-color: ${(props) => props.theme.colors.bridalHeath20};
  caret-color: ${(props) => props.theme.colors.bridalHeath};
  padding: 12px 16px;
  height: 100px;
  resize: none;
  border: none;
  outline: none;
  margin: 0 auto;
  border-radius: 5px;

  &::placeholder {
    color: ${(props) => props.theme.colors.bridalHeath};
    font-size: 16px;
    letter-spacing: normal;
  }
`;

export const ErrorMessage = styled.p`
  flex: 1 1 auto;
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  padding-left: 8px;
  color: ${(props) => props.theme.colors.bridalHeath};
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
