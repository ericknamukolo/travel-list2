import React from 'react';
import Item from '../models/item';
import PackingItem from './packing-item';

export default function ParkingList({
  items,
  onRemove,
}: {
  items: Item[];
  onRemove: (id: number) => void;
}) {
  return (
    <div className='list'>
      {items.length === 0 ? (
        <h5>You have no items added</h5>
      ) : (
        <ul>
          {items.map((e) => (
            <PackingItem item={e} key={e.id} onRemove={onRemove} />
          ))}
        </ul>
      )}
    </div>
  );
}
