import React from 'react';
import BlogCard from '../Component/BlogCard';

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white'>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    );
};

export default Home;