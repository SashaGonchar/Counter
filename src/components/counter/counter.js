import {Component} from "react";
import "./counter.css"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNum:this.props.startNum,
        }
    }

    increase = () => {
        this.setState(state => ({
            currentNum: state.currentNum + 1
        }))
    }

    decrease = () => {
        this.setState(state => ({
            currentNum: state.currentNum - 1
        }))
    }

    random = () => {
        this.setState({
            currentNum: Math.floor(Math.random() * 50)
        })
    }

    reset = () => {
        this.setState({
            currentNum: this.props.startNum
        })
    }


render (){

    return (
        <div className={'wrapperCol'}>
            <div className={"counter"}>{this.state.currentNum}</div>
            <div className={'wrapperRow'}>
                <button className={'button'} onClick={this.increase} >INC</button>
                <button className={'button'} onClick={this.decrease} >DEC</button>
                <button className={'button'} onClick={this.random}>RND</button>
                <button className={'button'} onClick={this.reset}>RES</button>
            </div>
        </div>
    );
}
}

export default Counter;