import { NavLink, Outlet, Route, Routes } from "react-router-dom";


const ProjectMenu = () => {
    return (
        <div className="flex">
            <div className="menu p-4 uppercase">
                <ul>
                    <li>
                        <NavLink to="/projectMenu/project1">
                        Project 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projectMenu/project2">
                        Project 2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projectMenu/project3">
                        Project 3</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProjectMenu;