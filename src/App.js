import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import UserList from "./components/DataList/UserList";
import UserDetail from "./components/UserDetail";

function App() {
  const [data, setData] = useState([]);
  const [idClick, setIdClick] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchData = (idClick) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${idClick}`)
      .then((response) => response.json())
      .then((data) => {
        setIdClick(data);
        console.log(data);
      });
  };

  const dataList = data.map((dList) => (
    <UserList itemList={dList} key={dList.id} fetchData={fetchData} />
  ));

  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">Search Table</header>
      <div className="d-flex flex-row justify-content-between">
        <div className="p-2 col-5">
          <div className="d-flex flex-row justify-content-between">
            Find Detail
            <input type="text" placeholder="Search" />
          </div>
          <DataTable>{dataList}</DataTable>
        </div>
        <div className="p-2 col-5">
          <UserDetail userInfo={idClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
