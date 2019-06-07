import { CHANGE_INPUT, CHANGE_ITEN, DELETE_ITEM} from './actionType'

const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    };
    if(action.type === CHANGE_ITEN){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        newState.inputValue = '';
        return newState;
    }
    return state;
}