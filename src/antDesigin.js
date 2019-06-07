import React, { Component } from 'react';
import TodoUI from './ToDoUI'
import store from './store'
import {changeInputValue, changeItem, deleteItem} from './store/actionCreator';

class AntDesigin extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handlerChange = this.handlerChange.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange);
    }

    render() {
        return (
           <TodoUI InputValue= {this.state.inputValue}
                    List = {this.state.list}
                    handlerChange = {this.handlerChange}
                    handlerClick = {this.handlerClick}
                    deleteItem = {this.deleteItem}
           ></TodoUI>
        )
    }

    handlerChange(e) {
        const action = changeInputValue(e.target.value);
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState());
    }
    handlerClick(){
        const action = changeItem();
        store.dispatch(action);
    }
    deleteItem(index){
        console.log(index)
        const action = deleteItem(index);
        store.dispatch(action);
    }
}

export default AntDesigin;