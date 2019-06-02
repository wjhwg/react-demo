import React, { Component} from 'react'

class ToDuItem extends Component{

    constructor(props){
        super(props)
        this.deleteValue = this.deleteValue.bind(this)
    }
    render() {
        return (
            <div onClick={this.deleteValue}>{this.props.content}</div>
        )
    }

    deleteValue(){
        this.props.deleteItem(this.props.index);
    }
}

export default ToDuItem;