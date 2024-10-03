import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  background-color: ${(props) => props.color};
  padding: 5%;
  border-radius: 25px;
`;

export const TextButton = styled.Text`
  display: flex;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
`;
