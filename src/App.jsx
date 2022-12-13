

import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

  const [closeForm, setCloseForm] = useState(true) 
  const {users,updateUserById,deleteUserById,createNewUser,getAllUsers} = useCrud() 
  const [updateInfo, setUpdateInfo] = useState()

  useEffect (() => {
    getAllUsers()
  }, [])

  console.log(users)

  return (
    <div className="App">
        <div className='App__header'>
        <h1>Users</h1>
        <button onClick={()=>setCloseForm(false)} className='App__btn'>
        <i className="fa-solid fa-plus"></i> Create new user</button>
        </div>
        <div className={`form-container ${closeForm && 'close__form'}`}>
            <FormUser
            createNewUser={createNewUser}
            updateInfo={updateInfo}
            updateUserById={updateUserById}
            setUpdateInfo={setUpdateInfo}
            setCloseForm={setCloseForm}
            />
        </div>
        <div className='user-container'>
            {users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setCloseForm={setCloseForm}
            />
            ))}
        </div>
    </div>
  )
}

export default App
