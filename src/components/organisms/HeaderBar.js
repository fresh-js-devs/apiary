import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import MoreIcon from "@material-ui/icons/Info";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "750px",
    margin: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <LocalBarIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cocktails by your wish
          </Typography>
          <IconButton
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            aria-describedby={id}
            onClick={handleClick}
          >
            <MoreIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              Find your favourite Cocktails online
            </Typography>
          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  );
}
