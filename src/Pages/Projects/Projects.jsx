import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";
import UsedTechnology from "../../Components/UsedTechnology";
import LinkButton from "../../assets/Components/LinkButton";
import { FaGithub } from "react-icons/fa";
import ProjectLayOut1 from "./ProjectComponent/ProjectLayOut1";
import ProjectLayOut2 from "./ProjectComponent/ProjectLayOut2";
// import ProjectMenu from "./ProjectMenu";



const Projects = () => {
    return (
        <div>
            <Helmet>
                <title>Projetcs | Jannatul Afroz Faria</title>
            </Helmet>
            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="2000">
                <Title heading={'projects'}></Title>
            </div>

            <div className="grid grid-cols-1 ">
                {/* Project---1 */}
                <ProjectLayOut2 image={'https://i.postimg.cc/Pr5rZCcz/welcome.jpg'} name={ 'Plenora Architects Ltd.'} description={"This is a job seeking website where candidates can view and apply in various jobs. There are 4 categories of jobs. On-site, Remote, Part - Time, Full-Time. New Jobs can also be added here."} 
                feature1Title={'User-friendly Interface'} feature1Des={'Intuitive design for effortless navigation and efficient job searching.'} 
                feature2Title={'Mobile Accessibility'} feature2Des={'Seamless access on mobile devices, enabling job searching and networking on-the-go.'} 
                feature3Title={'Comprehensive Job Listings'} feature3Des={'Offers Admins to add and post jobs. And Users can apply on those jobs.'} 
                LiveLink={'https://career-bridge-a6961.web.app/'}
                ClientRepo={'https://github.com/JannatulAfrozFaria/career-bridge-client'} 
                ServerRepo={'https://github.com/JannatulAfrozFaria/career-bridge-server'}></ProjectLayOut2>
                <div data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6">
                    <figure>
                        <img className="w-[700px] h-[400px]"
                            src="https://i.postimg.cc/Pr5rZCcz/welcome.jpg"
                            alt="Album" />
                    </figure>
                    <div className="card-body text-left">
                        <h2 className="card-title text-yellow-500 font-semibold">Project Name: Plenora Architects</h2>
                        <p className="text-lg text-yellow-500 font-medium">Description :</p>
                        <p>This is an architectural website where The firm display their projects. this is basically a service providing website where clients can know about the previous projects done by the company and gather idea about design and construction.</p>
                        <p className="text-lg font-medium text-yellow-500 ">Core Feature :</p>
                        {/* <ul>
                            <li> <span className="text-gray-400 font-medium ">User Role Management: </span>Differentiates access controls and permissions for two user groups: Employees and HR Managers.</li>
                            <li> <span className="text-gray-400 font-medium ">Asset Request System: </span>Allows Employees to browse available assets and submit requests for the required assets.</li>
                            <li> <span className="text-gray-400 font-medium ">Comprehensive Dashboard: </span>Offers Employees a personal dashboard to track their requests and HR Managers an administrative dashboard to manage asset inventory and request approvals efficiently.</li>
                        </ul> */}
                        {/* Technology----- */}
                        <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                        <div>
                            <div className='grid grid-cols-4 md:grid-cols-8 gap-2 items-center w-4/5 md:w-5/6'> 
                                <img className='w-16 rounded-lg' src="https://i.postimg.cc/ryJz3xZG/next-white.jpg" alt="Next.js" />
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
                        {/* Project Links------ */}
                        <p className="text-lg text-yellow-500 font-medium">Project Links :</p>
                        <div className="flex gap-3">
                            <LinkButton text={'Live Link'} link={'https://plenora.vercel.app/'} ></LinkButton>
                            <LinkButton text={'GitHub Repository Link'} icon={<FaGithub />} link={'https://github.com/JannatulAfrozFaria/plenora'} ></LinkButton>
                        </div>
                    </div>
                </div>
                {/* Project---2 */}
                {/* <div data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6">
                    <figure>
                        <img className="w-[700px] h-full"
                            src="https://i.ibb.co/MCty8YK/notebook.png"
                            alt="Album" />
                    </figure>
                    <div className="card-body text-left">
                        <h2 className="card-title text-yellow-500 font-semibold">Project Name: Asset Track Pro</h2>
                        <p className="text-lg text-yellow-500 font-medium">Description :</p>
                        <p>This is an asset management website where HR managers can manage, add, update and delete assets. Employees can create asset requests and HR managers can approve or reject those requests.</p>
                        <p className="text-lg font-medium text-yellow-500 ">Core Feature :</p>
                        <ul>
                            <li> <span className="text-gray-400 font-medium ">User Role Management: </span>Differentiates access controls and permissions for two user groups: Employees and HR Managers.</li>
                            <li> <span className="text-gray-400 font-medium ">Asset Request System: </span>Allows Employees to browse available assets and submit requests for the required assets.</li>
                            <li> <span className="text-gray-400 font-medium ">Comprehensive Dashboard: </span>Offers Employees a personal dashboard to track their requests and HR Managers an administrative dashboard to manage asset inventory and request approvals efficiently.</li>
                        </ul>
                        <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                        <div>
                            <UsedTechnology></UsedTechnology>
                        </div>
                        <p className="text-lg text-yellow-500 font-medium">Project Links :</p>
                        <div>
                            <p> <span className="text-gray-400 font-medium ">Live Link : </span> <a href="https://asset-track-pro-34487.web.app/">
                                <span className="text-green-400">Asset Track Pro Live Website</span>
                            </a></p>
                            <p> <span className="text-gray-400 font-medium ">GitHub Link (client-side) : </span> <a href="https://github.com/JannatulAfrozFaria/asset-track-pro-client">
                                <span className="text-green-400">Asset Track Pro Client Side GitHub Link</span></a></p>
                            <p> <span className="text-gray-400 font-medium ">GitHub Link (server-side) : </span> <a href="https://github.com/JannatulAfrozFaria/asset-track-pro-server">
                                <span className="text-green-400">Asset Track Pro Server Side Github Link</span></a> </p>
                        </div>
                    </div>
                </div> */}
                <ProjectLayOut1 image={'https://i.ibb.co/MCty8YK/notebook.png'} name={'Asset Track Pro'} description={'This is an asset management website where HR managers can manage, add, update and delete assets. Employees can create asset requests and HR managers can approve or reject those requests.'} 
                feature1Title={'User Role Management'} feature1Des={'Differentiates access controls and permissions for two user groups: Employees and HR Managers.'} 
                feature2Title={'Asset Request System'} feature2Des={'Allows Employees to browse available assets and submit requests for the required assets.'} 
                feature3Title={'Comprehensive Dashboard'} feature3Des={'Offers Employees a personal dashboard to track their requests and HR Managers an administrative dashboard to manage asset inventory and request approvals efficiently.'} 
                LiveLink={'https://asset-track-pro-34487.web.app/'}
                ClientRepo={'https://github.com/JannatulAfrozFaria/asset-track-pro-client'} ServerRepo={'https://github.com/JannatulAfrozFaria/asset-track-pro-server'}></ProjectLayOut1>
                {/* Project---3 */}
                <ProjectLayOut2 image={'https://i.ibb.co/X5zdNbT/360-F-498943157-fhn9l-PRGBl-Yt-LXN8-Cb-T4-Fsbt-Fc4ths-YP.jpg'} name={'Career Bridge'} description={"This is a job seeking website where candidates can view and apply in various jobs. There are 4 categories of jobs. On-site, Remote, Part - Time, Full-Time. New Jobs can also be added here."} 
                feature1Title={'User-friendly Interface'} feature1Des={'Intuitive design for effortless navigation and efficient job searching.'} 
                feature2Title={'Mobile Accessibility'} feature2Des={'Seamless access on mobile devices, enabling job searching and networking on-the-go.'} 
                feature3Title={'Comprehensive Job Listings'} feature3Des={'Offers Admins to add and post jobs. And Users can apply on those jobs.'} 
                LiveLink={'https://career-bridge-a6961.web.app/'}
                ClientRepo={'https://github.com/JannatulAfrozFaria/career-bridge-client'} 
                ServerRepo={'https://github.com/JannatulAfrozFaria/career-bridge-server'}></ProjectLayOut2>

                {/* <div data-aos="flip-up" data-aos-delay="1500" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6">
                    <figure>
                        <img className="w-[700px] h-full"
                            src="https://i.ibb.co/X5zdNbT/360-F-498943157-fhn9l-PRGBl-Yt-LXN8-Cb-T4-Fsbt-Fc4ths-YP.jpg"
                            alt="Album" />
                    </figure>
                    <div className="card-body text-left">
                        <h2 className="card-title text-yellow-500 font-semibold">Project Name: Career Bridge</h2>
                        <p className="text-lg text-yellow-500 font-medium">Description :</p>
                        <p>This is a job seeking website where candidates can view and apply in various jobs. There are 4 categories of jobs. On-site, Remote, Part - Time, Full-Time. New Jobs can also be added here.</p>
                        <p className="text-lg font-medium text-yellow-500 ">Core Feature :</p>
                        <ul>
                            <li> <span className="text-gray-400 font-medium ">User-friendly Interface:  </span>Intuitive design for effortless navigation and efficient job searching.</li>
                            <li> <span className="text-gray-400 font-medium ">Mobile Accessibility:  </span>Seamless access on mobile devices, enabling job searching and networking on-the-go.</li>
                            <li> <span className="text-gray-400 font-medium ">Comprehensive Job Listings: </span>Offers Admins to add and post jobs. And Users can apply on those jobs.</li>
                        </ul>

                        <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                        <div>
                            <UsedTechnology></UsedTechnology>
                        </div>
 
                        <p className="text-lg text-yellow-500 font-medium">Project Links :</p>
                        <div>
                            <p> <span className="text-gray-400 font-medium ">Live Link : </span> <a href="https://career-bridge-a6961.web.app/">
                                <span className="text-green-400">Career Bridge Live Website</span>
                            </a></p>
                            <p> <span className="text-gray-400 font-medium ">GitHub Link (client-side) : </span> <a href="https://github.com/JannatulAfrozFaria/career-bridge-client">
                                <span className="text-green-400">Career Bridge Client Side GitHub Link</span></a></p>
                            <p> <span className="text-gray-400 font-medium ">GitHub Link (server-side) : </span> <a href="https://github.com/JannatulAfrozFaria/career-bridge-server">
                                <span className="text-green-400">Career Bridge Server Side Github Link</span></a> </p>
                        </div>
                    </div>
                </div> */}
                
                {/* Project---4 */}
                <ProjectLayOut1 image={'https://i.postimg.cc/0jyPQdL7/istockphoto-1300036753-612x612.jpg'} name={'Prime Picks'} description={"This is your one-stop destination for finding the right medicine with ease and convenience. Whether you're looking for over-the-counter remedies, prescription drugs, or wellness products, Prime Pricks allows you to explore a comprehensive collection of medicines."} 
                feature1Title={'Advanced Filtering Options'} feature1Des={'Search for medicines by brand name, category, or date of addition, and filter them by price range to find exactly what you need.'} 
                feature2Title={'Flexible Sorting'} feature2Des={'Enables HR Managers to view, accept, or decline asset requests submitted by Employees.'} 
                feature3Title={'Comprehensive Medicine Database'} feature3Des={'Comprehensive Medicine Database: </span> Access a wide range of medicines and wellness products, ensuring you can find the right solution for your health needs.'} 
                LiveLink={'https://prime-picks-7409b.web.app/'}
                ClientRepo={'https://github.com/JannatulAfrozFaria/prime-picks-client'} 
                ServerRepo={'https://github.com/JannatulAfrozFaria/prime-picks-server'}></ProjectLayOut1>

                {/* <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6">
                    <figure>
                        <img className="w-[700px] h-full"
                            src="https://i.postimg.cc/0jyPQdL7/istockphoto-1300036753-612x612.jpg"
                            alt="Album" />
                    </figure>
                    <div className="card-body text-left">
                        <h2 className="card-title text-yellow-500 font-semibold">Project Name: Prime Picks</h2>
                        <p className="text-lg text-yellow-500 font-medium">Description :</p>
                        <p>This is your one-stop destination for finding the right medicine with ease and convenience. Whether you're looking for over-the-counter remedies, prescription drugs, or wellness products, Prime Pricks allows you to explore a comprehensive collection of medicines.</p>
                        <p className="text-lg font-medium text-yellow-500 ">Core Feature :</p>
                        <ul>
                            <li> <span className="text-gray-400 font-medium ">Advanced Filtering Options:  </span>Search for medicines by brand name, category, or date of addition, and filter them by price range to find exactly what you need.</li>
                            <li> <span className="text-gray-400 font-medium ">Flexible Sorting:  </span>Enables HR Managers to view, accept, or decline asset requests submitted by Employees.</li>
                            <li> <span className="text-gray-400 font-medium ">Comprehensive Medicine Database: </span> Access a wide range of medicines and wellness products, ensuring you can find the right solution for your health needs.</li>
                        </ul>
                        <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                        <div>
                            <UsedTechnology></UsedTechnology>
                        </div>
                        <p className="text-lg text-yellow-500 font-medium">Project Links :</p>
                        <div>
                            <p> <span className="text-gray-400 font-medium ">Live Link : </span> <a href="https://prime-picks-7409b.web.app/">
                                <span className="text-green-400">Prime Picks Live Website</span>
                            </a></p>
                            <p> <span className="text-gray-400 font-medium ">GitHub Link (client-side) : </span> <a href="https://github.com/JannatulAfrozFaria/prime-picks-client">
                                <span className="text-green-400">Prime Picks Client Side GitHub Link</span></a></p>
                            <p> <span className="text-gray-400 font-medium ">GitHub Link (server-side) : </span> <a href="https://github.com/JannatulAfrozFaria/prime-picks-server">
                                <span className="text-green-400">Prime Picks Server Side Github Link</span></a> </p>
                        </div>
                    </div>
                </div> */}
                
                {/* Project---5 */}
                <ProjectLayOut2 image={'https://i.ibb.co/xXDBv7V/3.png'} name={'Tourista'} description={"This is a tourism related website where various tourist spots can be added by users. The spot cards can be updated and deleted by the users."} 
                feature1Title={'Comprehensive Destination Guides'} feature1Des={'Explore detailed insights into Asian destinations, from iconic landmarks to hidden gems.'} 
                feature2Title={'Cultural Experiences'} feature2Des={'Immerse yourself in authentic traditions through curated tours and local experiences.'} 
                feature3Title={'Engaging Content'} feature3Des={'Stay informed and inspired with articles, photos, and videos showcasing the beauty and diversity of Asia.'} 
                LiveLink={'https://tourista-24a6c.web.app/'}
                ClientRepo={'https://github.com/JannatulAfrozFaria/tourista-client'} 
                ServerRepo={'https://github.com/JannatulAfrozFaria/tourista-server'}></ProjectLayOut2>
                {/* 
                <div data-aos="flip-up" data-aos-delay="200" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6 md:mb-12">
                    <figure>
                        <img className="w-[700px] h-full"
                            src="https://i.ibb.co/xXDBv7V/3.png"
                            alt="Album" />
                    </figure>
                    <div className="card-body text-left">
                        <h2 className="card-title text-yellow-500 font-semibold">Project Name: Tourista</h2>
                        <p className="text-lg text-yellow-500 font-medium">Description :</p>
                        <p>This is a tourism related website where various tourist spots can be added by users. The spot cards can be updated and deleted by the users.</p>
                        <p className="text-lg font-medium text-yellow-500 ">Core Feature :</p>
                        <ul>
                            <li> <span className="text-gray-400 font-medium ">Comprehensive Destination Guides:  </span>Explore detailed insights into Asian destinations, from iconic landmarks to hidden gems.</li>
                            <li> <span className="text-gray-400 font-medium ">Cultural Experiences:  </span>Immerse yourself in authentic traditions through curated tours and local experiences.</li>
                            <li> <span className="text-gray-400 font-medium ">Engaging Content: </span>Stay informed and inspired with articles, photos, and videos showcasing the beauty and diversity of Asia.</li>
                        </ul>
                        <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                        <div>
                            <UsedTechnology></UsedTechnology>
                        </div>
                        <p className="text-lg text-yellow-500 font-medium">Project Links :</p>
                        <div>
                            <p> <span className="text-gray-400 font-medium ">Live Link : </span> <a href="https://tourista-24a6c.web.app/">
                                <span className="text-green-400">Tourista Live Website</span>
                            </a></p>
                            <p> <span className="text-gray-400 font-medium ">GitHub Link (client-side) : </span> <a href="https://github.com/JannatulAfrozFaria/tourista-client">
                                <span className="text-green-400">Tourista Client Side GitHub Link</span></a></p>
                            <p> <span className="text-gray-400 font-medium ">GitHub Link (server-side) : </span> <a href="https://github.com/JannatulAfrozFaria/tourista-server">
                                <span className="text-green-400">Tourista Server Side Github Link</span></a> </p>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <ProjectMenu></ProjectMenu> */}
        </div>
    );
};

export default Projects;