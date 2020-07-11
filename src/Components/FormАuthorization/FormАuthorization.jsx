import React from 'react';
import  './FormАuthorization.sass';
import { connect } from 'react-redux';
import { addFocusName, addFocusPass, addValueName, addValuePass, addPassInerHtml } from '../../redux/actions/actions';
import NameArea from './NameArea/NameArea';
import PassArea from './PassArea/PassArea';
import ButtonForm from './ButtonForm/ButtonForm';

const FormАuthorization = (props) => {

    console.log(props.isPassInerHtml);

    return (
        <form className="form-authorization">

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
        isValueName: state.isValueName,
        isValuePass: state.isValuePass,
        isPassInerHtml: state.isPassInerHtml,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFocusName: () => dispatch(addFocusName()),
        onFocusPass: () => dispatch(addFocusPass()),
        onValueName: value => dispatch(addValueName(value)),
        onValuePass: value => dispatch(addValuePass(value)),
        onPassInnerHtml: value => dispatch(addPassInerHtml(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormАuthorization);

