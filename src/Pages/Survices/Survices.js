import React from 'react';
import SingleService from './SingleService';
import './Service.css'

const Survices = () => {
    const services = [
        {
            id: 1,
            image: "https://i.ibb.co/hcw4jSM/New-Project-2.png",
            title: "Web Developer",
            description: ""
        },
        {
            id: 2,
            image: "https://i.ibb.co/QdVLLhC/full-stack-developer-mern-1024x1024-1-1024x1024.png",
            title: "MERN Stack Developer",
            description: ""
        },
        {
            id: 3,
            image: "https://i.ibb.co/3h25TqM/New-Project.png",
            title: "Backend",
            description: ""
        },
        {
            id: 4,
            image: "https://i.ibb.co/4NJMrSf/New-Project-1.png",
            title: "Content Creator",
            description: ""
        },
    ]
    return (
        <section className="bgColor">
            <div data-aos="fade-up-left" className='mb-12 px-5'>
                 <div className='flex justify-center'>
                <progress className="progress w-56 text-center bg-sky-600 text-pink-100"></progress>
            </div>
                <h3 className='ml-6 text-white text-xl font-bold mt-12'>Introduction</h3>
                <h1 className='ml-6 text-white text-center text-5xl font-bold mb-5'>Overview.</h1>
                <p className="ml-6 mr-6 text-white max-w-lg">Hello and Welcome ! I am a full stack web developer with 2 years of experience in React JS,
                     Next JS, JavaScript, Bootstrap, and Tailwind. I specialize in creating visually appealing and 
                     responsive websites and web applications that are optimized for both desktop and mobile devices.
                      I am proficient in JavaScript, Bootstrap, and other libraries, which
                     allows me to create interactive, responsive, and dynamic web pages that are sure to leave a
                      lasting impression. Let's work together to elevate your online presence and achieve success
                       beyond your expectations. </p>
                
            </div>
           
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 p-4 serviceOverlay'data-aos="fade-up-right">
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </section>
    );
};

export default Survices;