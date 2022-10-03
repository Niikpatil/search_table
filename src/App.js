import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./components/DataList/UserList";
import UserDetail from "./components/UserDetail";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">Search Table</header>
      <div className="d-flex flex-row justify-content-between">
        <div className="p-2 col-5">
          <div className="d-flex flex-row justify-content-between">
            Find Detail
            <input type="text" placeholder="Search" />
          </div>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <UserList />
          </table>
        </div>
        <div className="p-2 col-5">
          <UserDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
