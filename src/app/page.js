import Header from './components/Header';
import React from 'react'
import Pomodoro from './components/Pomodoro';

const page = () => {

  return (
    <main className="min-h-screen mr-4 p-4 md:p-8">
      <Pomodoro />
    </main>
  )

}

export default page
