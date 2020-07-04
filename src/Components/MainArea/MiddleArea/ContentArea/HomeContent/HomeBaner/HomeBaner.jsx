import React from 'react';
import { connect } from 'react-redux';
import './HomeBaner.sass';
import { add, incrementAsync } from '../../../../../../redux/actions/actions';

const HomeBaner = props => {

    // console.log(props);

    // return (
    //         <div className="home-area__banner">
    //             <p className="home-area__timer">Banner will change after : </p>
    //             <img src="" className="home-area__img" alt="banner-foto" />
    //         </div>
    // );

    return (
        <div>
            <p>{props.counter}</p>
            <button onClick={() => props.addNumber(15)}>Click</button>
            <button onClick={() => props.bannerTimer(props.counter)}>Click</button>
        </div>
    );

}


function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bannerTimer: value => dispatch(incrementAsync(value)),
        addNumber: number => dispatch({type: 'ADD_NUMBER', payload: number}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeBaner);


