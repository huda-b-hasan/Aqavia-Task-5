// src/layouts/AdminLayout.jsx
import React from 'react';
import { useTheme } from '../context/ColorContext';
import NavLink from '../UI/NavLink';
import ButtonColor from '../UI/ButtonColor';
export default function AdminLayout() {
    const {theme}=useTheme()
  return (
    <div className='min-h-screen flex'>
      <aside
      className='w-62.5 p-5 pb-10 border-r-black bg-amber-50 flex flex-col justify-between '>
        <NavLink/>
        <div>
        <h3 className='mb-3'>choose theme :</h3>
        <ButtonColor/>
        </div>
      </aside>

      <main style={{
        backgroundColor: `${theme}`,
      }}
      className='flex p-5 grow'>
      </main>
    </div>
  );
};

