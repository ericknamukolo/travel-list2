import React from 'react';
import Item from '../models/item';

export default function Stats({ items }: { items: Item[] }) {
  function getPacked(): number {
    return items.filter((item) => item.packed).length;
  }

  function getPercentage(): string {
    return ((getPacked() / items.length) * 100).toFixed(1);
  }
  return (
    <footer className='stats'>
      <em>
        You have {items.length} items on your list, and you already packed{' '}
        {getPacked()} ({getPercentage()} %)
      </em>
    </footer>
  );
}
