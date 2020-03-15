import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({tag: Tag, name, label, maxLength, ...props}) => (
    <div className={styles.formItem}>
        <Tag
            className={Tag === 'textarea' ? styles.textarea : styles.input}
            type="text"
            name={name}
            id={name}
            required
            maxLength={maxLength}
            // needed for name animation
            placeholder=" "
            {...props}
        />
        <label className={styles.label}
            htmlFor={name}>
            {label}
        </label>
        <div className={styles.formItemBar} />
      </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
}

// if there is no tag in props, the default tag is input
Input.defaultProps = {
    tag: 'input',
    maxLength: 250
}

export default Input;