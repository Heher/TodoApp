import React from 'react';
import styled from 'styled-components';

interface Props {
  addTodo: () => void;
}

const AddButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  background: #eeeeee;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
`;

const AddTodoButton: React.FC<Props> = ({ addTodo }) => {
  const handleClick = () => {
    addTodo();
  };
  return (
    <AddButton type="button" onClick={handleClick}>
      Add Task
    </AddButton>
  );
};

export default AddTodoButton;
