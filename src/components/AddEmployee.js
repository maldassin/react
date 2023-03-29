import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function AddEmployee(props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [img, setImg] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className='my-2 rounded bg-blue-800 py-2 px-4 font-medium text-white hover:bg-blue-900'
      >
        + Add Employee
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(input) => {
              input.preventDefault();
              setName("");
              setRole("");
              setImg("");
              props.addEmployee(name, role, img);
            }}
            id='editModal'
            className='w-full max-w-sm'
          >
            <div className='mb-6 md:flex md:items-center'>
              <div className='md:w-1/3'>
                <label
                  className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                  htmlFor='name'
                >
                  Name
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:border-blue-900 focus:bg-white focus:outline-none'
                  id='name'
                  type='text'
                  placeholder='Maen Dassin'
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
                  className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                  htmlFor='role'
                >
                  Role
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:border-blue-900 focus:bg-white focus:outline-none'
                  id='role'
                  type='text'
                  placeholder='Senior Eater'
                  defaultValue={role}
                  onChange={(input) => {
                    setRole(input.target.value);
                  }}
                />
              </div>
            </div>
            <div className='mb-6 md:flex md:items-center'>
              <div className='md:w-1/3'>
                <label
                  className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                  htmlFor='img'
                >
                  Image URL
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:border-blue-900 focus:bg-white focus:outline-none'
                  id='img'
                  type='url'
                  placeholder='https://rickroll.com'
                  defaultValue={img}
                  onChange={(input) => {
                    setImg(input.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            className='rounded border-2 py-2 px-4 font-medium text-blue-800 
            hover:bg-gray-100'
          >
            Close
          </button>
          <button
            onClick={handleClose}
            form='editModal'
            className='rounded bg-blue-800 py-2 px-4 font-medium text-white hover:bg-blue-900'
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
