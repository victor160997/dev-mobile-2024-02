import { useState } from "react";
import * as S from "./general.styles";
import TextInputContainer from "./components/input/index";
import ButtonContainer from "./components/button/index";
import { auth } from "./database/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native-web";

export default function FirstScreen() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [icone, setIcone] = useState("lock");
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userCredential, setUserCredential] = useState(null);
  const color = "red";

  const clearInput = (inputSetter) => {
    inputSetter("");
  };

  const tryLogin = async () => {
    try {
      setLoading(true);
      console.log("auth", auth);
      const user = await signInWithEmailAndPassword(auth, mail, pass);
      setUserCredential(user);
      console.log("Usuário logado com sucesso");
    } catch (error) {
      try {
        const user = await createUserWithEmailAndPassword(auth, mail, pass);
        setUserCredential(user);
        console.log("Usuário registrado com sucesso");
      } catch (registerError) {
        setMessage(registerError.message);
        console.error("Erro ao registrar usuário:", registerError);
      }
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = () => {
    if (!message) return null;
    return <Text>{message}</Text>;
  };
  console.log({ userCredential });

  return !userCredential ? (
    <S.Container>
      <S.Title color={color}>Login</S.Title>
      <TextInputContainer
        color={color}
        icone="envelope"
        placeholder="E-mail"
        value={mail}
        onChangeText={setMail}
      />
      <TextInputContainer
        color={color}
        icone={icone}
        placeholder="Password"
        value={pass}
        onChangeText={setPass}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ButtonContainer
          color={color}
          onPress={tryLogin}
          // disabled={isLoading}
        />
      )}
      {renderMessage()}
    </S.Container>
  ) : (
    <S.Title color={color}>{userCredential.user.email} logado com sucesso.</S.Title>
  );
}
