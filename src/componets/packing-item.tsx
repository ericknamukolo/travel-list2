import React from 'react';
import Item from '../models/item';

export default function PackingItem({
  item,
  onRemove,
}: {
  item: Item;
  onRemove: (id: number) => void;
}) {
  return (
    <li>
      <input type='checkbox' checked={item.packed} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemove(item.id)}>❌</button>
    </li>
  );
}
