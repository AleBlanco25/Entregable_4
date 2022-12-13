
import './styles/userCard.css'
import React from 'react'


const UserCard = ({user, deleteUserById,setUpdateInfo, setCloseForm}) => {

    const handleEdit = () => {
        setUpdateInfo(user)
    }

  return (
    <article className='card'>
        <h3 className='card__title'>{user.first_name} {user.last_name}</h3>
        <ul className='card__body'>
            <li className='card__item'><span className='card__span'>Email: </span> {user.email}</li>
            <li className='card__item'><span className='card__span'>Birthday: </span> {user.birthday}</li>
        </ul>
        <footer className='card__footer'>
            <button className='card__btn card__btn-trash'  onClick={()=>deleteUserById(user.id)}>
            <i className="fa-regular fa-trash-can"></i></button>
            <button className='card__btn card__btn-edit' onClick={handleEdit}>
            <i onClick={()=>setCloseForm(false)} className="fa-solid fa-pen-to-square"></i></button>
        </footer>
    </article>
  )
}

export default UserCard


