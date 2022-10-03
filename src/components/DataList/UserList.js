import React from "react";

const UserList = ({
  itemList: { id, title, completed, userId },
  fetchData,
}) => {
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{completed === true ? "Complete" : "Incomplete"}</td>
        <td>
          <button
            type="button"
            onClick={() => fetchData(userId)}
            // onClick={() => console.log(fetchData(id))}
            className="btn btn-sm btn-warning"
          >
            View
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserList;
