import React , { Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';

class ToDoUI extends Component{

    render() {
        return (
            <Fragment>
                <div style={{ margin: '20px'}}>
                    <Input placeholder="Basic usage" value={this.props.InputValue} onChange={this.props.handlerChange} style={{width: '400px', marginRight: '20px'}}/>
                    <Button type="primary" onClick={this.props.handlerClick}>Primary</Button>
                </div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    style={{width: '400px', marginLeft: '20px'}}
                    bordered
                    dataSource={this.props.List}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {this.props.deleteItem(index)}}>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

export default ToDoUI;