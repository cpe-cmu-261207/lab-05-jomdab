import React from 'react';
import { useState } from 'react'
import Head from './Head';
import Todo from './Todo0';
import Task from './Task';

function App() {
  return (
    <div>

      {/* header section */}
      <Head/>

      {/* todo section */}
      <Todo></Todo>

      {/* footer section */}
      <p className='text-center text-gray-400'> ... </p>
    </div>
  );
}

export default App;
