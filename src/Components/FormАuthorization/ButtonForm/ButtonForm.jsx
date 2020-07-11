import React from 'react';
import './ButtonForm.sass';
// import { useHistory, Redirect } from 'react-router-dom';


const ButtonForm = (props) => {

    const { isValueName, isValuePass} = props.store;

    return (
        <div className="btn-area">
            <input type="submit"
                   className="btn-area__submit"
                   style={isValueName.length > 0 && isValuePass.length > 0 ? {border: '2px solid #dfaf3b', color: '#dfaf3b'} : {border: '2px solid #b6b0b0', color: '#b6b0b0'}}
                   onClick={event => event && isValueName.length > 0 && isValuePass.length > 0 ? localStorage.setItem('Name', isValueName) : null}      
            />
        </div>
    );
};

export default ButtonForm;
