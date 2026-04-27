import React from 'react';
import HeroBanner from '../../component/HeroBanner/HeroBanner';
// import HeroStats from '../../component/HeroStats/HeroStats';
import HeroTopStudents from '../../component/HeroTopStudents/HeroTopStudents';
import HomeOurPriorety from '../../component/HomeOurPriorety/HomeOurPriorety';
import Marquee from 'react-fast-marquee';


const HomePage = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            {/* <HeroStats></HeroStats> */}
            {/* <Marquee>fadfasdfasdfasdfasdfasdfsadfasdfsadf
            </Marquee> */}
            <HomeOurPriorety></HomeOurPriorety>
            <HeroTopStudents></HeroTopStudents>
        </div>
    );
};

export default HomePage;