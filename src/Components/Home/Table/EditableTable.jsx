import React, {useEffect, useMemo, useState} from 'react';
import { BsPencilSquare, BsSaveFill, BsFillTrashFill, BsXSquareFill } from 'react-icons/bs';
import {TiArrowSortedDown} from 'react-icons/ti';
import './EditableTable.css';

const EditableTable = ({ columns, rows, actions }) => {
  console.log(rows)
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [rowsState, setRowsState] = useState(rows);
  useEffect(() => {
    setRowsState(rows)
   }, [rows])
  const [editedRow, setEditedRow] = useState();

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(rowsState);
  // rows?.map(row => console.log(row))
  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  }

  const handleRemoveRow = (rowID) => {
    const newData = rowsState.filter(row => {
      return row._id !== rowID ? row : null
    });

    setRowsState(newData);
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
    setTimeout(() => {
      setIsEditMode(false);

      const newData = rowsState.map(row => {
        if (row._id === editedRow.id) {
          if (editedRow.name) row.name = editedRow.name;
          if (editedRow.dob) row.dob = editedRow.dob;
          if (editedRow.email) row.email = editedRow.email;
        }

        return row;
      })

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
                {row._id}
              </td>
              <td>
                { isEditMode && rowIDToEdit === row._id
                  ? <input
                    type='text'
                    defaultValue={editedRow ? editedRow.name : row.name}
                    id={row._id}
                    name='name'
                    onChange={ (e) => handleOnChangeField(e, row._id) }
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
                    onChange={ (e) => handleOnChangeField(e, row._id) }
                  />
                  : row.dob
                }
              </td>
              <td>
                { isEditMode && rowIDToEdit === row._id
                  ? <input onChange={e => handleOnChangeField(e, row._id)} name="email" defaultValue={row.email}>
                    
                  </input>
                  : row.email
                }
              </td>
              <td>Shortlist</td>
                <td>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="m-1"><TiArrowSortedDown className='ml-5 mt-1'/></label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Shortlist</a></li>
                            <li><a>Reject</a></li>
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

                { isEditMode && rowIDToEdit === row._id
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