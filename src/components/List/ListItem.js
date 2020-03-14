import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';
import Title from "../Title/Title";
// ListItem is the private component - it used only by the ListWrapper
// props are taken from data file imported in ListWrapper.js

// we are desctructuring all props
const ListItem = ({ image, name, description, twitterLink
}) => {

    const ImageTag = image ? 'img' : 'div';
    return (
        <li className={styles.wrapper}>
            <ImageTag
                className={image ? styles.image : styles.imageNone} 
                src={image} 
                alt={name} 
            />
            <div>
                <Title>{name}</Title>
                <p className={styles.description}>{description}</p>
                <Button
                    href={twitterLink}>
                    Visit Twitter page
                </Button>
            </div>
        </li>
    )
};

// specifying types
ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    // if the type is not required we can set a default value (as below)
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
    description: "One of the React creators",
    image: null,
}

export default ListItem;