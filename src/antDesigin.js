import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';
import store from './store'
import { CHANGE_INPUT, CHANGE_ITEN, DELETE_ITEM} from './store/actionType'

class AntDesigin extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handlerChange = this.handlerChange.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
        store.subscribe(this.storeChange);
    }

    render() {
        return (
            <Fragment>
                <div style={{ margin: '20px'}}>
                    <Input placeholder="Basic usage" value={this.state.inputValue} onChange={this.handlerChange} style={{width: '400px', marginRight: '20px'}}/>
                    <Button type="primary" onClick={this.handlerClick}>Primary</Button>
                </div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    style={{width: '400px', marginLeft: '20px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.deleteItem.bind(this, index)}>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }

    handlerChange(e) {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState());
    }
    handlerClick(){
        const action = {
            type: CHANGE_ITEN
        }
        store.dispatch(action);
    }
    deleteItem(index){
        const action = {
            type: DELETE_ITEM,
            index
        }
        store.dispatch(action);
    }
}

export default AntDesigin;