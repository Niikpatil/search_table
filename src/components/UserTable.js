import React from "react";
import UserList from "./DataList/UserList";
import UserDetail from "./UserDetail";

const UserTable = () => {
  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">Search Table</header>
      <div class="d-flex flex-row justify-content-between">
        <div class="p-2 col-5">
          <div class="d-flex flex-row justify-content-between">
            <h5>Find item</h5>

            <input type="text" placeholder="Search" />
          </div>
          <UserList />
        </div>
        <div class="p-2 col-5">
          <UserDetail />
        </div>
      </div>
    </div>
  );
};

export default UserTable;
