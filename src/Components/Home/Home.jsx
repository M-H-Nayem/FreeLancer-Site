import React from 'react';
import Header from './Header';
import TaskSection from './TaskSection';
import { useLoaderData } from 'react-router';
import Slider from './Slider';

const Home = () => {
    let tasks = useLoaderData()
    return (
        <div>
            <Slider tasks={tasks}></Slider>
            <Header></Header>
            <TaskSection Tasks={tasks}></TaskSection>
        </div>
    );
};

export default Home;