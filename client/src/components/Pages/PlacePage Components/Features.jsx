import React, { useContext, useEffect } from 'react';
import Container2 from './Container2';
import { UserContext } from '../../../UserContext';
import { first_icons,second_icons } from './icons';

export default function Features() {
  const { icon1, setIcon1 } = useContext(UserContext);
  const {icon2,setIcon2} = useContext(UserContext);

  useEffect(() => {
    // If icon1 is empty, initialize it with first_icons
    if (icon1.length === 0) {
      setIcon1(first_icons);
    }
  }, [icon1, setIcon1]);

  useEffect(() => {
    // If icon1 is empty, initialize it with first_icons
    if (icon2.length === 0) {
      setIcon2(second_icons);
    }
  }, [icon2, setIcon2]);

  return (
    <div className='do'>
      <h1 className='offer'>What this place offers</h1>
      <div className='col'>
        <div className='col1'>
          {icon1.map((f_i) => (
            <Container2 key={f_i.key} img={f_i.img} mean={f_i.view} />
          ))}
        </div>
        <div className='col2'>
          {icon2.map((f_i) => (
            <Container2 key={f_i.key} img={f_i.img} mean={f_i.view} />
          ))}
        </div>
      </div>
    </div>
  );
}
