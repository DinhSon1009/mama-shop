import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
