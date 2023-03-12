import React from 'react';
import './Introduce.css'


const Introduce = () => {
    return (
        <div>
            <h3 className='text-center text-white text-xl font-bold mt-12'>WHAT I HAVE DONE SO FAR</h3>
            <h3 className='text-center text-white text-5xl font-bold mt-2'>Training & Education.</h3>

            <div className="mt-6 max-w-7xl mx-auto w-full grid grid-cols-9 px-2 ">
            <div class="col-span-4 w-full h-full ">
            <div className="w-full h-full bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2 md:pl-4 ">
                <h1 className="text-white text-xl font-bold py-2">Web Development</h1>
                <div className='flex justify-between'>
                <h3 className="text-white  ">Programming Hero</h3>
                <h3 className="text-white  ">Duration: 6 Months</h3>
                </div>
                <p className="text-gray-100 sm:text-sm mt-2 text-xs"> 1. Understanding of the MERN architecture: i learn how each component of the MERN stack works together to create a full-stack web application.</p>
                <p className="text-gray-100 sm:text-sm mt-2 text-xs">2. Creating a RESTful API with Node.js and Express.js: i learn how to create a backend API using Node.js and Express.js that communicates with a MongoDB database.</p>
            <p className="text-gray-100 sm:text-sm mt-2 text-xs">3. Building a frontend with React.js: i learn how to use React.js to build a responsive and dynamic frontend for your web application.</p>
            <p className="text-gray-100 sm:text-sm mt-2 text-xs">4. Connecting the frontend and backend: i learn how to connect the frontend and backend of your application using API calls.</p>
           <p className="text-gray-100 sm:text-sm mt-2 text-xs">5. Authentication and Authorization: i learn how to implement authentication and authorization in your MERN stack application to ensure that only authorized users can access certain parts of your application.</p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-indigo-300"></div>
            <img class="absolute w-10 h-10 rounded-full bg-indigo-400 z-10 text-white text-center" src="https://i.ibb.co/9GsfSC7/unnamed.png"/>
        </div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-indigo-300"></div>
            <img class="absolute w-10 h-10 rounded-full bg-indigo-400 z-10 text-white text-center" src='https://i.ibb.co/RCRsjKQ/unnamed-1.png'/>
        </div>
        
        <div class="col-span-4 w-full h-full ">
        <div className="w-full h-full bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2 md:pl-4 ">
                <h1 className="text-white text-xl font-bold py-2">Web Design</h1>
                <div className='flex justify-between'>
                <h3 className="text-white  ">Creative It</h3>
                <h3 className="text-white  ">Duration: 6 Months</h3>
                </div>
                <p className="text-gray-100 sm:text-sm text-xs mt-2">
                1. Responsive design: I learn how to create websites that look good and work well on a variety of devices, including desktops, laptops, tablets, and smartphones.</p>
           <p className="text-gray-100 sm:text-sm text-xs mt-2">2. User experience (UX) design: I learn how to create a website that provides a positive experience for users, from the way information is organized to the ease of navigation.</p>
           <p className="text-gray-100 sm:text-sm text-xs mt-2">3. Graphic design: I learn how to create and edit images, graphics, and other visual elements that can be used on your website.</p>
           <p className="text-gray-100 sm:text-sm text-xs mt-2">4. Tailwind and Bootstrap: In a web design course, i also learn how to combine the features of Tailwind and Bootstrap to create a custom front-end framework that meets specific design and development needs.</p>
           <p className="text-gray-100 sm:text-sm text-xs mt-2">5. User interface (UI) design: I learn how to design the layout, color scheme, typography, and other visual elements of website to create an intuitive and user-friendly interface.</p>
            </div>
        </div>
        
        <div class="col-span-4 w-full h-full ">
            <div className="w-full h-full bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2 md:pl-4 ">
                <h1 className="text-white text-xl font-bold py-2">Fundamentals of Digital Marketing</h1>
                <div className='flex justify-between'>
                <h3 className="text-white  ">Google</h3>
                <h3 className="text-white  ">Duration: 40 Hours</h3>
                </div>
                <p className="text-gray-100 sm:text-sm text-xs mt-2">1. Understanding the audience: I learn about audience segmentation and how to identify and target the right audience for your marketing campaigns.</p>
          <p className="text-gray-100 sm:text-sm text-xs mt-2">2. Social media marketing: I learn about the different social media platforms and how to use them to connect with audience and promote business.</p>
            <p className="text-gray-100 sm:text-sm text-xs mt-2" >3. Introduction to digital marketing: I learn about the evolution of marketing and how digital marketing fits into the overall marketing landscape. I also learn about the benefits of digital marketing over traditional marketing.</p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-indigo-300"></div>
            <img class="absolute w-10 h-10 rounded-full bg-white z-10 text-white text-center" src="https://i.ibb.co/Hhqwz6g/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"/>
        </div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-indigo-300"></div>
            <img class="absolute w-10 h-10 rounded-full bg-indigo-400 z-10 text-white text-center" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsFucmOTIFo5w2VPVFHbbiJvEM3gxqIUFlwAEirg&s'/>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div className="w-full h-full bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2 md:pl-4 ">
                <h1 className="text-white text-xl font-bold py-2">Computer Science and Engineering</h1>
                <div className='flex justify-between'>
                <h3 className="text-white  ">Dinajpur Polytechnic Institute</h3>
                <h3 className="text-white  ">Duration: 4 Years</h3>
                </div>
                <p className="text-gray-100 sm:text-sm mt-2 text-xs">
                In a CSE course, i learn about programming languages, data structures and algorithms,
                 operating systems, computer organization and architecture, computer networks, database systems,
                  software engineering, and web development.
                </p>
            </div>
        </div>

        </div>
        <div className=''>
        <img className='w-13 shadow-md bg-blend-hard-light  border-2  shadow-white border-red h-13 rounded-full bg-white' src='https://i.ibb.co/Bc4B7Sx/reactjs.png'/>
        </div>
        

        </div>
    );
};

export default Introduce;