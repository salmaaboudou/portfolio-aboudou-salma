import React, { useState } from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Modal, Button } from "@mui/material"; 
import {info} from "../../info/Info";

export default function Portfolio({ darkMode }) {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);

    };

    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock
                            image={project.image}
                            live={project.live}
                            source={project.source}
                            title={project.title}
                            year={project.year} 
                            mission={project.mission}
                            projectDescription={project.projectDescription}
                            technologiesUsed={project.technologiesUsed}
                            clientFeedback={project.clientFeedback}
                            darkMode={darkMode}
                            onClick={() => handleProjectClick(project)}
                        />
                    </Grid>
                ))}
            </Grid>
     
            <Modal open={selectedProject !== null} onClose={handleCloseModal}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: darkMode ? 'black' : 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    {selectedProject && (
                        <div>
                            <img src={selectedProject.image} alt="project preview"  />
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <p>Année: {selectedProject.year}</p>
                            <p>Mission: {selectedProject.mission}</p>
                            <p>Projet réalisé:{selectedProject.projectDescription}</p>
                            <p>Technologies utilisées: {selectedProject.technologiesUsed}</p>
                            <Button onClick={handleCloseModal}>Fermer</Button>
                        </div>
                    )}
                </Box>
            </Modal>

        </Box>
    );
}