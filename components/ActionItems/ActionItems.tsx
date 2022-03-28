import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ActionItems = () => {
    return (
        <div className='bg-gray-200'>
            <div className="flex justify-between text-black px-2 mt-3">
                <h1 className='text-4xl font-semibold'>Uber</h1>
                <div className="flex items-center gap-2">
                    <h2 className='w-20'>Nombre Apellido</h2>
                    <Image
                        src={'https://media.discordapp.net/attachments/847958546842517546/957303961793220638/277102818_641843947228861_4333233810357467986_n.png?width=477&height=676'}
                        width={50}
                        height={50}
                        alt="profile"
                        className="rounded-full object-cover border border-gray-500 p-px"
                    />
                </div>
            </div>
            <div className="flex justify-around text-black mt-3">
                <Link href="/search" passHref>
                    <button className='button'>
                        <Image
                            src={'https://media.discordapp.net/attachments/730810037693579304/957472377929867264/1048313.png'}
                            width={50}
                            height={50}
                            alt="ride"
                        />
                        Ride
                    </button>
                </Link>
                <button className='button'>
                    <Image
                        src={'https://media.discordapp.net/attachments/730810037693579304/957472690409717760/1409444.png'}
                        width={50}
                        height={50}
                        alt="ride"
                    />
                    Wheels
                </button>
                <button className='button'>
                    <Image
                        src={'https://media.discordapp.net/attachments/730810037693579304/957472959071674398/3652191.png'}
                        width={50}
                        height={50}
                        alt="ride"
                    />
                    Reserve
                </button>
            </div>
            <div className="w-full flex px-3 mt-3">
                <button className='button__large w-full h-24'>
                    A donde?
                </button>
            </div>
        </div>
    )
}
