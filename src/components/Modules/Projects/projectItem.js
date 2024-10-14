import React from "react";
import Project from "./project";

const ProjectItem= (props) =>{
    
return (
    
        props.item.map(
                    project => (
                        <Project 
                            key={ project.id }
                            name={ project.name }
                            description={project.description} 
                            url={project.html_url}
                            />
                    )
                )
            
    
);
}
export default ProjectItem;