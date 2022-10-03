import React from "react";

const UserList = ({ itemList }) => {
  return (
    <tbody>
      <tr>
        <td>{itemList.id}</td>
        <td>{itemList.title}</td>
        <td>{itemList.id}</td>
        <td>
          <button type="button" className="btn btn-sm btn-warning">
            View
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserList;
