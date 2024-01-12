import React from 'react'
import {useState, useContext} from 'react'
import {Card, CardHeader, CardBody, Input, Button, Typography} from '@material-tailwind/react'
import myContext from '../../../context/data/myContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../../../firebase/firebaseConfig"

export default function AdminLogin(){
  const context = useContext(myContext);
  const {mode}= context;

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async()=>{
    if(!email || !password){
      return toast.error("Fill all required fields")
    }
    try{
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success('login success')
      localStorage.setItem('admin', JSON.stringify(result));
      navigate('/adminDashboard');
    }catch(error){
      toast.error('Login failed')
      console.log(error)
    }
  }


  return(
    <div className='flex justify-center items-center h-screen'>
      <Card className='w-full max-w-[24rem]'>
      <CardHeader color='orange' floated={false} shadow={false} className='m-0 grid place-items-center rounded-b-none py-8 px-4 text-center'>
     <div className='mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white'>
      <div className='flex justify-center'>
        <img src={'https://cdn-icons-png.flaticon.com/128/3135/3135716.png'} className='h-20 w-20'/>
      </div>
     </div>
     <Typography variant="h4">
     Admin Login
     </Typography>
      </CardHeader>
      <CardBody>
        <form className=' flex flex-col gap-4'>
          <div>
           <Input type='email' label='Email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div>
           <Input type='password' label='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
          </div>
          <Button onClick={login}>
            Login
          </Button>
        </form>
      </CardBody>
      </Card>
    </div>
  );
}