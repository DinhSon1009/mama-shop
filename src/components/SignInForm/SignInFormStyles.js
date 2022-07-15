import styled from "styled-components";
import Button from "../Button/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 20px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonStyled = styled(Button)`
  @media screen and (max-width: 576px) {
    padding: 0;
    min-width: 50%;
  }
`;
