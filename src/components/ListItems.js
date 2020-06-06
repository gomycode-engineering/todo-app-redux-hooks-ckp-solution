import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';

import EditItem from './EditItem';
import { deleteItem, completeItem } from '../js/actions/ActionTask';

const ListItems = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <ListGroup>
      {items.map((item, key) => (
        <ListGroup.Item
          key={key}
          style={{ display: 'flex', alignItems: 'flex-end' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
              width: '30%',
            }}
          >
            <Button
              variant='outline-secondary'
              onClick={() => dispatch(completeItem(item.id))}
            >
              {item.isDone ? 'isDone' : 'unDone'}
            </Button>
            <EditItem item={item} />
            <Button
              variant='danger'
              onClick={() => dispatch(deleteItem(item.id))}
            >
              Delete
            </Button>
          </div>
          <p style={{ margin: '0px' }} className={item.isDone ? 'checked' : ''}>
            {item.description}
          </p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListItems;
