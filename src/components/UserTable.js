import React from "react";
import UserList from "./DataList/UserList";
import UserDetail from "./UserDetail";

const UserTable = () => {
  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">Search Table</header>
      <div class="d-flex flex-row justify-content-between">
        <div class="p-2 col-4">
          <UserList />
        </div>
        <div class="p-2 col-6">
          <UserDetail />
        </div>
      </div>
    </div>
  );
};

export default UserTable;
