import React from 'react';
import SearchBox from 'react-search-box';

const MyComponent = () => {
  const data = [
    {
      key: 'apple',
      value: 'Apple',
    },
    {
      key: 'banana',
      value: 'Banana',
    },
    {
      key: 'cherry',
      value: 'Cherry',
    },
  ];

  return (
    <SearchBox
      data={data}
      placeholder="Search..."
      onSelect={(record) => console.log(record)}
      onChange={(value) => console.log(value)}
    />
  );
};

export default MyComponent;
