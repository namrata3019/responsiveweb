import React, { useState } from "react";
import Replies from "./Replies";
import deleteIcon from "./images/icon-delete.svg"
import editIcon from "./images/icon-edit.svg"
import replyIcon from "./images/icon-reply.svg"

const Comments = ({
  comment,
  currentUser,
  // onCommentEditHandler,
  // onCommentDeleteHandler,
}) => {
  const [contentValue, setContentValue] = useState("Namrata");
  const [replies, setReplies] = useState(comment.replies);
  const [showReply, setShowReply] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditId, setIsEditId] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const [deleteId, setDeleteId] = useState(null);
  const [btnUpDisabled, setBtnUpDisabled] = useState(false);
  const [btnDownDisabled, setBtnDownDisabled] = useState(false);
  let [score, setScore] = useState(comment.score);

  const onClickReplyHandler = (id) => {
    setShowReply(true);
  };

  const onClickSendHandler = (id, commentSelected) => {
    //remove the showreply false
    let newReply = {
      content: `${contentValue}`,
      createdAt: new Date().toISOString(),
      
        
        username: localStorage.getItem("user"),
    };
    if (!contentValue) {
      return;
    }

    if (!isEditing) {
      //Add it to the reply of corresponding comment to the replies array
      setReplies([...commentSelected.replies, newReply]);
      setShowReply(false);
      setIsEditing(false);
    }
    if (isEditing) {
      setShowReply(true);
      setIsEditing(true);
      setReplies(
        replies.map((item) => {
          if (item.id === isEditId) {
            return { ...item, content: contentValue };
          }
          return item;
        })
      );
      setShowReply(false);
      setIsEditing(false);
    }
  };
  const onEditHandler = (id) => {
    console.log("item to be edited", id, comment.id);
    //isEditing true
    const specificItem = replies.find((item) => item.id === id);
    setIsEditing(true);
    setIsEditId(id);
    setContentValue(specificItem.content);
    setShowReply(true);
  };

  // const onDeleteHandler = (id) => {
  //   console.log("id to be deleted,", id);
  //   setShowModal(true);
  //   setDeleteId(id);
  // };

  // const onClickModalDelete = () => {
  //   const filteredComments = replies.filter((item) => item.id !== deleteId);
  //   console.log(filteredComments);
  //   setReplies([...filteredComments]);
  //   setShowModal(false);
  //   setDeleteId(null);
  // };

  const onClickModalCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="comments" key={comment.id}>
        <div className="user__profile">
          <div className="user__info">
            <div className="user-details">
              <h4>{comment.username}</h4>
            
              {/* {currentUser.username === comment.username && (
                <h4 className="you-text">You</h4>
              )} */}
              <p>{comment.createdAt}</p>
            </div>
            <div className="user__btns">
              {currentUser=== comment.username ? (
                <div className="change-btns">
                  {/* <span onClick={() => onCommentDeleteHandler(comment.id)}>
                    <img src={deleteIcon} alt="icon-delete" />{" "}
                    Delete
                  </span> */}
                  {/* <span onClick={() => onCommentEditHandler(comment.id)}>
                    <img src={editIcon} alt="icon-edit" /> Edit
                  </span> */}
                </div>
              ) : (
                <div
                  className="reply"
                  onClick={() => {
                    onClickReplyHandler(comment.id);
                  }}
                >
                  <img
                    className="reply-icon"
                    src={replyIcon}
                    alt="icon-reply"
                  />
                  <h5>Reply</h5>
                </div>
              )}
            </div>
          </div>
          <div className="user__desc">
            <p>{comment.content}</p>
          </div>
        </div>
      </div>
      {showReply && (
        <div className="type__comments">
          <textarea
            name="comments"
            id="comments"
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
          >{`@${comment.username}`}</textarea>
          <button
            className="btn btn-send"
            onClick={() => onClickSendHandler(comment.id, comment)}
          >
            {isEditing ? "UPDATE" : "SEND"}
          </button>
        </div>
      )}

      {replies.length > 0 && (
        <div className="reply__wrapper">
          {replies.map((reply) => {
            return (
              <Replies
                reply={reply}
                key={reply.id}
                currentUser={currentUser}
                // onEditHandler={onEditHandler}
                // onDeleteHandler={onDeleteHandler}
                replies={replies}
                setReplies={setReplies}
                showModal={showModal}
                // onClickModalDelete={onClickModalDelete}
                // onClickModalCancel={onClickModalCancel}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comments;
