import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 576px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
