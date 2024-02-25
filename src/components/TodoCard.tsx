import React from "react";
import styled from "styled-components";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import { Checkmark } from "@styled-icons/evaicons-solid/Checkmark";
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo, Todo } from "../redux/todoReducer";



interface TodoCardProps {
  todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleCompleteTodo = () => {
    dispatch(completeTodo(todo.id));
  }

  return (
    <div>
      <Wrapper key={todo.id} style={{ textDecoration: todo.completed ? 'line-through red' : 'none' }}>
        <DeleteIcon size={32} color="red" onClick={handleRemoveTodo} />
        <CheckmarkIcon size={32} color="green" onClick={handleCompleteTodo} />
        <Title2>Todo: {todo.text}</Title2>
        <Paragraph>Opened: {todo.opened}</Paragraph>
        <Paragraph>ID: {todo.id}</Paragraph>
      </Wrapper>
    </div>
  );
};

export default TodoCard;

const Wrapper = styled.div`
  padding: 1rem;
  border: 2px solid #00adb5;
  margin: auto;
  margin-bottom: 20px;
`;

const Title2 = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  color: #00adb5;
  padding: 2rem 0;
  margin: 0;
`;

const Paragraph = styled.p`
  font-family: "Roboto Mono", monospace;
  color: #00adb5;
  font-size: 1rem;
  margin: 0;
`;

const CheckmarkIcon = styled(Checkmark)`
  float: right;
  cursor: pointer;
`;

const DeleteIcon = styled(Delete)`
  float: right;
  cursor: pointer;
`;