import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

const initialStateItems = [
        {
            image: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
            name: 'Dan Abramov',
            description: 'Working on @reactjs. The demo guy.',
            twitterLink: 'https://twitter.com/dan_abramov',
        },
    ];

// here we call functions using the JSX syntax
class Root extends React.Component {
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
            <BrowserRouter>
                <>
                    <Header />
                    <h1>Hey</h1>
                    {/* everything inside switch is switchable, only one component can be open */}
                    <Switch>
                        <Route exact path="/" component={TwittersView} />
                        <Route path="/articles" component={ArticlesView} />
                        <Route path="/notes" component={NotesView} />
                        <Route path="/notes/:id" component={NotesView} />
                    </Switch>
                    <Modal />
                </>
            </BrowserRouter> 
        )
    }
};

export default Root;
