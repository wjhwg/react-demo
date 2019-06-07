import { CHANGE_INPUT, CHANGE_ITEN, DELETE_ITEM, INIT_LIST} from './actionType';
import axios from 'axios';

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
export const getInitList = () => {
    return (dispatch) => {
        axios.get('https://easy-mock.com/mock/5cf9e614e1c8fb7c385666f9/example/mock').then((res) => {
            if(res.data.success === true){
                const data = res.data.data.projects;
                const action = initList(data);
                dispatch(action);
            }
        })
    }
}