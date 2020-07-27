import React, { useState, useEffect } from "react";

const List = () => {
  const url = "https://private-9d65b3-tinnova.apiary-mock.com/users";

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch(url, {
        method: "GET",
      });
      setUser(await result.json());
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>teste tinnova</h2>
      <div>Listagem:</div>
      {console.log(user)}
      <div>
        {user?.map(({ name, email, cpf, phone }) => (
          <div style={{ border: "1px solid black" }}>
            <p>nome:{name}</p>
            <p>email:{email}</p>
            <p>cpf:{cpf}</p>
            <p>phone:{phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
