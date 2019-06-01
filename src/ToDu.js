import React, {Component, Fragment} from 'react';

class Todu extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue : '',
            list : []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value = {this.state.inputValue} onChange = {this.handlerInputChange.bind(this)} />
                    <button>添加</button>
                </div>
                <ul>
                    <li>hello</li>
                </ul>
            </Fragment>
        )
    }

    handlerInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
        console.log(e);
    }
}

export default Todu;