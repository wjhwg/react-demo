import { CHANGE_INPUT, CHANGE_ITEN, DELETE_ITEM} from './actionType';

export const changeInputValue = (value) => ({
    type: CHANGE_INPUT,
    value
});
export const changeItem = () => ({
    type: CHANGE_ITEN
});
export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    index
});