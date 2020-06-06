import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import AddItems from './AddItems';
import TodoItems from './ListItems';

const TodoList = () => {
  const [filter, setfilter] = useState(false);

  const handelFilter = () => setfilter(!filter);

  const Items = useSelector((state) => state);
  return (
    <Container>
      <AddItems handelFilter={handelFilter} filter={filter} />
      <TodoItems items={filter ? Items.filter((el) => el.isDone) : Items} />
    </Container>
  );
};

export default TodoList;
