import React, { Component } from 'react';

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
    
            this.incrementCount = this.incrementCount.bind(this);
        }
    
        incrementCount() {
            this.setState({
                count : this.state.count + 1
            });
        }

        render() {
            return (
                <OriginalComponent 
                name='Shohag' 
                count={this.state.count} 
                increment={this.incrementCount}
                />
            )
        }
    }
    
    return NewComponent
}

export default UpdatedComponent;
