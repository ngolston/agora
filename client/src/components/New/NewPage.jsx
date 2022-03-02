import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "../Main/MainPage"
import CommentPage from "../Comment/CommentPage";
import CommentModal from "../Comment/CommentModal";

export default function RoutingSwitch() {

  const [postOpen, setPostOpen] = useState(false);


  let location = useLocation();
  let commentId = null;

  if (location.state && location.state.commentId) {
    location.pathname = '/';
    if (postOpen) {
      commentId = location.state.commentId;
    } else {
      location.state.commentId = null;
    }

  }

  useEffect(() => {
    setPostOpen(true);
  }, [commentId]);

  useEffect(() => {
    commentId = null;
  }, [postOpen]);

  return (
    <div>
      {commentId && (
        <div>
          <CommentModal
            id={commentId}
            open={postOpen}
            onClickOut={() => setPostOpen(false)} />
        </div>
      )}
      <Switch location={location}>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/comments/:id" component={CommentPage} />
      </Switch>
    </div>
  );
}

