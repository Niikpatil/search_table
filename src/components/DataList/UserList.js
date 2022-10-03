import React from "react";

const UserList = ({
  itemList: { id, title, completed, userId },
  fetchData,
}) => {
  const status = completed === true ? "Complete" : "Incomplete";

  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{status}</td>
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
