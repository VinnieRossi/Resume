import React from "react";
import { Typography } from "@material-ui/core";
import { landingStyles } from "./LandingStyles";

const Landing = (): JSX.Element => {

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