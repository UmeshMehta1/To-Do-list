import React, { useState } from 'react';

export default function Header() {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData('');
    }
  };

  const removeAll = () => {
    setItems([]);
  };

  const delItem = (id) => {
    const updateitem = items.filter((elem, ind) => {
      return ind !== id;
    });

    setItems(updateitem);
  };
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            ToDo List
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='bg-primary'>
        <h1 className='text-center pt-4 pb-2'>ToDo-List</h1>
      </div>

      <div className='container'>
        <div>
          <input
            type='text'
            id='fname'
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>

        <div>
          <button
            type='button'
            className='btn btn-primary first'
            onClick={addItem}>
            Add-Item
          </button>
          <button
            type='button'
            className='btn btn-primary second'
            onClick={removeAll}>
            Remove All
          </button>
        </div>
      </div>

      {items.map((elem, ind) => {
        return (
          <div className='container'>
            <div className='Items'>
              <div className='eachItem' key={ind}>
                <h3>{elem}</h3>
                <span
                  className='material-symbols-outlined'
                  onClick={() => delItem(ind)}
                  style={{ cursor: 'pointer' }}>
                  delete
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
