import React from 'react';
import Logo from './componets/logo';
import Form from './componets/form';
import ParkingList from './componets/packing-list';
import Stats from './componets/stats';
import Item from './models/item';

const initialItems: Item[] = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 2, description: 'Charger', quantity: 2, packed: true },
];

export default function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <ParkingList items={initialItems} />
      <Stats />
    </div>
  );
}
