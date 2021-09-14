import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "#ceeaf5",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation
      with="auto"
      style={{ background: "#3f51b5", marginTop: "20rem" }}
    >
      <a href="https://github.com/abanae" target="_blank" rel="noreferrer">
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<GitHubIcon />}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ana-abad-41b120183/"
        target="_blank"
        rel="noreferrer"
      >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<LinkedInIcon />}
        />
      </a>
    </BottomNavigation>
  );
};

export default Footer;
