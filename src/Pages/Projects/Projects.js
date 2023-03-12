import React from 'react';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className='mt-16 ml-10 mr-10'>
           <h3 className='ml-6 text-white text-xl font-bold mt-12'>My Work</h3>
                <h1 className='ml-6 text-white text-center text-5xl font-bold mb-5'>Projects.</h1>
                <div className='flex justify-center'>
                <progress className="progress w-56 text-center bg-sky-600 text-pink-100"></progress>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 p-5'>
                <div data-aos="flip-right" className="bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2  ">
                    <figure><img src="https://i.ibb.co/DYVkwwy/New-Project-13.png" className="rounded" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className=" text-white font-bold text-2xl">Lenes Queen</div>
                        </h2>
                        <h2 className='text-lg text-white'>Technology</h2>
                        <div className="card-actions mb-0">
                            <div className="badge text-white badge-outline">HTML</div>
                            <div className="badge text-white badge-outline">TailwindCSS</div>
                            <div className="badge text-white badge-outline">React</div>
                            <div className="badge text-white badge-outline">NodeJs</div>
                            <div className="badge text-white badge-outline">MongoDB</div>
                            <div className="badge text-white badge-outline">Express.js</div>
                            <div className="badge text-white badge-outline">Firebase</div>
                        </div>
                    </div>
                    <div>
                    <a href='https://lenesqueen-a0269.web.app/'><button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">Live Site</button></a>
                    <a href='https://github.com/cse-mominul/LensQueen'><button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">Client Site</button></a>
                    <a href='https://github.com/cse-mominul/LensQueenServerSite'><button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">Server Site</button></a>
                    </div>
                </div>

                <div data-aos="flip-right" className="bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2  ">
                    <figure><img src="https://i.ibb.co/55kF9Q8/New-Project-15.png" className="rounded" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className=" text-white font-bold text-2xl">Zeron</div>
                        </h2>
                        <h2 className='text-lg text-white'>Technology</h2>
                        <div className="card-actions mb-0">
                            <div className="badge text-white badge-outline">HTML</div>
                            <div className="badge text-white badge-outline">TailwindCSS</div>
                            <div className="badge text-white badge-outline">React</div>
                            <div className="badge text-white badge-outline">NodeJs</div>
                            <div className="badge text-white badge-outline">MongoDB</div>
                            <div className="badge text-white badge-outline">Express.js</div>
                            <div className="badge text-white badge-outline">Firebase</div>
                        </div>
                    </div>
                    <div>
                    <a href='https://zeron-a55e8.web.app/'><button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">Live Site</button></a>
                    <a href='https://github.com/cse-mominul/zeron'><button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">Client Site</button></a>
                    <a href='https://github.com/cse-mominul/ZeronServer'><button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">Server Site</button></a>
                    </div>
                    
                </div>

                <div data-aos="flip-right" className="bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2  ">
                    <figure><img src="https://i.ibb.co/yq5ShJM/New-Project-6.png" className="rounded" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className=" text-white font-bold text-2xl">Reseller</div>
                        </h2>
                        <h2 className='text-lg text-white'>Technology</h2>
                        <div className="card-actions mb-0">
                            <div className="badge text-white badge-outline">HTML</div>
                            <div className="badge text-white badge-outline">TailwindCSS</div>
                            <div className="badge text-white badge-outline">React</div>
                            <div className="badge text-white badge-outline">NodeJs</div>
                            <div className="badge text-white badge-outline">MongoDB</div>
                            <div className="badge text-white badge-outline">Express.js</div>
                            <div className="badge text-white badge-outline">Firebase</div>
                        </div>
                    </div>
                    <div>
                    <a href='https://more-and-more-3661c.web.app/'><button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">Live Site</button></a>
                    <a href='https://github.com/cse-mominul/reseler'><button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">Client Site</button></a>
                    <a href='https://github.com/cse-mominul/ReselarServer'><button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">Server Site</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;