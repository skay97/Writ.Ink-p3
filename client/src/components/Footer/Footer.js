import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
//import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
//import styles from './style.css';


// const styles = theme => ({
//   footer: {
//   //   backgroundColor: theme.palette.background.paper,
//     // marginTop: theme.spacing.unit * 8,
//     padding: `${theme.spacing.unit * 6}px 0`,
//     backgroundColor: "#424242",
//     color: "#fff",
//     position: "relative",
//     bottom: 0,
//     width: "100%",
//     /* Set the fixed height of the footer here */
//     height: "60px",
//     lineHeight: "60px", /* Vertically center the text there */
//   },
//   typo: {
//     color: "white"
//   }
// });


const Footer = () => {
    //const { classes } = props;
    return (
    <React.Fragment><CssBaseline/>
    <footer style={{flexShrink: 0}}>
        {/* <Typography className={classes.typo} variant="h6" align="center" gutterBottom>
        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Content without the noise ©
        </Typography>
      </footer>
    </React.Fragment>
    )
}

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

//export default withStyles(styles)(Footer);
export default Footer;