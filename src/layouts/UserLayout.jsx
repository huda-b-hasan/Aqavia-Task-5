// src/layouts/AdminLayout.jsx
import React from 'react';
import { useTheme } from '../context/ColorContext';
import NavLink from '../UI/NavLink';
import ButtonColor from '../UI/ButtonColor';
export default function UserLayout() {
    const {theme}=useTheme()
  return (
    <div className='min-h-screen  '>
      <nav
      className='w-full fixed px-5 items-center p-3 border-r-black bg-amber-50 flex  justify-between '>
        <NavLink isTopNav={true}/>
        <div>
        <ButtonColor/>
        </div>
      </nav>

      <main style={{
        backgroundColor: `${theme}`,
      }}
      className='flex p-5 h-screen '>
      </main>
    </div>
  );
};

