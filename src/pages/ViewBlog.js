import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

function ViewBlog() {
  return (
    <div className="container">
      <h2>Title : Rndomm hahadhasgdf</h2>
      <img src="https://picsum.photos/id/237/536/354" alt="" />
      <div>Tags : cats , dogs , cows</div>
      <div className="flex">
        <h3>Created By : username</h3>
        <div className="float-end">
          <div>Created At : 12:20:30am</div>
          <div>Updated At : 12:00:20pm</div>
        </div>
      </div>
      <h5>
        Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptatibus corporis rem natus veritatis quo vitae nobis quos nostrum
        tempora maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita molestias distinctio nemo exercitationem quidem, porro esse
        similique nulla dolorum culpa fugit doloremque vel veniam ducimus ipsa
        rerum, reprehenderit sit explicabo.
      </h5>
      <IconButton>
        <EditIcon color="primary" />
      </IconButton>
      <IconButton>
        <DeleteIcon color="secondary" />
      </IconButton>
    </div>
  );
}

export default ViewBlog;
