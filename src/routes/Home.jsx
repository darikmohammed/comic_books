import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetDisney from '../Redux/Disney/GetDisney';

function Home() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.Disney.characters);
  useEffect(() => {
    dispatch(GetDisney());
  }, []);
  console.log('Home: ', result);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home;
