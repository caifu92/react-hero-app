import React from 'react';
import './NameArea.sass';

const NameArea = (props) => {

    const { isFocusUsername, onFocusName, onValueName } = props.store;

    const classesFocusName = ['area-name__label'];

    if (isFocusUsername) {
        classesFocusName.push('name-focus');
    }

    return (
        <div className="area-name">
            <label htmlFor="username" className={classesFocusName.join(' ')} style={isFocusUsername ? { color: '#dfaf3b' } : { color: '#b6b0b0' }}>
                Name:
                </label>

            <input type="text"
                style={isFocusUsername ? { borderBottom: '2px solid #dfaf3b' } : null}
                id="username"
                className="area-name__input"
                required
                onFocus={event => event.target.value ? null : onFocusName()}
                onBlur={event => event.target.value ? null : onFocusName()}
                onChange={event => event.target.value.length >= 0 ? onValueName(event.target.value) : null}
            />
        </div>
    );
};

export default NameArea;

