import styled from "styled-components/native";

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 10%;
  border: solid 1px;
  border-color: ${(props) => props.color};
  padding: 5%;
  border-radius: 15px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 0px;
  color: ${(props) => props.color};
`;

export const ClearIcon = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 50%;
  background-color: red;
`;
