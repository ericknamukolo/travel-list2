import React from 'react';
import Item from '../models/item';

export default function PackingItem({ item }: { item: Item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
