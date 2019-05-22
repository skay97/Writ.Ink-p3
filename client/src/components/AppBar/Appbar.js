import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyJwt, signoutUser } from '../../actions';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPenNib } from '@fortawesome/free-solid-svg-icons';


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  buttonClass: {
    '&:hover': {
      color: 'red',
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  headingTitle:{
    // display: 'none',
    fontSize:"x-large",
    color:"#fff",
    fontSize:23,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
  }
},
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: 'white'
  },
  circle: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    backgroundColor: "red"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});


class Header extends React.Component {

  componentWillMount() {
    if (this.props.authenticated && !this.props.user) {
      this.props.verifyJwt();  // fetch username
    }
  }

  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };


  render() {
    if (this.props.authenticated) {
      const { anchorEl, mobileMoreAnchorEl } = this.state;
      const { classes } = this.props;
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

      library.add([faPenNib]);

      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuClose}><a href="/profile" style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}>User Profile</a></MenuItem>
          <MenuItem onClick={this.handleMenuClose}><a href="/settings" style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}>My Account</a></MenuItem>
          <MenuItem onClick={this.handleMenuClose}><a href="/" onClick={this.props.signoutUser} style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}>Sign Out</a></MenuItem>
        </Menu>
      );

      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMenuClose}
        >
          {/* <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            Notifications
        </MenuItem> */}
          <MenuItem onClick={this.handleProfileMenuOpen}>
            <Typography variant="h6" noWrap>{this.props.id}</Typography>
            <IconButton
              aria-owns={isMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            Hello
        </MenuItem>
          <MenuItem onClick={this.handleMenuClose}><a href="/settings" style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}>My Account</a></MenuItem>
          <MenuItem onClick={this.handleMenuClose}><a href="/" onClick={this.props.signoutUser} style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}>Sign Out</a></MenuItem>
        </Menu>
      );

      return (
        <React.Fragment>
          <AppBar style={{ backgroundColor: "#424242" }} position="static">
            <Toolbar>
              <Button color="inherit" href="/">
                <Typography className={classes.headingTitle} variant="h6" noWrap>
                  Writ<span style={{ color: 'red' }}>•</span>ink
            </Typography>
              </Button>
              <Button color="inherit" href="/posts">
                <Typography className={classes.title} variant="h6" noWrap>
                  Discover
            </Typography>
              </Button>
              <Button color="inherit" href="/subcriptions">
                <Typography className={classes.title} variant="h6" noWrap>
                  Subscriptions
            </Typography>
              </Button>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                {/* <IconButton color="inherit">
                  <Badge badgeContent={12} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton> */}

                <IconButton >
                  <a href="/posts/new" > <FontAwesomeIcon style={{ color: "#fff" }} icon="pen-nib" /> </a>
                </IconButton>
                <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
                
              <div className={classes.sectionMobile}>

                <IconButton >
                  <a href="/posts/new" > <FontAwesomeIcon style={{ color: "#fff" }} icon="pen-nib" /> </a>
                </IconButton>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
        </React.Fragment>
      );
    } else {
      const { mobileMoreAnchorEl } = this.state;
      const { classes } = this.props;
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuClose}><a href="/signup" style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}>Register</a></MenuItem>
          <MenuItem onClick={this.handleMenuClose}><a href="/signin" style={{ color: "rgba(0, 0, 0, 0.87)", textDecoration: "none" }}>Sign In</a></MenuItem>
        </Menu>
      );

      return (
        <React.Fragment>
          <AppBar style={{ backgroundColor: "#424242" }} position="static">
            <Toolbar>
              <Button color="inherit" href="/">
                <Typography className={classes.title} variant="h6" noWrap>
                  Writ<span style={{ color: 'red' }}>•</span>ink
            </Typography>
              </Button>
              <Button color="inherit" href="/posts">
                <Typography className={classes.title} variant="h6" noWrap>
                  Discover
            </Typography>
              </Button>
              {/* <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div> */}
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button color="inherit" href="/signup" className={classes.buttonClass}>Register</Button>
                <Button color="inherit" href="/signin" className={classes.buttonClass}>Signin</Button>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </React.Fragment>
      );
    }
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    username: state.auth.username,
  };
}

export default connect(mapStateToProps, { verifyJwt, signoutUser })(withStyles(styles)(Header));


