import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Comment from "./comment";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Disqus from "disqus-react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({
  post_id,
  title,
  post,
  user_id,
  timestamp,
  image,
  votes,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = (id) => {
    if (id === post_id)
      setExpanded({
        ...expanded,
        [post_id]: !expanded[post_id],
      });
  };
  const disqusShortname = "the-unillege"
  const disqusConfig = {
    url: "http://localhost:8000/",
    identifier: {post_id},
    title: {title}
  }  
  return (
    <Card className={classes.root} id={post_id}>
      <CardHeader
        avatar={
          <Avatar aria-label="header" className={classes.avatar}>
            <p style={{color:'black'}}>{user_id.substr(0, 1).toUpperCase()}</p>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user_id}
        subheader={timestamp}
      />
      {image !== "" ? (
        <CardMedia className={classes.media} image={image} title="content" />
      ) : (
        <p>&nbsp;</p>
      )}

      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          <h4>{title}</h4>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        Have Something to say? Why not Discuss at Discussions!!
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded[post_id],
          })}
          onClick={() => handleExpandClick(post_id)}
          aria-expanded={expanded[post_id]}
          aria-label="Load comments"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded[post_id]} timeout="auto" unmountOnExit>
        <CardContent>
        <Disqus.DiscussionEmbed
        shortname={disqusShortname}
       config={disqusConfig}
   />
        
      </CardContent>
      </Collapse>
    </Card>
  );
}
