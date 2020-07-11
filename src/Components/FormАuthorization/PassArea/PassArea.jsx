import React from 'react';
import './PassArea.sass';

const PassArea = (props) => {

    const { isFocusPass, onFocusPass, onValuePass, } = props.store;

    const classesFocusPass = ['area-pass__label'];


    if(isFocusPass) {
        classesFocusPass.push('pass-focus');
    }

    return (
        <div className="area-pass">
            <label htmlFor="password" className={classesFocusPass.join(' ')} style={isFocusPass ? {color: '#dfaf3b'} : {color: '#b6b0b0'}} >
                Password:
            </label>

            <input type="password"
                id="password"
                style={isFocusPass ? {borderBottom: '2px solid #dfaf3b'} : null}
                className="area-pass__input"
                required
                onFocus={event => event.target.value ? null : onFocusPass()}
                onBlur={event => event.target.value ? null : onFocusPass()}
                onChange={event => event.target.value.length >= 0 ? onValuePass(event.target.value) : null }
                
            />
        </div>
    );
};

export default PassArea;