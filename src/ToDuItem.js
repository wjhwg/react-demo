import React, { Component} from 'react'

class ToDuItem extends Component{

    constructor(props){
        super(props)
        this.deleteValue = this.deleteValue.bind(this)
    }
    render() {
        const {content} = this.props;
        return (
            <div onClick={this.deleteValue}>{content}</div>
        )
    }

    deleteValue(){
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

export default ToDuItem;