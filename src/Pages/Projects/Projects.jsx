import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";
import ProjectMenu from "./ProjectMenu";


const Projects = () => {
    return (
        <div>
             <Helmet>
                <title>Projetcs | Jannatul Afroz Faria</title>
            </Helmet>
            <Title heading={'projects'}></Title>
            <div className="grid grid-cols-1">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        alt="Album" />
                    </figure>
                    <div className="card-body text-left">
                        <h2 className="card-title text-yellow-500 font-semibold">Project Name: Asset Track Pro</h2>
                        <p className="text-lg text-yellow-500 font-medium">Description :</p>
                        <p>This is an asset management website where HR managers can manage, add, update and delete assets. Employees can create asset requests and HR managers can approve or reject those requests.</p>
                        <p className="text-lg font-medium text-yellow-500 ">Core Feature :</p>
                        <ul>
                            <li> <span className="text-gray-300 font-medium ">User Role Management: </span>Differentiates access controls and permissions for two user groups: Employees and HR Managers.</li>
                            <li> <span className="text-gray-300 font-medium ">Asset Request System: </span>Allows Employees to browse available assets and submit requests for the required assets.</li>
                            <li> <span className="text-gray-300 font-medium ">Comprehensive Dashboard: </span>Offers Employees a personal dashboard to track their requests and HR Managers an administrative dashboard to manage asset inventory and request approvals efficiently.</li>
                        </ul>
                    </div>
                </div>
                {/* Project---2 */}
            </div>
            {/* <ProjectMenu></ProjectMenu> */}
        </div>
    );
};

export default Projects;