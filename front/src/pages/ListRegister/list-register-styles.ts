import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  background-color: #f6f6f6;
  flex-direction: column;
  width: 85vw;
  height: 100%;
  margin: 50px auto;
  align-items: center;
`;

export const TextPresentation = styled.p`
  display: flex;
  padding: 15px;
  font-weight: 700;
  font-size: 20px;
  line-height: 10px;
  color: black;
`;

export const WrapperButton = styled.div`
  width: 300px;
  display: grid;
  grid-template-areas: "a a";
  gap: 20px;
  grid-auto-rows: 100px;
`;  