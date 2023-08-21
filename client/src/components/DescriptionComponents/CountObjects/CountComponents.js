import React, { useState, useEffect } from 'react';

const CountObjects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const objectCount = Object.keys(data).length;
  console.log(objectCount);

  console.log(CountObjects);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}board?page=1&size=10`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        setData(result.data); // 'data' 필드의 내용을 상태에 저장
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return <div>{data?.length}</div>;
};

export default CountObjects;
