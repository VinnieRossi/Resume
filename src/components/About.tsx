import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import axios from 'axios'
import { landingStyles } from "./LandingStyles";

const About = (): JSX.Element => {

    const styles = landingStyles();

    return (
        <div className={styles.root}>
            <Typography variant="h1" className={styles.title}>
                About Page
          </Typography>
        </div>
    );
};

export default About;