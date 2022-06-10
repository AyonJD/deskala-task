import React, { useEffect, useState } from 'react';
import EditableTable from "./EditableTable";
import { BiUserPlus } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function Table() {
  const [candidate, setCandidate] = useState([]);
  const navigate = useNavigate()
  const columns = [
    { field: 'id', fieldName: '#' },
    { field: 'name', fieldName: 'Name' },
    { field: 'dob', fieldName: 'Date Of Birth' },
    { field: 'email', fieldName: 'Email' },
    { field: 'result', fieldName: 'Result' },
    { field: 'select', fieldName: 'Select' },
    { field: 'action', fieldName: 'Action' },
  ];


  useEffect(() => { 
    fetch('http://localhost:5000/candidates')
      .then(res => res.json())
      .then(data => setCandidate(data))
  }, [candidate]);

  // console.log(candidate)
  return (
    <div className='mb-10 pt-20'>
      <EditableTable columns={columns} rows={candidate} actions />
      <button onClick={() => navigate('/create-candidate')} className='flex items-center btn btn-primary text-white'>Add Candidate <BiUserPlus className='ml-3 text-2xl'></BiUserPlus></button>
    </div>
  );
}

export default Table;
