import React from 'react';
import Logo from './componets/logo';
import Form from './componets/form';
import ParkingList from './componets/packing-list';
import Stats from './componets/stats';

export default function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <ParkingList />
      <Stats />
    </div>
  );
}
