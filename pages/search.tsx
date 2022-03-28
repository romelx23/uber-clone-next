import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BackButton } from '../components/BackButton/BackButton';
import { useForm } from '../hooks/useForm';
import { InputsProps } from '../interfaces/location.interface';
import { useLocation } from '../hooks/useLocation';
import { useRouter } from 'next/router';

function Search() {
    const router = useRouter()
    const { pickupLocation, dropOffLocation, getPickUpLocation, getDropOffLocation } = useLocation();
    const { values, handleInputChange, setValues } = useForm<InputsProps>({
        pickup: '',
        dropoff: ''
    })
    const {pickup,dropoff}=values;
    const [showInput, setShowInput] = useState({
        pickup: false,
        dropoff: false
    })
    const handleChangePick = (location: string) => {
        setValues({ ...values, pickup: location })
    }
    const handleChangeDrop = (location: string) => {
        setValues({ ...values, dropoff: location })
    }
    const handleSend = () => {
        router.push('/confirm', {
            query: {
                pickup: values.pickup,
                dropoff: values.dropoff
            }
        })
    }
    return (
        <div className='w-full bg-gray-200 min-h-screen'>
            <div className="w-full bg-white py-2 px-3">
                <BackButton path='/' />
            </div>
            <h1 className='text-center text-2xl bg-gray-100'>Uber Clone</h1>
            <div className="w-full flex py-2 px-3 items-center justify-center gap-4 bg-gray-100">
                <div className="w-14 flex flex-col">
                    <div className='w-4 h-4 bg-gray-400 rounded-full'></div>
                    <div className='w-1 h-10 bg-gray-300 ml-1.5'></div>
                    <div className='w-4 h-4 bg-gray-800 rounded-md'></div>
                </div>
                <div className="flex flex-col flex-1 gap-3 ">
                    <form onSubmit={(e) => getPickUpLocation(e, pickup)} className="w-full flex flex-1">
                        <input type="text" placeholder='Ingrese su Lugar' className='input'
                            onChange={handleInputChange}
                            name='pickup'
                            onBlur={() => setShowInput({ ...showInput, pickup: true })}
                        />
                    </form>
                    <form onSubmit={(e) => getDropOffLocation(e, dropoff)} className="w-full flex flex-1">
                        <input type="text" placeholder='A donde?' className='input'
                            onChange={handleInputChange}
                            name='dropoff'
                            onBlur={() => setShowInput({ ...showInput, dropoff: true })}
                        />
                    </form>
                </div>
                <button className='bg-gray-400 w-11 h-11 rounded-full text-3xl flex items-center justify-center text-white'>
                    <h1>+</h1>
                </button>
            </div>
            <div className="w-full py-2 px-3">
                <button className='w-full bg-black flex items-center py-2 px-3 gap-4 hover:bg-gray-600'>
                    <div className='bg-gray-400 p-2 rounded-full'>
                        <div className="star"></div>
                    </div>
                    <h1 className='font-semibold text-white'>Guadar Lugar</h1>
                </button>
            </div>
            <div className="w-full flex py-2 px-3 items-center justify-center">
                {
                    pickupLocation.length > 0 && dropOffLocation.length > 0 ?

                        <Link href={{
                            pathname: '/confirm',
                            query: {
                                pickup: pickup,
                                dropoff: dropoff
                            }
                        }}
                            passHref
                        >
                            <button className='block bg-black text-white w-full py-3 px-2 hover:bg-gray-600'
                            >
                                <h1 className='font-semibold text-white'>Confirmar Ubicación</h1>
                            </button>
                        </Link> :
                        <button className='block bg-black text-white w-full py-3 px-2 hover:bg-gray-600'
                        >
                            <h1 className='font-semibold text-white'>Llene los campos</h1>
                        </button>
                }
            </div>
            {/* Mostrar las posibles ubicaciones en la parte inferior */}
            {/* Poder seleccionar las opciones */}
            {/* No dejar al usuario confirmar ubicacion hasta elegir las opciones */}
            {
                pickup.length > 0 &&
                (
                    pickupLocation.length > 0 ?
                        <div className='px-3 flex flex-col gap-2'>
                            <h1>Opciones de la Ruta:</h1>
                            {
                                pickupLocation.map(location => (
                                    <button key={location.id} className={`w-full text-left  p-2 text-white font-semibold ${pickup===location.place_name?'bg-gray-800':'bg-gray-500'}`} onClick={() => handleChangePick(location.place_name)}>
                                        <h1>{location.place_name}</h1>
                                    </button>
                                ))
                            }
                        </div>
                        : <div className='px-3 flex flex-col gap-2'>
                            <h1>No se encontró el lugar</h1>
                        </div>
                )
            }
            {
                dropoff.length > 0 &&
                (
                    pickupLocation.length > 0 ?
                        <div className='px-3 flex flex-col gap-2'>
                            <h1>Opciones del Destino:</h1>
                            {
                                dropOffLocation.map(location => (
                                    <button key={location.id} className={`w-full text-left  p-2 text-white font-semibold ${dropoff===location.place_name?'bg-gray-800':'bg-gray-500'}`} onClick={() => handleChangeDrop(location.place_name)}>
                                        <h1>{location.place_name}</h1>
                                    </button>
                                ))
                            }
                        </div>
                        : <div className='px-3 flex flex-col gap-2'>
                            <h1>No se encontró el lugar</h1>
                        </div>
                )
            }
        </div>
    )
}

export default Search