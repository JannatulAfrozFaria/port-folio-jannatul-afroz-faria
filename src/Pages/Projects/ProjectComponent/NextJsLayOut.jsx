import React from 'react';
import LinkButton from '../../../assets/Components/LinkButton';
import { FaGithub } from 'react-icons/fa';
import UsedTechnology from '../../../Components/UsedTechnology';
import { HiLink } from 'react-icons/hi';
import { PiLinkSimpleHorizontalBold } from "react-icons/pi";

const NextJsLayOut = ({ image, name, description, feature1Title, feature1Des, feature2Title, feature2Des, feature3Title, feature3Des, LiveLink, ClientRepo, ServerRepo, GitHubRepo }) => {
    return (
        <div>
            <div data-aos="flip-up" data-aos-delay="1500" data-aos-duration="3000" className="grid grid-cols-1 md:grid-cols-2  bg-base-100 shadow-xl">
                {/* Image will be displayed first on mobile, but second on larger screens */}
                <div className="order-1 md:order-2">
                    <figure className='h-full'>
                        <img className="h-full w-full object-cover"
                            src={image}
                            alt="Project" />
                    </figure>
                </div>

                {/* Content will be displayed second on mobile, but first on larger screens */}
                <div className="card-body text-justify order-2 md:order-1">
                    <h2 className="card-title text-yellow-500 font-semibold">Project Name: {name}</h2>
                    <p className="text-lg text-yellow-500 font-medium">Description :</p>
                    <p>{description}</p>
                    <p className="text-lg font-medium text-yellow-500 ">Core Feature :</p>
                    <ul>
                        <li> <span className="text-gray-400 font-medium ">{feature1Title} </span>{feature1Des}</li>
                        <li> <span className="text-gray-400 font-medium ">{feature2Title} </span>{feature2Des}</li>
                        <li> <span className="text-gray-400 font-medium ">{feature3Title} </span>{feature3Des}</li>
                    </ul>

                    {/* Technology */}
                    <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                    <div>
                        <div className='grid grid-cols-4 md:grid-cols-8 gap-2 items-center w-4/5 md:w-5/6'>
                            <img className='w-16 rounded-lg' src="https://i.ibb.co/jrjDYLq/react.png" alt="React" />
                            <img className='w-16 rounded-lg' src="https://i.ibb.co/RPXxDxG/tailwind.png" alt="Tailwind" />
                            <img className='w-16 rounded-lg' src="https://i.postimg.cc/XJNfVxGs/node-js.png" alt="Vercel" />
                            <img className='w-16 h-16 rounded-lg' src="https://i.ibb.co/MG8xR7v/express.jpg" alt="Express" />
                            <img className='w-16 rounded-lg' src="https://i.ibb.co/vJ9Cq7r/vercel.jpg" alt="Vercel" />
                            <img className='w-16 h-16 rounded-lg' src="https://i.postimg.cc/c1bRSRsc/axios3626.jpg" alt="Vercel" />
                            <img className='w-16 rounded-lg' src="https://i.ibb.co/pbLRSVY/mongodb-logo-D13-D67-C930-seeklogo-com.png" alt="MonoDB" />
                            {/* <img className='w-16 rounded-lg' src="https://i.postimg.cc/ryJz3xZG/next-white.jpg" alt="Vercel" /> */}
                            <img className='w-16 rounded-lg' src="https://i.ibb.co/DMxdFmm/firebase.png" alt="Firebase" />

                        </div>
                    </div>

                    {/* Project Links */}
                    <p className="text-lg text-yellow-500 font-medium">Project Links :</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                        <LinkButton text={'Live Link'} icon={<PiLinkSimpleHorizontalBold />} link={LiveLink} ></LinkButton>
                        <LinkButton text={'Client-Repository'} icon={<FaGithub />} link={ClientRepo} ></LinkButton>
                        <LinkButton text={'Server-Repository'} icon={<FaGithub />} link={ServerRepo} ></LinkButton>
                        {/* <LinkButton text={'GitHub-Repository'} icon={<FaGithub />} link={GitHubRepo} ></LinkButton> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextJsLayOut;
