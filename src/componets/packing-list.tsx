import React from 'react';
import Item from '../models/item';
import PackingItem from './packing-item';

export default function ParkingList({ items }: { items: Item[] }) {
  return (
    <div className='list'>
      <ul>
        {items.map((e) => (
          <PackingItem item={e} />
        ))}
      </ul>
    </div>
  );
}
