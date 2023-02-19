import { View } from "react-native";
import { useCalculator } from "./use-calculator";
import styled from "styled-components/native";

const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};

const oneBlockWidth = 80; // 한블럭에 해당하는 가로길이

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;
const InputContainer = styled.View`
  background-color: ${COLOR.RESULT};
  width: ${oneBlockWidth * 4}px;
  min-height: 50px;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 5px;
`;

export default () => {
  const {
    event: {
      input,
      currentOperator,
      result,
      tempInput,
      tempOperator,
      hasInput,
    },
    onPressNum,
    onPressOperator,
    onPressReset,
  } = useCalculator();
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {__DEV__ && (
        <>
          <Text>input: {input}</Text>
          <Text>currentOperator: {currentOperator}</Text>
          <Text>result: {result}</Text>
          <Text>tempInput: {tempInput}</Text>
          <Text>tempOperator: {tempOperator}</Text>
        </>
      )}
    </View>
  );
};
