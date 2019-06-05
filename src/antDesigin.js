import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';
import store from './store'


class AntDesigin extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handlerChange = this.handlerChange.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }

    render() {
        return (
            <Fragment>
                <div style={{ margin: '20px'}}>
                    <Input placeholder="Basic usage" value={this.state.inputValue} onChange={this.handlerChange} style={{width: '400px', marginRight: '20px'}}/>
                    <Button type="primary">Primary</Button>
                </div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    style={{width: '400px', marginLeft: '20px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }

    handlerChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState());
    }
}

export default AntDesigin;