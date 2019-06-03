import React, { Component, Fragment } from 'react';
import {CSSTransition} from 'react-transition-group';
class Animation extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        };
        this.cltBtn = this.cltBtn.bind(this);
    }

    render() {
        return (
            <Fragment>
                <CSSTransition in={this.state.show}
                onEntered={(e) => { e.style.color='red'}}
                appear={true}
                timeout={2000} classNames="my-node">
                    <div>Hello</div>
                </CSSTransition>
                <button onClick={ this.cltBtn }>點擊</button>
            </Fragment>
        )
    }

    cltBtn(){
        this.setState({
            show: this.state.show ? false : true
        })
    }
}

export default Animation;