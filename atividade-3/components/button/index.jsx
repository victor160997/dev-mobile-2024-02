import React, { useState } from "react";
import * as S from "./index.styles";
export default function ButtonContainer({ color, onPress }) {
  return (
    <S.Button color={color} onPress={onPress}>
      <S.TextButton>Entrar</S.TextButton>
    </S.Button>
  );
}
