import React from 'react';
  // const dummy_data = {Packages	Rate (in sqft)	Total
  //   Civil 1	567.80	₹2,98,6792
  //   Activity 1	567.80	₹2,98,6792
  //   Work Item 1		₹2,98,6792
  //   Work Item 2		2,98,6792
  //   Work Item 3		₹2,98,6792
  //   Activity 2	567.80	₹2,98,6792
  //   Work Item 1		₹2,98,6792
  //   Work Item 2		2,98,6792
  //   Work Item 3		₹2,98,6792
  //   Activity 3	567.80	₹2,98,6792
  //   Activity 4	567.80	₹2,98,6792}


const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Package</th>
          <th>Rate (in sqft)</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.Packages}>
            <td>{item.Packages}</td>
            <td>{item.rate}</td>
            <td>
              <div className='table__total'>
              <p>{item.total}</p>
              <p>+</p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
