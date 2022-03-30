import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { LoginWithGoogle } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function Login() {
  const router=useRouter();
  useEffect(() => {
    const unSubscribe= onAuthStateChanged(auth,user=>{
      if(user){
        router.push('/');
      }
    })
    return ()=>{
      unSubscribe();
    }
  }, [])
  
  return (
    <div className='w-full bg-gray-200 min-h-screen p-5'>
        <h1 className='text-4xl font-semibold'>Uber</h1>
        <h1 className='text-2xl font-semibold text-gray-400'>Accede ahora con Google</h1>
        <div className="w-full flex justify-center">
        <Image
            src="https://media.discordapp.net/attachments/789940470578544682/958098516620750868/singup_mobile.png?width=1202&height=676"
            width={500}
            height={300}
            alt="logo"
            className='rounded-2xl mt-2'
        />
        </div>
        <button className='bg-black text-white w-full py-3 rounded-lg my-3'
        onClick={()=>LoginWithGoogle()}
        >Login con Google</button>
    </div>
  )
}

export default Login