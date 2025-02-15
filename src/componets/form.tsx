import React, { useState } from 'react';
import Item from '../models/item';

export default function Form({ onAdd }: { onAdd: (item: Item) => void }) {
  const [description, setDescription] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (description == null) return;
    const newItem: Item = {
      id: Date.now(),
      description: description,
      packed: false,
      quantity: quantity,
    };
    onAdd(newItem);
    setQuantity(1);
    setDescription(null);
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
