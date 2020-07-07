import React from 'react';
import  './FormАuthorization.sass';
import { connect } from 'react-redux';
import { addFocusName, addFocusPass, addCheckLengthName, addCheckLengthPass } from '../../redux/actions/actions';
import NameArea from './NameArea/NameArea';
import PassArea from './PassArea/PassArea';
import ButtonForm from './ButtonForm/ButtonForm';

const FormАuthorization = (props) => {

    // console.log(props);


    return (
        <form action="POST" className="form-authorization">

            <NameArea store={props} />
            <PassArea store={props} />  
            <ButtonForm store={props} />

        </form>
    );
};


function mapStateToProps(state) {
    return {
        isFocusUsername: state.isFocusUsername,
        isFocusPass: state.isFocusPass,
        isLengthCheckName: state.isLengthCheckName,
        isLengthCheckPass: state.isLengthCheckPass,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFocusName: () => dispatch(addFocusName()),
        onFocusPass: () => dispatch(addFocusPass()),
        onCheckLengthName: () => dispatch(addCheckLengthName()),
        onCheckLengthPass: () => dispatch(addCheckLengthPass()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormАuthorization);

