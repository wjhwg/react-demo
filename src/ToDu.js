import React, {Component, Fragment} from 'react';
import ToDuItem from './ToDuItem'
class Todu extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue : '',
            list : []
        }
        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.btnClick = this.btnClick.bind(this);
        this.btnClickDelete = this.btnClickDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insert">Input Value</label>
                    {/* 輸入框 */}
                    <input id="insert" value = {this.state.inputValue} onChange = {this.handlerInputChange} />
                    <button onClick = {this.btnClick}>添加</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    { 
                        this.getItem()
                    }
                </ul>
            </Fragment>
        )
    }

    getItem(){
        return  this.state.list.map((value, index) => {
            return (
                <ToDuItem content={value} deleteItem={this.btnClickDelete} index={index} key={index}></ToDuItem>
            ) 
        })
    }

    handlerInputChange(e){
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    btnClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('div').length);
        })
    }

    btnClickDelete(index){
        this.setState( () => {
            const list = [...this.state.list];
            list.splice(index, 1);
            return {
                list
            }
        })
    }
}

export default Todu;