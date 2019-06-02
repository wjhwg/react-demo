import React, { Component} from 'react'
import PropTypes from 'prop-types';
class ToDuItem extends Component{

    constructor(props){
        super(props)
        this.deleteValue = this.deleteValue.bind(this)
    }
    render() {
        const {content, test} = this.props;
        return (
            <div onClick={this.deleteValue}>{content}-{test}</div>
        )
    }

    deleteValue(){
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}
ToDuItem.propTypes = {
      content: PropTypes.string.isRequired,
      test: PropTypes.string.isRequired  
}

ToDuItem.defaultProps = {
    test: 'helloworld'
}
export default ToDuItem;