import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import ThumbUPAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import { useDispatch } from "react-redux";
import { sendPostReaction } from "./postSlice";

function PostReaction({ post }) {
  const dispatch = useDispatch();

  const handleClick = (emoji) => {
    dispatch(sendPostReaction({ postId: post._id, emoji }));
  };
  return (
    <Stack direction="row" alignItems="center">
      <IconButton onClick={() => handleClick("like")}>
        <ThumbUPAltRoundedIcon sx={{ fontSize: 20, coplor: "primary.main" }} />
      </IconButton>
      <Typography variant="h6" mr={1}>
        {post?.reaction?.like}
      </Typography>

      <IconButton onClick={() => handleClick("dislike")}>
        <ThumbDownAltRoundedIcon sx={{ fontSize: 20, color: "error.main" }} />
      </IconButton>
      <Typography variant="h6">{post?.reaction?.dislike}</Typography>
    </Stack>
  );
}

export default PostReaction;
