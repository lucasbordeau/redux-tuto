import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ReactComponent as GitHubIcon } from '../../assets/icons/github-icon.svg'
import { links } from "../../config/links"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  githubIcon: {
    minWidth: 30, 
    padding: 5
  }
}));

function CustomAppBar() {
  const classes = useStyles();

  const handleGithubClick = () => {
    window.open(links.github, '_blank');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button edge="start" color="inherit" onClick={handleGithubClick}>
            <GitHubIcon fill={"#FFFFFF"} className={classes.githubIcon}/>
          </Button>
          <Typography variant="h6" className={classes.title}>
            Todoify
          </Typography>
          <Button color="inherit" onClick={handleGithubClick}>
            <GitHubIcon fill={"#FFFFFF"} style={{ minWidth: 30, padding: 5 }}/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CustomAppBar;