import React from 'react';

const Yourappointment = () => {
  return (
    <div className=' flex justify-center items-center my-10'>
      <div className="overflow-x-auto w-3/4">
        <table className="table w-full">
          {/* <-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Treatment name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Teeth Orthodontics</td>
              <td>MAY 10, 2022</td>
              <td>08.30 AM - 09.00 AM</td>
            </tr>
            {/* <!-- row 1 --> */}
            <tr>
              <th>2</th>
              <td>Teeth Orthodontics</td>
              <td>MAY 10, 2022</td>
              <td>08.30 AM - 09.00 AM</td>
            </tr>
            {/* <!-- row 1 --> */}
            <tr>
              <th>3</th>
              <td>Teeth Orthodontics</td>
              <td>MAY 10, 2022</td>
              <td>08.30 AM - 09.00 AM</td>
            </tr>
            {/* <!-- row 1 --> */}
            <tr>
              <th>4</th>
              <td>Teeth Orthodontics</td>
              <td>MAY 10, 2022</td>
              <td>08.30 AM - 09.00 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Yourappointment;