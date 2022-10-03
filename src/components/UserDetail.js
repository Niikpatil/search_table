import React from "react";

const UserDetail = ({ userInfo: { email, name, website, phone } }) => {
  return (
    <div>
      <div className="card text-bg-light mb-3">
        <div className="card-header">
          <h5>Light card title</h5>
        </div>
        <div className="card-body">
          <div className="card-body">
            <p className="card-text">User Name : {email}</p>
            <p className="card-text">ToDo UserName : {name}</p>
            <p className="card-text">Website : {website}</p>
            <p className="card-text">Phone : {phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
