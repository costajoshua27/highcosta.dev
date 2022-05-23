import { AccountCircle, ExpandMoreOutlined, NearMe, ThumbUp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';


export default function Post({
  profilePic,
  image,
  username,
  timestamp,
  message
} : {
  profilePic?: string,
  image?: string,
  username: string,
  timestamp?: Date,
  message: string
}) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar 
          className="post__avatar"
        />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>Timestamp...</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      {
        image && 
        <div className="post__image">
          <img src={image} alt="" />
        </div>
      }
      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};