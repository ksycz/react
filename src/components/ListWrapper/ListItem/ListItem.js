import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
// ListItem is the private component - it used only by the ListWrapper
// props are taken from data file imported in ListWrapper.js

// we are desctructuring all props
const ListItem = ({
    image,
    name,
    description,
    twitterLink
}) => (
    <li className="listItem__wrapper">
        <img 
            className="listItem__image" 
            src={image} 
            alt={name} 
        />
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <a href={twitterLink} className="listItem__button">Visit Twitter Page</a>
        </div>
    </li>
);

// specifying types
ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // if the type is not required we can set a default value (as below)
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
    description: "One of the React creators",
}

export default ListItem;