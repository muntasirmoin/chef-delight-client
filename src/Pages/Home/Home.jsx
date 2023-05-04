import React from 'react';
import Chef from './Chef/Chef';
import BannerOne from '../../Banner/BannerOne';
import BannerTwo from '../../Banner/BannerTwo';
import BannerThree from '../../Banner/BannerThree';

const Home = () => {
    return (
        <div>
          
            <BannerOne></BannerOne>
            <Chef></Chef>
            <BannerTwo></BannerTwo>
            <BannerThree></BannerThree>
        </div>
    );
};

export default Home;