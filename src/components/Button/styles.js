import { styled } from "styled-components";

export const Container = styled.button`
  background-color: ${({theme}) => theme.COLORS.RED800};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  font-weight: 500;

  width: 100%;
  height: 56px;

  border: 0;
  border-radius: 10px;
  
  padding: 0 16px;
  margin-top: 16px;


  &:disabled {
    opacity: 0.5;
  }
`;