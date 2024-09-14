import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";
import UsedTechnology from "../../Components/UsedTechnology";
// import ProjectMenu from "./ProjectMenu";



const Projects = () => {
    return (
        <div>
             <Helmet>
                <title>Projetcs | Jannatul Afroz Faria</title>
            </Helmet>
            <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="2000">
                <Title heading={'projects'}></Title>
            </div>
            
            <div  className="grid grid-cols-1 ">
                 {/* Project---1 */}
                <div data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6">
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
                        {/* Technology----- */}
                        <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                        <div>
                            <UsedTechnology></UsedTechnology>
                        </div>
                        {/* Project Links------ */}
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
                </div>
                {/* Project---2 */}
                <div data-aos="flip up" data-aos-delay="2000" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6">
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
                        {/* Technology----- */}
                        <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                        <div>
                            <UsedTechnology></UsedTechnology>
                        </div>
                        {/* Project Links------ */}
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
                </div>
                {/* Project---3 */}
                <div data-aos="zoom-in" data-aos-delay="2500" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6">
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
                        {/* Technology----- */}
                        <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                        <div>
                            <UsedTechnology></UsedTechnology>
                        </div>
                        {/* Project Links------ */}
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
                </div>
                {/* Project---4 */}
                <div data-aos="flip-up" data-aos-delay="3000" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6 md:mb-12">
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
                        {/* Technology----- */}
                        <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                        <div>
                            <UsedTechnology></UsedTechnology>
                        </div>
                        {/* Project Links------ */}
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
                </div>
            </div>
            {/* <ProjectMenu></ProjectMenu> */}
        </div>
    );
};

export default Projects;