import React from "react";

const UserList = ({ itemList }) => {
  let status;

  if (itemList.completed == true) {
    status = "true";
  } else {
    status = "False";
  }

  return (
    <tbody>
      <tr>
        <td>{itemList.id}</td>
        <td>{itemList.title}</td>
        <td>{status}</td>
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
