import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
    
        this.state = {
             username:'',
             comments:'',
             option:'React'
        }

        this.getUserName = this.getUserName.bind(this);
        this.getComments = this.getComments.bind(this);
        this.getOption = this.getOption.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    getUserName(event) {
        this.setState({
            username:event.target.value
        })
    }

    getComments(event) {
        this.setState({
            comments:event.target.value
        })
    }

    getOption(event) {
        this.setState({
            option:event.target.value
        })
    }

    handleForm(event) {
        event.preventDefault();
        alert(`${this.state.username} , ${this.state.comments}, ${this.state.option}`);
    }
    
    render() {
        // const {username, comments, option} = this.state; // destructuring

        return (
            <div>
                <h1> {this.state.username} </h1>
                <form onSubmit={this.handleForm}>
                    <label>Username</label>
                    <input type="text" onChange={this.getUserName}/>
                    <br />

                    <label>Comments</label>
                    <textarea type="text" onChange={this.getComments}/>
                    <br />

                    <label>Languages</label>
                    <select onChange={this.getOption}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;
