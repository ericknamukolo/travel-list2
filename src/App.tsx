import React, { useState } from 'react';
import Logo from './componets/logo';
import Form from './componets/form';
import ParkingList from './componets/packing-list';
import Stats from './componets/stats';
import Item from './models/item';

const initialItems: Item[] = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 2, packed: true },
];

export default function App() {
  const [items, setItems] = useState<Item[]>([...initialItems]);

  function addItem(item: Item) {
    setItems((prev) => [...prev, item]);
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAdd={addItem} />
      <ParkingList items={items} />
      <Stats items={items} />
    </div>
  );
}
