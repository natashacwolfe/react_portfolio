import React from "react";
import "./style.css";
import ProjectData from "../../utils/projectData";

function GalleryCard() {

return (
    <div className="text-container" id="projects">

    {ProjectData.map((project) => (

        <div key={project.id} className='gallery-card'>

        <a href={project.deployment} target='_blank'><img className='grow' src={project.image} alt={project.title} style={{width: "200px"}} /></a>
        <p className="project-title">{project.title}</p>
        <p className="tech-title">Technologies Used</p>
        <p className="tech-text">{project.technologies}</p>
        <div className="btn-row">
        <a href={project.github} target='_blank'><button className="github-btn btn" >GitHub</button></a>
        <a href={project.deployment} target='_blank'><button className="deployment-btn btn">View</button></a>
        </div>
        </div>
    ))}
  
    </div>
)
};

export default GalleryCard;

