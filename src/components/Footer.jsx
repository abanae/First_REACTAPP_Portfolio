import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
    
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "#ceeaf5",
        fontSize: "2rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation
      with="auto"
      style={{ background: "#3f51b5"}}
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
      <a href="mailto:aabad0464@gmail.com" >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<MailIcon/>}
        />
      </a>
    </BottomNavigation>
  );
};

export default Footer;
