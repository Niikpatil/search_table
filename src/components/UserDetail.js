import React from "react";

const UserDetail = ({ userInfo }) => {
  return (
    <div>
      <div className="card text-bg-light mb-3">
        <div className="card-header">
          <h5>Light card title</h5>
        </div>
        <div className="card-body">
          <div className="card-body">
            <p className="card-text">User Name : {userInfo.email}</p>
            <p className="card-text">ToDo UserName : {userInfo.name}</p>
            <p className="card-text">Website : {userInfo.website}</p>
            <p className="card-text">Phone : {userInfo.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
