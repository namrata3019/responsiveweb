import React, { useState } from "react";
import { useEffect } from "react";
import Comments from "./Comments";
import data from "./data.json";
import Modal from "./Modal";
import {
  fetchAllComment,
  postComment,
  replyComment,
} from "../Service/QnAServices";
import replyIcon from "./images/icon-reply.svg";
import Avatar from "react-avatar";
import { Button } from "bootstrap";
import {MdArrowDropDownCircle} from 'react-icons/md';
import moment from 'moment';

const QNA = ({ contentId }) => {
  const [comments, setComments] = useState([]);
  const [counter, setCounter] = useState(0);
  const [userReplies, setUserReplies] = useState([]);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("user"));
  const [replies, setReplies] = useState(" ");
  const [contentValue, setContentValue] = useState("");
  const [replyValue, setReplyValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditId, setIsEditId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showReply, setShowReply] = useState({id:null,state:false});
  const [showReplies, setShowReplies] = useState({id:null,state:false});

  // fetchAllComment(1).then((res)=>{
  //     console.log(res.data.slice().reverse());
  //    setComments(res.data.slice().reverse());
  //         });

  useEffect(() => {
    if (comments.length == 0 && counter < 4) {
      
      fetchAllComment(contentId).then((res) => {
        console.log(res.data)
        console.log(res.data.slice().reverse());
        setComments(res.data.slice().reverse());
        setCounter(counter+1);
      });
    }
  }, [comments, contentId]);

  //   useEffect(() => {
  // console.log(comments);
  //   }, [comments]);

  const onClickSendHandler = () => {
    console.log(contentValue);
    //remove the showreply false and showerplyid null
    let newComment = {
      // id: new Date().getTime().toString(),

      question: `${contentValue}`,

      courseId: contentId,
      username: localStorage.getItem("user"),

      replies: [],
    };
    if (!contentValue) {
      return;
    }

    postComment(newComment)
      .then((res) => {
        console.log(res);
        fetchAllComment(contentId).then((res) => {
          console.log("moPOst",res.data)
          setComments(res.data.slice().reverse());

        }).catch(e => console.error(e)) 
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(
      () =>
        fetchAllComment(contentId).then((res) => {
          console.log(res.data.slice().reverse());
          setComments(res.data.slice().reverse());
        }),
      100
    );
    setContentValue("");
  };
  const onClickReplyHandler = (id) => {
    {showReply.state?setShowReply({id:id,state:false}):setShowReply({id:id,state:true})}
  };
  const onClickRepliesHandler = (id) => {
    {showReplies.state?setShowReplies({id:id,state:false}):setShowReplies({id:id,state:true})}
  };
  const onClickSendReplyHandler = (commentId) => {
    let reply = {
      username: localStorage.getItem("user"),
      reply: `${replyValue}`,
    };
    replyComment(commentId, reply)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(
      () =>
        fetchAllComment(contentId).then((res) => {
          console.log(res.data.slice().reverse());
          setComments(res.data.slice().reverse());
        }),
      100
    );
    setReplyValue("");
    setShowReply({id:null,state:false});
  };

  return (
    <>
     <div className="comments__wrapper">
        <div className="type__comments">
          <Avatar name={currentUser} round={true} size="50px" color="pink" />
          {" ."}{" "}
          <textarea
            name=""
            id=""
            placeholder="Add a comment"
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
          ></textarea>
          <button className="btn btn-send" onClick={() => onClickSendHandler()}>
            SEND
          </button>
        </div>
        {comments.map((comment) => {
          return (
            <>
              <div className="comments" key={comment.id}>
                <div className="user__profile">
                  <div className="user__info">
                    <div className="user-details">
                      <h4>
                        {" "}
                        {comment.username == currentUser ? (
                          <>
                            <Avatar
                              name={currentUser}
                              round={true}
                              size="50px"
                              color="pink"
                            />{" "}
                            You
                          </>
                        ) : (
                          <>
                            <Avatar
                              name={comment.username}
                              round={true}
                              size="50px"
                              color="blue"
                            />{" "}
                            {comment.username}
                          </>
                        )}
                      </h4>
                      <p>{moment(comment.dateofComment).fromNow()}</p>
                    </div>
                    <div className="user__btns">
                      <div
                        className="reply"
                        onClick={() => {
                          onClickReplyHandler(comment.commentId);
                        }}
                      >
                        {" "}
                        <img
                          className="reply-icon"
                          src={replyIcon}
                          alt="icon-reply"
                        />
                        <h5>Reply</h5>
                      </div>
                    </div>
                  </div>
                  <div className="user__desc">
                    <p>{comment.question}</p>
                  </div>
                </div>
              </div>
              <div className="comments">
                <div className="reply__wrapper">
                  {
                    showReply.state && showReply.id==comment.commentId?
                  <div className="type__comments">
                    <Avatar
                      name={currentUser}
                      round={true}
                      size="50px"
                      color="pink"
                    />
                    {" ."}{" "}
                    <textarea
                      name=""
                      id=""
                      placeholder="Add a reply"
                      value={replyValue}
                      onChange={(e) => setReplyValue(e.target.value)}
                    ></textarea>
                    <button
                    className="btn btn-send"
                    onClick={() => onClickSendReplyHandler(comment.commentId)}
                  >
                    Reply
                  </button>
                  </div>
                  :null
                  
                  }
                  
                  
                </div>
              </div>
              <div style={{"textAlign":"center"}}>
                <MdArrowDropDownCircle style={{"color":"#5824d4"}}/>
              <button style={{"all":"unset","cursor": "pointer","color":"#5824d4", "position": "relative"}}
                        onClick={() => {
                          onClickRepliesHandler(comment.commentId);
                        }}>show Replies</button>
                        </div>
              {showReplies.state && showReplies.id==comment.commentId?
              <>
              {comment.replies
                .slice()
                .reverse()
                .map((reply) => {
                  return (
                    <div className="comments">
                      <div className="reply__wrapper">
                        <div className="user-details">
                          <h4>
                            {" "}
                            {reply.username == currentUser ? (
                              <>
                                <Avatar
                                  name={currentUser}
                                  round={true}
                                  size="50px"
                                  color="pink"
                                />{" "}
                                You
                              </>
                            ) : (
                              <>
                                <Avatar
                                  name={reply.username}
                                  round={true}
                                  size="50px"
                                  color="blue"
                                />{" "}
                                {reply.username}
                              </>
                            )}
                          </h4>
                          <p>{moment(comment.dateofComment).fromNow()}</p>
                        </div>
                        <div className="user__desc"><p>{reply.reply}</p></div>
                      </div>
                    </div>
                  );
                })}
                </>
                :null}
            </>
          );
        })}
      </div>
      {showModal && (
        <Modal
        // onClickModalDelete={onClickModalDelete}
        // onClickModalCancel={onClickModalCancel}
        />
      )}
    </>
  );
};

export default QNA;
