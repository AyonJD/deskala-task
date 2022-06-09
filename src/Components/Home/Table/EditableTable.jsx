import React, {useEffect, useMemo, useState} from 'react';
import { BsPencilSquare, BsSaveFill, BsFillTrashFill, BsXSquareFill } from 'react-icons/bs';
import {TiArrowSortedDown} from 'react-icons/ti';
import './EditableTable.css';

const EditableTable = ({ columns, rows, actions }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [rowsState, setRowsState] = useState(rows);
  const [editedRow, setEditedRow] = useState();

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage >= rows.length / pageSize)
      setCurrentPage(1);
  }, [pageSize])

  useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    const newData = rows.slice(firstPageIndex, lastPageIndex);

    setRowsState(newData);
  }, [currentPage, pageSize]);

  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  }

  const handleRemoveRow = (rowID) => {
    const newData = rowsState.filter(row => {
      return row.id !== rowID ? row : null
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
        if (row.id === editedRow.id) {
          if (editedRow.firstName) row.firstName = editedRow.firstName;
          if (editedRow.lastName) row.lastName = editedRow.lastName;
          if (editedRow.role) row.role = editedRow.role;
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
            return <tr key={row.id}>
              <td>
                {row.id}
              </td>
              <td>
                { isEditMode && rowIDToEdit === row.id
                  ? <input
                    type='text'
                    defaultValue={editedRow ? editedRow.firstName : row.firstName}
                    id={row.id}
                    name='firstName'
                    onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : row.firstName
                }
              </td>
              <td>
                { isEditMode && rowIDToEdit === row.id
                  ? <input
                    type='text'
                    defaultValue={editedRow ? editedRow.lastName : row.lastName}
                    id={row.id}
                    name='lastName'
                    onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : row.lastName
                }
              </td>
              <td>
                { isEditMode && rowIDToEdit === row.id
                  ? <input onChange={e => handleOnChangeField(e, row.id)} name="role" defaultValue={row.role}>
                    
                  </input>
                  : row.role
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
                { isEditMode && rowIDToEdit === row.id
                  ? <button onClick={ () => handleSaveRowChanges() } className='custom-table__action-btn ' disabled={!editedRow}>
                    <BsSaveFill />
                  </button>
                  : <button  onClick={ () => handleEdit(row.id) } className='custom-table__action-btn'>
                    <BsPencilSquare />
                  </button>
                }

                { isEditMode && rowIDToEdit === row.id
                  ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                    <BsXSquareFill />
                  </button>
                  : <button onClick={() => handleRemoveRow(row.id)} className='custom-table__action-btn'>
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