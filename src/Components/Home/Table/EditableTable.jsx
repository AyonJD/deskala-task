import React, {useEffect, useMemo, useState} from 'react';
import { BsPencilSquare, BsSaveFill, BsFillTrashFill, BsXSquareFill } from 'react-icons/bs';
import {TiArrowSortedDown} from 'react-icons/ti';
import './EditableTable.css';

const EditableTable = ({ columns, rows, actions }) => {
  // console.log(rows)
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [rowsState, setRowsState] = useState(rows);
  const [result, setResult] = useState('');
  const [open, setOpen] = useState(false);
  const [rowID, setRowID] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  useEffect(() => {
    setRowsState(rows)
   }, [rows])
  const [editedRow, setEditedRow] = useState();

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(result);
  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  }

  //Delete row
  const handleRemoveRow = (rowID) => {

    //Delete row from database
    fetch(`http://localhost:5000/candidates/${rowID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRowsState(data)
      }
      )
  }

  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;

    setEditedRow({
      id: rowID,
      [fieldName]: value
    })
  }

  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  }

  const handleSaveRowChanges = () => {
    console.log('save row changes');
    let newObject = {}
    setTimeout(() => {
      setIsEditMode(false);

      const newData = rowsState.map(row => {
        if (row._id === editedRow.id) {
          newObject.name = name;
          newObject.dob = dob;
          newObject.email = email;
          newObject.result = editedRow.result;

          console.log(name, dob, email, result);
        }

        return row;
      })

     console.log(newObject);

      //PUT newData to API
      
        fetch(`http://localhost:5000/candidates/${editedRow.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newObject)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          }
          )

      setRowsState(newData);
      setEditedRow(undefined)
    }, 1000)
  }

  
  return (
    <div className=''>
      <table className='w-full table '>
        <thead >
        <tr>
          {columns.map((column) => {
            return <th key={column.field}>{ column.fieldName }</th>
          })}
                  </tr>
        </thead>
        <tbody>
          {rowsState.map((row, index) => {
          
          if (index < pageSize) {
            return <tr key={row._id}>
              <td>
                {index + 1}
              </td>
              <td>
                { isEditMode && rowIDToEdit === row._id
                  ? <input
                    type='text'
                    defaultValue={editedRow ? editedRow.name : row.name}
                    id={row._id}
                    name='name'
                    onChange={(e) => {
                      handleOnChangeField(e, row._id)
                      setName(e.target.value)
                    } }
                  />
                  : row.name
                }
              </td>
              <td>
                { isEditMode && rowIDToEdit === row._id
                  ? <input
                    type='text'
                    defaultValue={editedRow ? editedRow.dob : row.dob}
                    id={row._id}
                    name='dob'
                    onChange={(e) => {
                      handleOnChangeField(e, row._id)
                      setDob(e.target.value)
                    } }
                  />
                  : row.dob
                }
              </td>
              <td>
                { isEditMode && rowIDToEdit === row._id
                  ? <input onChange={e => {
                    handleOnChangeField(e, row._id)
                    setEmail(e.target.value)
                  }} name="email" defaultValue={row.email}>
                    
                  </input>
                  : row.email
                }
              </td>
              {/* <td>
              { open && rowID === row._id
                  ? result
                  : row.result
                }
              </td> */}
              <td>
                { isEditMode && rowIDToEdit === row._id
                  ? <input
                    type='text'
                    defaultValue={editedRow ? editedRow.result : row.result}
                    id={row._id}
                    name='result'
                    onChange={ (e) => handleOnChangeField(e, row._id) }
                  />
                  : row.result
                }
              </td>
                <td>
                    <div className="dropdown dropdown-end">
                  <label onClick={() => {
                    setOpen(!open)
                    setRowID(row._id)
                    // handleEdit(row._id)
                        }} tabIndex="0" className="m-1"><TiArrowSortedDown className='ml-5 mt-1'/></label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => setResult("Shortlist")}><a>Shortlist</a></li>
                            <li onClick={() => setResult("Reject")}><a>Reject</a></li>
                        </ul>
                    </div>
                </td>
              {actions &&
              <td>
                { isEditMode && rowIDToEdit === row._id
                  ? <button onClick={ () => handleSaveRowChanges() } className='custom-table__action-btn ' disabled={!editedRow}>
                    <BsSaveFill />
                  </button>
                  : <button  onClick={ () => handleEdit(row._id) } className='custom-table__action-btn'>
                    <BsPencilSquare />
                  </button>
                }

                { open && rowIDToEdit === row._id
                  ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                    <BsXSquareFill />
                  </button>
                  : <button onClick={() => handleRemoveRow(row._id)} className='custom-table__action-btn'>
                    <BsFillTrashFill />
                  </button>
                }
              </td>
              }
            </tr>
          }
        })}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;