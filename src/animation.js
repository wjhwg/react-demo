import React, { Component, Fragment } from 'react';

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
                <div className={ this.state.show ? 'show' : 'hide'}>Hello</div>
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