import React from 'react';

const ColumnsLabel = ({ columns }) => {
  return columns.map(({ label, key }) => {
    return (
      <th key={key} scope="col">
        {label}
      </th>
    );
  });
};

export default ColumnsLabel;
