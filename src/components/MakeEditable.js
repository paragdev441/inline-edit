import React from 'react';

const MakeEditable = ({ columnId, rowId, cValue, rowIndex, handleInput }) => {
  const handleChange = (e) => {
    handleInput(e, columnId, rowId, rowIndex);
  };
  return columnId !== 'id' ? (
    <input
      onChange={handleChange}
      key={`${columnId}${rowId}`}
      name={rowId}
      defaultValue={cValue}
    />
  ) : (
    cValue
  );
};

export default MakeEditable;
