import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];


class AntDesigin extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div style={{ margin: '20px'}}>
                    <Input placeholder="Basic usage" style={{width: '400px', marginRight: '20px'}}/>
                    <Button type="primary">Primary</Button>
                </div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    style={{width: '400px', marginLeft: '20px'}}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }

}

export default AntDesigin;