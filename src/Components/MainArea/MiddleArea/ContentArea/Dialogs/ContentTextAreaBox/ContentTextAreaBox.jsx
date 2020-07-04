import React from 'react';
import './ContentTextAreaBox.sass';

export const ContentTextAreaBox = () => {
    return (
        <div className="coments">
            <textarea className="coments__area" placeholder="Add coments"/>
            <input type="submit" className="coments__btn" value="Add coment"/>
        </div>
    );
};