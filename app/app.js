import React from 'react';
import Counter from './Counter';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Here's where the magic happens!</p>
                <Counter />
            </div>
        );
    }
}

export default App;