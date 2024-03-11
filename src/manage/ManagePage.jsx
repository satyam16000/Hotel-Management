import { Table } from 'reactstrap'
import {  useState } from 'react';

import "./ManagePage.css"


export default function Bookings() {
  const [bookings, setBookings] = useState([])



  return (
    <div>
      <Table bordered dark>
        <thead>
          <tr>
            <th>
              S.No
            </th>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Room Number
            </th>
            <th>
              Start Time
            </th>
            <th>
              End Time
            </th>
            <th>
              Status
            </th>
          </tr>
        </thead>
        <tbody>

          {bookings.map((booking, index) => (
            <tr key={index} row>
              <th scope="row">
                {index + 1}
              </th>
              <td>
                {index}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.roomNumber}</td>
              <td>{booking.roomType}</td>
              <td>{booking.startTime}</td>
              <td>{booking.endTime}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
