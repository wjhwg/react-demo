import React, {Component, Fragment} from 'react';
import ToDuItem from './ToDuItem'
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
                    <label htmlFor="insert">Input Value</label>
                    {/* 輸入框 */}
                    <input id="insert" value = {this.state.inputValue} onChange = {this.handlerInputChange.bind(this)} />
                    <button onClick = {this.btnClick.bind(this)}>添加</button>
                </div>
                <ul>
                    { 
                        this.state.list.map((value, index) => {
                            return (
                                <div><ToDuItem content={value} deleteItem={this.btnClickDelete.bind(this) } index={index}></ToDuItem></div>
                            ) 
                            {/* 
                                <li key={index} onClick={this.btnClickDelete.bind(this, index)} dangerouslySetInnerHTML={{__html: value}}></li>
                            */}
                        })
                    }
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

    btnClickDelete(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default Todu;