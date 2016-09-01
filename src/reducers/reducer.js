import {combineReducers} from 'redux';
import {ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM} from '../actions/actions';
import _ from 'lodash';

const item = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE_ITEM:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        item(undefined, action),
        ...state
      ];
    case TOGGLE_ITEM:
      return state.map(t => item(t, action));
    case REMOVE_ITEM:
      var itemList = state.slice(0);
      _.remove(itemList, (item) => {
        return item.id === action.id;
      });
      return itemList;
    default:
      return state;
  }
};

const reducer = combineReducers({
  items
});

export default reducer;
