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
                    <button onClick = {this.btnClick.bind(this)}>添加</button>
                </div>
                <ul>
                    { this.state.list.map((value, index) => {
                        return <li key={index}>{value}</li>
                    }) }
                    <li>hello</li>
                </ul>
            </Fragment>
        )
    }

    handlerInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    btnClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
}

export default Todu;