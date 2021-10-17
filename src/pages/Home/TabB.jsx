import React, { useState, useEffect } from 'react'

const TabB = ({ redirectTab }) => {
  const [valueB, setValueB] = useState("");
   // Mounting
   useEffect(() => {
    console.log('Mới vào render lần đầu tiên B')
  }, [])

  useEffect(() => {
    if (redirectTab) setValueB('Ahihi ahoho')
  }, [redirectTab])

   // UnMounting
   useEffect(() => {
     return () => {
       console.log('Rời khỏi B')
     }
  }, [])

  return (
    <div>
      TabB
      <input
        type="text"
        onChange={(e) => setValueB(e.target.value)}
        value={valueB}
      />
    </div>
  )
}

export default TabB
