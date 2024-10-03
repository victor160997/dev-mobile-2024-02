import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import * as S from "./index.styles";

export default function TextInputContainer({
  value,
  onChangeText,
  icone,
  placeholder,
  color,
}) {
  return (
    <S.InputContainer color={color}>
      <Icon name={icone} size={20} color="#888" style={S.IconStyle} />
      <S.Input
        color={color}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
      {value ? (
        <Icon
          name="times-circle"
          size={20}
          color="red"
          onPress={() => onChangeText("")}
        />
      ) : null}
    </S.InputContainer>
  );
}
