import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditEmployee() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className='rounded-full px-4 py-1 text-sm font-semibold text-orange-600 hover:bg-trueGray-900 hover:text-orange-200 focus:outline-none'
      >
        Update
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editModal' className='w-full max-w-sm'>
            <div className='mb-6 md:flex md:items-center'>
              <div className='md:w-1/3'>
                <label
                  className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                  for='name'
                >
                  Name
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                  id='name'
                  type='text'
                  value='Name'
                />
              </div>
            </div>
            <div className='mb-6 md:flex md:items-center'>
              <div className='md:w-1/3'>
                <label
                  className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                  for='role'
                >
                  Role
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
                  id='role'
                  type='text'
                  value='Role'
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            className='rounded bg-slate-400 py-2 px-4 font-medium text-white hover:bg-slate-500'
          >
            Close
          </button>
          <button
            form='editModal'
            className='rounded bg-orange-800 py-2 px-4 font-medium text-white hover:bg-orange-900'
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
