// assume this class is parent

import React, {Component} from 'react';
import Child from './Child';

class LiftingStateUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            money : 0
        }

        this.setMoney = this.setMoney.bind(this);
    }
    
    setMoney(childMoney) {
        this.setState({
            money : childMoney
        })
    }

    render() {
        return (
            <div>
                <h3> Got {this.state.money} from Child </h3>
                <Child money={this.state.money} setMoney={this.setMoney}/>
            </div>
        )
    }
}

export default LiftingStateUp;
