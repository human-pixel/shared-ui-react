/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Button functional component.
 *
 * @param {string}  label     Button label
 * @param {string}  id        Button ID
 * @param {Array}   classes   Button classes
 * @param {func}    onChange  onChange function
 * @param {string}  icon      Icon class
 * @param {boolean} disabled  Disabled or not
 * @return {*} Button component
 * 
 * @constructor
 */
function SUIButton( {
    label,
    id, 
    classes, 
    onClick,
    icon = false,
    disabled = false, 
    ...props } 
) {
    const combinedClasses = classNames( 'sui-button', classes );

    return (
        <React.Fragment>
            <button 
                type="button" 
                id={ id }
                className={ combinedClasses }
                onClick={ onClick }
                disabled={ disabled }
            >
                { icon && 
                    <i className={ `sui-icon-${ icon }` } aria-hidden="true"></i>
                }

                { label }
            </button>
        </React.Fragment>
    );
}

SUIButton.propTypes = {
    classes: PropTypes.array,
    icon: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
};

export default SUIButton;