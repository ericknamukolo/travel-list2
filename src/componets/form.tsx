import React from 'react';

export default function Form() {
  return (
    <form className='add-form'>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({ length: 30 }, (_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <input type='text' placeholder='Item...'></input>
      <button>Add</button>
    </form>
  );
}
