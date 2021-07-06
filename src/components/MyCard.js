import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "rgb(244,244,244)",
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

export default function MyCard({ post }) {
  const classes = useStyles();
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [userPic, setUserPic] = useState(PF);

  useEffect(() => {
    const getPic = async () => {
      const res = await axios.get("/user/" + post.userId);
      setUserPic(PF + res.data.profilePicture);
    };
    getPic();
  }, []);
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={user?.profilePicture && userPic}
            aria-label="recipe"
            className={classes.avatar}
          />
        }
        action={
          <IconButton aria-label="settings">
            <Link to={`/viewblog/${post._id}`}>
              <MoreVertIcon />
            </Link>
          </IconButton>
        }
        title={post.username}
        subheader={new Date(post.createdAt).toDateString()}
      />
      {post.photo && (
        <CardMedia
          className={classes.media}
          image={PF + post.photo}
          title="Paella dish"
        />
      )}

      <CardContent>
        <Typography variant="h5" color="textPrimary">
          Title : {post.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          {post.desc.substring(0, 105) + "....."} <br />
          {post.desc.length > 105 && (
            <Link to={`/viewblog/${post._id}`}>View More</Link>
          )}
        </Typography>
        {post.categories.map((c) => (
          <>
            <span>#</span>
            <span style={{ margin: "0 10px" }}>{c}</span>
          </>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
