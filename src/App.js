import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import Form from './components/Form/Form';

const initialStateItems = [
        {
            image: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
            name: 'Dan Abramov',
            description: 'Working on @reactjs. The demo guy.',
            twitterLink: 'https://twitter.com/dan_abramov',
        },
    ];

// here we call functions using the JSX syntax
class App extends React.Component {
    state = {
        // spread operator
        items: [...initialStateItems],
    }

    // props can be functions, if we want to pass data from child to parent as in case of the form
    addItem = (e) => {
        // to avoid reload after submitting
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        }
        
        // prevState prevent mistakes casued by dynamic state changes
        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));

        // resetting array
        e.target.reset();
    }

    render() {
        return (
            <div>
                <ListWrapper 
                    items={this.state.items}
                />
                <Form 
                    submitFn={this.addItem} 
                />
            </div>
        )
    }
};

export default App;
