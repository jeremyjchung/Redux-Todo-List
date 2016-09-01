let id = 0;

export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    id: id++,
    text
  };
};

export const toggleItem = (id) => {
  return {
    type: TOGGLE_ITEM,
    id
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
