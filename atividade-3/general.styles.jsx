import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  margin-top: 25%;
  padding: 0% 15%;
`;

export const Title = styled.Text`
  font-size: 25px;
  padding-bottom: 15%;
  font-weight: bold;
  color: ${(props) => props.color};
`;
