/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Toggle functional component.
 *
 * @param {string}  label     Toggle label
 * @param {string}  id        Toggle ID
 * @param {Array}   classes   Toggles class
 * @param {string}  id        Button ID
 * @param {func}    onChange  onChange function
 * @param {boolean} disabled  Disabled or not
 * @return {*} Toggle component.
 * @constructor
 */
function SUIToggle( {
    label,
    id, 
    classes, 
    checked, 
    onChange,
    disabled = false, 
    ...props } 
) {
    const combinedClasses = classNames( 'sui-toggle', classes );

    return (
        <React.Fragment>
            <label className={ combinedClasses }>
                <input 
                    type="checkbox" 
                    id={ id } 
                    onChange={ onChange }
                    checked={ checked }
                />
                <span className="sui-toggle-slider"></span>
            </label>

            { label && 
                <label htmlFor={ id }  className="sui-toggle-label">
                    { label }
                </label>
            }
        </React.Fragment>
    );
}

SUIToggle.propTypes = {
    classes: PropTypes.array,
    checked: PropTypes.bool,
    id: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
};

export default SUIToggle;