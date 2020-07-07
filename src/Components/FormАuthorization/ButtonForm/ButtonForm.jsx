import React from 'react';
import './ButtonForm.sass';

const ButtonForm = (props) => {

    const {isLengthCheckName, isLengthCheckPass } = props.store;

    console.log('isLengthCheckName', isLengthCheckName);
    console.log('isLengthCheckPass', isLengthCheckPass);


    return (
        <div className="btn-area">
            <input type="submit" className="btn-area__submit" style={isLengthCheckName && isLengthCheckPass ? {border: '2px solid #dfaf3b', color: '#dfaf3b'} : null}/>
        </div>
    );
};

export default ButtonForm;