import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { fetchPosts } from '../../actions/index';
// import Card from "../Card/Card";
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    minWidth: 275,
    textAlign: "left",
    marginTop: 20,
    backgroundColor: "#A9A9A9",
    color: "white"

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    color: "blue"
  },
  title: {
    fontSize: "6vh",
    color: "#ffff",
    margin: 0
  },
  button: {
    display: "flex",
    color: "blue",
    justifyContent: "flex-start",
  },
  pos: {
    marginBottom: 12,
    color: "white"

  },
  desc: {
    fontSize: "1.05rem",
    color: "#fff"
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  chip: {
    margin: theme.spacing.unit
  }
});

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderTags(tags) {
    const { classes } = this.props;
    return tags.map(tag => {
      // return <span className="badge badge-info span-with-margin" key={tag}>{tag}</span>;
      return <Chip style={{ height: 25, width: 100, fontSize: 18, backgroundColor: "#3d566e" }}
        label={tag}
        clickable
        className={classes.chip}
        color="primary"
      />
    });
  }

  renderPostSummary(post) {
    const { classes } = this.props;
    return (
      // <Grid key={post._id}> replace div with grid like this
      <Grid
        key={post._id}
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        <Grid item xs={12} sm={10}>
        <Card style={{ height: 400}} className={classes.card}>
          <CardContent>
            <Avatar alt="Remy Sharp" src="http://www.iconninja.com/files/627/232/1000/male-person-geek-man-avatar-user-icon.svg" className={classes.bigAvatar} />
            <Typography style={{}} className={classes.title} color="textSecondary" gutterBottom>
              <Link style={{color:"#fff", textDecoration:"none"}} className="link-without-underline" to={`/posts/${post._id}`}>{post.title}</Link> - {post.authorName}
            </Typography>
            {this.renderTags(post.categories)}
            <Typography className={classes.desc} component="p">
              <br />
              <div style={{width: "100%"}} dangerouslySetInnerHTML={{ __html: post.content }} />
              {/* {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} */}
            </Typography>
          </CardContent>
          <CardActions className={classes.button} >
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
      </Grid>
    );
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div style={{textAlign: "center"}}className="post">
        <Link className="btn btn-primary mb-5" to={'/posts/new'}>Publish A New Post</Link>
        {_.map(this.props.posts, post => {
          return this.renderPostSummary(post);
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// export default connect(mapStateToProps, { fetchPosts })(PostList);
// export default withStyles(styles)(SimpleCard);
PostList.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default connect(mapStateToProps, { fetchPosts })(PostList)(withStyles(styles)(PostList));
export default compose(
  withStyles(styles, { name: 'Postlist' }),
  connect(mapStateToProps, { fetchPosts })
)(PostList);
