import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    footer: {
    //   backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing.unit * 8,
      padding: `${theme.spacing.unit * 6}px 0`,
      backgroundColor: "#424242",
      color: "#fff"
    },
    typo: {
      color: "white"
    }
  });

const Footer = (props) => {
    const { classes } = props;
    return (
    <footer className={classes.footer}>
        {/* <Typography className={classes.typo} variant="h6" align="center" gutterBottom>
        </Typography> */}
        <Typography className={classes.typo} variant="subtitle1" align="center" color="textSecondary" component="p">
        Content without the noise ©
        </Typography>
      </footer>
    )
}

export default withStyles(styles)(Footer);