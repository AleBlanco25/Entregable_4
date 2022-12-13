
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'


const FormUser = ({createNewUser, updateInfo,setUpdateInfo,updateUserById, setCloseForm}) => {

const{register, reset, handleSubmit}  = useForm()

useEffect (() => {
    reset(updateInfo)
},[updateInfo])

const submit = data => {
    if(updateInfo){
        updateUserById(updateInfo.id, data)
        setUpdateInfo()
    } else {
    createNewUser(data)
    }
    setCloseForm(true)
    reset({
        email: '',
        password: '',
        lastName:'',
        firstName:'',
        birthday:''
    })
 
}
  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
    <div onClick={()=> setCloseForm(true)} className='form__x'>X</div>
    <h2 className='form__title'>{updateInfo ? 'Update User' : 'Create User'}</h2>       
        <div className='form__div'>
            <label className='form__label' htmlFor="first_name">First Name</label>
            <input className='form__input' type="text" id='first_name'{...register('first_name')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="last_name">Last Name</label>
            <input className='form__input' type="text" id='last_name'{...register('last_name')}/>
        </div>        
        <div className='form__div'>
            <label className='form__label' htmlFor="email">Email</label>
            <input className='form__input' type="email" id='email' {...register('email')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="password">Password</label>
            <input className='form__input' type="password" id='password'{...register('password')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="birthday">Birthday</label>
            <input className='form__input' type="date" id='date'{...register('birthday')}/>
        </div>
        <button className='form__btn'>Submit</button>
    </form>
  )
}

export default FormUser