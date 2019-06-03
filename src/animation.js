import React, { Component, Fragment } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
class Animation extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
            list: []
        };
        this.cltBtn = this.cltBtn.bind(this);
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    { this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                            onEntered={(e) => { e.style.color='red'}}
                            appear={true} unmountOnExit key={index}
                            timeout={2000} classNames="my-node">
                                <div>{item}</div>
                            </CSSTransition>    
                        )
                    })}
                </TransitionGroup>
                {/* <CSSTransition in={this.state.show}
                onEntered={(e) => { e.style.color='red'}}
                appear={true} unmountOnExit
                timeout={2000} classNames="my-node">
                    <div>Hello</div>
                </CSSTransition> */}
                <button onClick={ this.cltBtn }>點擊</button>
            </Fragment>
        )
    }

    cltBtn(){
        // this.setState({
        //     show: this.state.show ? false : true
        // })
        this.setState((prevState)=>{
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default Animation;