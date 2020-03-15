import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import AppContext from '../../context';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

// here we call functions using the JSX syntax
class Root extends React.Component {
    state = {
        items: {
            twitters: [],
            articles: [],
            notes: [],
        },
        isModalOpen: true,
    };

    // props can be functions, if we want to pass data from child to parent as in case of the form
    addItem = (e) => {
        // to avoid reload after submitting
        e.preventDefault();

        console.log("tet");

        // const newItem = {
        //     name: e.target[0].value,
        //     twitterLink: e.target[1].value,
        //     image: e.target[2].value,
        //     description: e.target[3].value,
        // }
        
        // // prevState prevent mistakes casued by dynamic state changes
        // this.setState(prevState => ({
        //     items: [...prevState.items, newItem],
        // }));

        // // resetting array
        // e.target.reset();
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const { isModalOpen } = this.state;
        const contextElements = {
            // spread operator
            ...this.state,
            addItem: this.addItem
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header openModalFn={this.openModal}/>
                    <h1>Hey</h1>
                    {/* everything inside switch is switchable, only one component can be open */}
                    <Switch>
                        <Route exact path="/" component={TwittersView} />
                        <Route path="/articles" component={ArticlesView} />
                        <Route path="/notes" component={NotesView} />
                        <Route path="/notes/:id" component={NotesView} />
                    </Switch>
                    { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
                </AppContext.Provider>
            </BrowserRouter> 
        )
    }
};

export default Root;
