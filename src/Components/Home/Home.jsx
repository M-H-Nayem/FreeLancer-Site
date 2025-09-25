import React from 'react';
import Header from './Header';
import TaskSection from './TaskSection';
import { useLoaderData } from 'react-router';
import Slider from './Slider';
import TeamSection from './TeamSection';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    let tasks = useLoaderData()
    return (
        <div>
            <Header></Header>  
            <TaskSection Tasks={tasks}></TaskSection>
            <TeamSection></TeamSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;