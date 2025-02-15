import React, { useState } from 'react';

export default function Form() {
  const [description, setDescription] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (description == null) return;

    console.log(description);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 30 }, (_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description ?? ''}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
