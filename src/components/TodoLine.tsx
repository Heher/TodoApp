import React from 'react';
import styled from 'styled-components';
import type { Todo } from './Container';

interface Props {
  todo: Todo;
  toggleCompleted: (id: string) => void;
  updateTaskName: (id: string, task: string) => void;
  deleteTask: (id: string) => void;
}

const TodoLineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
  height: 50px;
  border: 1px solid #333333;
  border-radius: 4px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const TaskInfo = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;

  input[type='checkbox'] {
    justify-self: center;
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    margin: 0;
    border-radius: 4px;

    &:disabled {
      background: grey;
    }

    &:checked {
      background: blue;
    }
  }

  input[type='text'] {
    border: 0;
    font-size: 16px;
    height: 48px;
    padding: 3px 10px;
    outline: 0;
    border-radius: 4px;
    transition: 0.3s all;

    &:hover {
      background: #fefefe;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
    }
  }
`;

const DeleteButton = styled.button`
  justify-self: center;
  height: 30px;
  width: 30px;
  background: none;
  border: 0;
  padding: 5px;
  line-height: 20px;
  font-size: 20px;
  cursor: pointer;
`;

const TodoLine: React.FC<Props> = ({ todo, toggleCompleted, updateTaskName, deleteTask }) => (
  <TodoLineContainer>
    <TaskInfo>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
        disabled={!todo.taskName.length}
      />
      <input type="text" value={todo.taskName} onChange={(event) => updateTaskName(todo.id, event?.target.value)} />
    </TaskInfo>
    <DeleteButton type="button" onClick={() => deleteTask(todo.id)}>
      &times;
    </DeleteButton>
  </TodoLineContainer>
);

export default TodoLine;
