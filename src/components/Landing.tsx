import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import axios from 'axios'
import { landingStyles } from "./LandingStyles";

const Landing = (): JSX.Element => {

    // TODO: Create custom hook to handle error, loading, data
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const styles = landingStyles();

    return (
        <div className={styles.root}>
            <Typography variant="h1" className={styles.title}>
                Landing Page
          </Typography>
        </div>
    );
};

export default Landing;