import React, { useEffect, useState } from 'react';
import ColumnsLabel from '../components/ColumnsLabel';
import MakeEditable from '../components/MakeEditable';

const TextInPlace = () => {
  const columns = [
    {
      label: '#',
      key: 'id',
    },
    {
      label: 'First',
      key: 'first',
    },
    {
      label: 'Last',
      key: 'last',
    },
    {
      label: 'Handle',
      key: 'handle',
    },
  ];

  const [data, setData] = useState(
    localStorage.getItem('localData')
      ? JSON.parse(localStorage.getItem('localData'))
      : [
          {
            id: '1',
            first: 'Mark',
            last: 'Otto',
            handle: '@mdo',
          },
          {
            id: '2',
            first: 'Jacob',
            last: 'Thornton',
            handle: '@fat',
          },
          {
            id: '3',
            first: 'Larry',
            last: 'the Bird',
            handle: '@twitter',
          },
        ]
  );

  useEffect(() => {
    console.log('jsdfhdhhjdf');
  }, [data]);

  const handleInput = (e, key, id, rowIndex) => {
    let tempData = data;
    tempData[rowIndex][key] = e.target.value;
    console.log('cell', tempData);
    setData(tempData);
    localStorage.setItem('localData', JSON.stringify(tempData));
  };

  return (
    <div className="text-main-block">
      <h1>TextInPlace</h1>
      <div className="table-responsive">
        <table className="table">
          <caption>List of users</caption>
          <thead>
            <tr>
              <ColumnsLabel columns={columns} />
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, first, last, handle }, index) => (
              <tr>
                <th scope="row">
                  <MakeEditable
                    columnId={'id'}
                    rowId={id}
                    cValue={id}
                    rowIndex={index}
                    handleInput={handleInput}
                  />
                </th>
                <td>
                  <MakeEditable
                    columnId={'first'}
                    rowId={id}
                    cValue={first}
                    rowIndex={index}
                    handleInput={handleInput}
                  />
                </td>
                <td>
                  <MakeEditable
                    columnId={'last'}
                    rowId={id}
                    cValue={last}
                    rowIndex={index}
                    handleInput={handleInput}
                  />
                </td>
                <td>
                  <MakeEditable
                    columnId={'handle'}
                    rowId={id}
                    cValue={handle}
                    rowIndex={index}
                    handleInput={handleInput}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TextInPlace;
