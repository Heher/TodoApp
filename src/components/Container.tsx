import React, { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import AddTodoButton from './AddTodoButton';
import TodoLine from './TodoLine';

export interface Todo {
  id: string;
  taskName: string;
  completed: boolean;
}

const Modal = styled.div`
  padding: 30px;
  background: #ffffff;
  box-shadow: 1px 1px 6px #999999;
  border-radius: 4px;
  width: 500px;

  h1 {
    grid-area: header;
    margin: 0 0 30px 0;
    font-size: 24px;
  }
`;

const Container: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = () => {
    const newTodoList = [...todoList];

    newTodoList.push({
      id: nanoid(),
      taskName: '',
      completed: false
    });

    setTodoList(newTodoList);
  };

  const toggleCompleted = (id: string) => {
    const newTodoList = [...todoList];

    const foundTodo = todoList.find((todo) => todo.id === id);

    if (foundTodo) {
      const foundIndex = todoList.indexOf(foundTodo);

      newTodoList[foundIndex] = { ...foundTodo, completed: !foundTodo?.completed };

      setTodoList(newTodoList);
    }
  };

  const updateTaskName = (id: string, task: string) => {
    const newTodoList = [...todoList];

    const foundTodo = todoList.find((todo) => todo.id === id);

    if (foundTodo) {
      const foundIndex = todoList.indexOf(foundTodo);

      newTodoList[foundIndex] = { ...foundTodo, taskName: task };

      setTodoList(newTodoList);
    }
  };

  const deleteTask = (id: string) => {
    const newTodoList = [...todoList];

    const foundTodo = todoList.find((todo) => todo.id === id);

    if (foundTodo) {
      const foundIndex = todoList.indexOf(foundTodo);

      newTodoList.splice(foundIndex, 1);

      setTodoList(newTodoList);
    }
  };

  return (
    <Modal>
      <h1>Todos</h1>
      {todoList.map((todo) => (
        <TodoLine
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          updateTaskName={updateTaskName}
          deleteTask={deleteTask}
        />
      ))}
      <AddTodoButton addTodo={addTodo} />
    </Modal>
  );
};

export default Container;
