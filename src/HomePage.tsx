import { useSelector } from "react-redux";
import { RootState } from "./redux/index";
import styled from "styled-components";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import { FlexWrapper } from "./components/wrappers/FlexWrapper";
import { Box } from "./components/wrappers/Box";
import { Typography } from "./components/typography/Typography";

const HomePage = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <PageWrapper>
      <Title>Todo list</Title>
      {/* <Typography tag="h1">Todo list</Typography> */}
      <FlexWrapper $gap="20px">
        <Box $border="2px solid #00adb5">
          <FlexWrapper $direction="column" $gap="20px">
            <TodoForm />
            {incompleteTodos
              .map((todo) => {
                return <TodoCard key={todo.id} todo={todo} />;
              })
              .sort()
              .reverse()}
          </FlexWrapper>
        </Box>

        <Box $border="2px solid #00adb5">
          <FlexWrapper $direction="column" $gap="20px">
            <Title2>Completed Todos</Title2>
            {completedTodos
              .map((completedTodo) => {
                return <TodoCard key={completedTodo.id} todo={completedTodo} />;
              })
              .sort()
              .reverse()}
          </FlexWrapper>
        </Box>
      </FlexWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.section`
  min-height: 100vh;
  background: #222831;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  text-align: center;
  color: #00adb5;
  padding: 2rem 0;
  margin: 0;
`;

const Title2 = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.3rem;
  text-align: center;
  color: #00adb5;
  margin: 0;
  padding: 10px 0;
`;

export default HomePage;
