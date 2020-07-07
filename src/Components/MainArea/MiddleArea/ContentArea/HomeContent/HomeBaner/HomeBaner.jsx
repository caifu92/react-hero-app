import React, {useState, useEffect} from 'react';
import './HomeBaner.sass';
import { HomeBanerUrls } from './HomeBanerUrls';

const HomeBaner = () => {

    const [count, setCount] = useState(3);
    const [countImg, setCountImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {

            count > 1 ? setCount(count - 1) : setCount(3);

        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {

            countImg < HomeBanerUrls.length - 1 ? setCountImg(countImg + 1) : setCountImg(0);

        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [countImg]);

    
    return (
            <div className="home-area__banner">
                <p className="home-area__timer">Banner will change after : {count}</p>
                <img src={HomeBanerUrls[countImg]} className="home-area__img" alt="banner-foto" />
            </div>
    );


}

export default HomeBaner;


