//Content.js
import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['name1', 'name2', 'name3'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }
  return (
    <main>
          <p>hello {handleNameChange()}</p>
    </main>
  )
}

export default Content