import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
      {
        id: 'u1',
        name: 'Jenni Ferguson',
        image:
          'https://teamsmile.org/wp-content/uploads/2017/06/Jenni_0032_Color-250x300.jpg',
        places: 3,
      },
    ]
  return <UsersList  items={USERS}/>
  
}

export default Users