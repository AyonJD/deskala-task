import React from 'react';
import EditableTable from "./EditableTable";

function Table() {
  const columns = [
    { field: 'id', fieldName: '#' },
    { field: 'firstName', fieldName: 'Name' },
    { field: 'lastName', fieldName: 'Date Of Birth' },
    { field: 'role', fieldName: 'Email' },
    { field: 'role', fieldName: 'Result' },
    { field: 'role', fieldName: 'Action' },
  ];

  const data = [
    { id: 1, firstName: 'John', lastName: 'Doe', role: 'Admin' },
    { id: 2, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 3, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 4, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 5, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 6, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 7, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 8, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 9, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 10, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 11, firstName: 'John', lastName: 'Smith', role: 'Editor' },
    { id: 12, firstName: 'John', lastName: 'Smith', role: 'Editor' },
  ];

  return (
    <div className='mb-10 pt-20'>
      <EditableTable columns={columns} rows={data} actions />
    </div>
  );
}

export default Table;
