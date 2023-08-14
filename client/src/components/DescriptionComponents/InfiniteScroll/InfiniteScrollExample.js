import React, { useState, useEffect } from 'react';

const InfiniteScrollExample = () => {
  const [data, setData] = useState(Array.from({ length: 20 }));
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const newData = Array.from({ length: 20 });
    setData((prev) => [...prev, ...newData]);
  }, [page]);

  return (
    <div>
      {data.map((_, index) => (
        <div
          key={index}
          style={{ height: 150, border: '1px solid black', margin: 10 }}
        >
          Item {index + 1}
        </div>
      ))}
    </div>
  );
};

export default InfiniteScrollExample;
