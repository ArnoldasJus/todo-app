import React, {useState} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoReducer";
import { FlexWrapper } from "./wrappers/FlexWrapper";


const TodoForm: React.FC = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const handleTextInputChange = (e: any) => {
    setTextInput(e.target.value);
  };
  const handleClick = () => {
    if (textInput) {
      dispatch(addTodo(textInput));
      setTextInput("");
    }
  };

  return (
    <FlexWrapper $alignItems="center" $gap="10px">
      <Paragraph>Add new todo</Paragraph>
      <FlexInput onChange={handleTextInputChange} value={textInput} />
      <Button onClick={handleClick}>Submit</Button>
    </FlexWrapper>
  );
};

export default TodoForm;

const Input = styled.input`
  font-family: "Roboto Mono", monospace;
  padding: 12px;
  background: #eeeeee;
  color: #393e46;
`;

const FlexInput = styled(Input)`
  flex: auto;
`;

const Button = styled.button`
  background: #393e46;
  color: #00adb5;
  border: 2px solid #00adb5;
  padding: 10px;
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
`;

// const Title2 = styled.h2`
//   font-family: "Roboto Mono", monospace;
//   font-size: 1rem;
//   text-align: center;
//   color: #00adb5;
//   padding: 2rem 0;
//   margin: 0;
// `;

const Paragraph = styled.p`
  font-family: "Roboto Mono", monospace;
  color: #00adb5;
  font-size: 1rem;
  margin: 0;
`;

// const CheckmarkIcon = styled(Checkmark)`
//   float: right;
//   cursor: pointer;
// `;

// const DeleteIcon = styled(Delete)`
//   float: right;
//   cursor: pointer;
// `;
