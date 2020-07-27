import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Creators as UserCreators } from '../../ducks/store/user';

const List = () => {
  const dispatch = useDispatch();
  const getAllUser = useSelector(state => state.user.payload);
  
  useEffect(() => {
    dispatch(UserCreators.fetchUser())
  }, [])

  return (
    <div>
      <h2>teste tinnova</h2>
      <div>Listagem:</div>
      <div>
        {getAllUser?.data?.map(({ name, email, cpf, phone }) => (
          <div key={cpf} style={{ border: "1px solid black" }}>
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
