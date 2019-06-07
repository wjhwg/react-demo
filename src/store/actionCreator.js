import { CHANGE_INPUT, CHANGE_ITEN, DELETE_ITEM, INIT_LIST} from './actionType';

export const changeInputValue = (value) => ({
    type: CHANGE_INPUT,
    value
});
export const changeItem = (obj) => ({
    type: CHANGE_ITEN,
    obj
});
export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    index
});
export const initList = (data) => ({
    type: INIT_LIST,
    data
});
