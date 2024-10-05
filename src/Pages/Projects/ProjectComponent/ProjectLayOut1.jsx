import React from 'react';
import UsedTechnology from '../../../Components/UsedTechnology';

const ProjectLayOut1 = () => {
    return (
        <div>
            <div data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl mb-6">
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
        </div>
    );
};

export default ProjectLayOut1;