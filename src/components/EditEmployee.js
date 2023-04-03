import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className='rounded-full px-4 py-1 text-sm font-semibold text-blue-200 hover:bg-gray-900 hover:text-gray-300 focus:outline-none'
      >
        Edit
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header className='text-whte bg-gray-800'>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-whte bg-gray-800'>
          <form
            onSubmit={(input) => {
              input.preventDefault();
              props.editEmployee(props.id, name, role);
            }}
            id='editModal'
            className='w-full max-w-sm'
          >
            <div className='mb-6 md:flex md:items-center'>
              <div className='md:w-1/3'>
                <label
                  className='mb-1 block pr-4 font-semibold md:mb-0 md:text-right'
                  htmlFor='name'
                >
                  Name
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-2 leading-tight text-gray-600 focus:border-blue-900 focus:bg-white focus:outline-none'
                  id='name'
                  type='text'
                  defaultValue={name}
                  onChange={(input) => {
                    setName(input.target.value);
                  }}
                />
              </div>
            </div>
            <div className='mb-6 md:flex md:items-center'>
              <div className='md:w-1/3'>
                <label
                  className='mb-1 block pr-4 font-semibold md:mb-0 md:text-right'
                  htmlFor='role'
                >
                  Role
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-2 leading-tight text-gray-600 focus:border-blue-900 focus:bg-white focus:outline-none'
                  id='role'
                  type='text'
                  defaultValue={role}
                  onChange={(input) => {
                    setRole(input.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className='bg-gray-800 text-white'>
          <button
            onClick={handleClose}
            className='rounded border-2 border-gray-500 py-2 px-4 font-medium 
            hover:bg-gray-900'
          >
            Close
          </button>
          <button
            onClick={handleClose}
            form='editModal'
            className='rounded bg-blue-800 py-2 px-4 font-medium text-white hover:bg-blue-900'
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
