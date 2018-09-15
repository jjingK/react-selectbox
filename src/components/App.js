import React, { Component } from 'react';
import css from './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Let\'s do TDD :)'
        }
    }

    render() {
        return (
            <div className={css.container}>
                {this.state.content}
            </div>
        )
    }
}

export default App;