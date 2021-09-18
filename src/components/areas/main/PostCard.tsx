import React, { FC } from "react";
import "./PostCard.css";
import Post from "../../../models/Post";
import { Link, useHistory } from "react-router-dom";
import { faEye, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  const onClickShowPost = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push("/post/" + post.id);
  };

  const getResponses = (post: Post) => {
    if (width <= 768) {
      return (
        <label
          style={{
            marginRight: ".5em",
          }}
        >
          {post && post.postItems && post.postItems.length}
          <FontAwesomeIcon
            icon={faReplyAll}
            className="points-icon"
            style={{
              marginLeft: ".25em",
              marginTop: "-.25em",
            }}
          />
        </label>
      );
    }
    return null;
  };

  return (
    <section className="panel postcard-container">
      <div className="postcard-txt-container">
        <div className="content-header">
          <span className="username-header" style={{ marginLeft: ".5em" }}>
            {post.userName}
          </span>
        </div>
        <div className="question">
          <div
            onClick={onClickShowPost}
            data-post-id={post.id}
            style={{ marginBottom: ".4em" }}
          >
            <strong>{post.title}</strong>
          </div>
          <div
            className="postcard-body"
            onClick={onClickShowPost}
            data-post-id={post.id}
          >
            <div>{post.body}</div>
          </div>
          <div className="postcard-footer">
            <span
              style={{
                marginRight: ".5em",
              }}
            >
              <label>
                {post.views}
                <FontAwesomeIcon icon={faEye} className="icon-lg" />
              </label>
            </span>
            <span>{getResponses(post)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
