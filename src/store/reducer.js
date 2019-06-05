const defaultState = {
    inputValue: 'aaa',
    list: [1,2]
};

export default (state = defaultState, action) => {
    console.log(state, action)
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(defaultState));
        newState.inputValue = action.value;
        return newState;
    };
    return state;
}