import React, { useState } from "react";
import IconLink from "./IconLink";
import { Box, Modal, Button, Grid } from "@mui/material";
import Style from "./modal.module.scss";
import { info } from "../../info/Info";

function PortfolioBlock(props) {
      const { image, live, source, title, year, mission, projectDescription, technologiesUsed, darkMode } = props;
      const [openModal, setOpenModal] = useState(false);

      const handleOpenModal = () => {
            setOpenModal(true);
      };

      const handleCloseModal = () => {
            setOpenModal(false);
      };

      return (
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                  <Box component={"img"} src={image} alt={"mockup"} onClick={handleOpenModal} style={{ cursor: "pointer" }} />
                  <h1 style={{ fontSize: "2rem" }}>{title}</h1>
                  <Box
                        className={"portfolio"}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"0.5rem"}
                        alignItems={"center"}
                        fontSize={"1.5rem"}
                        py={"2rem"}>
                        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
                              <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
                        </Box>
                        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
                              <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
                        </Box>
                  </Box>

                  <Button className={Style.knowMore} sx={{ borderImageSource: info.gradient }} onClick={handleOpenModal}>
                        En savoir plus
                  </Button>
                  <Modal open={openModal} onClose={handleCloseModal}>
                        <Box
                              className={Style.modal}
                              sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    bgcolor: darkMode ? "black" : "background.paper",
                                    border: "2px solid #000",
                                    boxShadow: 24,
                                    p: 4,
                              }}>
                              <img src={image} alt={title} style={{ width: "100%", marginBottom: "1rem" }} />
                              <h2 className={Style.margin}>{title}</h2>
                              <p className={Style.margin}>
                                    <strong>Année : </strong> {year}
                              </p>
                              <p className={Style.margin}>
                                    <strong>Mission : </strong>
                                    {mission}
                              </p>
                              <p className={Style.margin}>
                                    <strong>Projet réalisé : </strong> {projectDescription}
                              </p>
                              <p className={Style.margin}>
                                    <strong>Technologies utilisées : </strong> {technologiesUsed}
                              </p>
                              <Grid className={Style.marginTop} container spacing={2}>
                                    <Grid item xs={6}>
                                          <Button
                                                className={Style.button}
                                                fullWidth
                                                variant="outlined"
                                                href={live}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                Live Demo
                                          </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                          <Button
                                                className={Style.button}
                                                fullWidth
                                                variant="outlined"
                                                href={source}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                Source Code
                                          </Button>
                                    </Grid>
                              </Grid>
                              <Button className={Style.closeButton} onClick={handleCloseModal}>
                                    Fermer
                              </Button>
                        </Box>
                  </Modal>
            </Box>
      );
}

export default PortfolioBlock;
