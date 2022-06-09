import React, { useEffect, useState } from 'react';
import EditableTable from "./EditableTable";

function Table() {
  const [candidate, setCandidate] = useState([]);
  const columns = [
    { field: 'id', fieldName: '#' },
    { field: 'name', fieldName: 'Name' },
    { field: 'dob', fieldName: 'Date Of Birth' },
    { field: 'email', fieldName: 'Email' },
    { field: 'result', fieldName: 'Result' },
    { field: 'select', fieldName: 'Select' },
    { field: 'action', fieldName: 'Action' },
  ];

  // const data = [
  //   { id: 1, name: 'John', dob: 'Doe', email: 'Admin' },
  //   { id: 2, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 3, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 4, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 5, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 6, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 7, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 8, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 9, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 10, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 11, name: 'John', dob: 'Smith', email: 'Editor' },
  //   { id: 12, name: 'John', dob: 'Smith', email: 'Editor' },
  // ];

  useEffect(() => { 
    fetch('http://localhost:5000/candidates')
      .then(res => res.json())
      .then(data => setCandidate(data))
  }, []);

  // console.log(candidate)
  return (
    <div className='mb-10 pt-20'>
      <EditableTable columns={columns} rows={candidate} actions />
    </div>
  );
}

export default Table;
