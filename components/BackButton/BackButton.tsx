import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
    path:string;
}

export const BackButton:FC<Props> = ({path}) => {
    return (
        <Link href={path} passHref>
            <button className='hover:bg-gray-400 p-2 px-3 rounded-full w-12 h-12'>
                <Image
                    src={'https://media.discordapp.net/attachments/789940470578544682/957491892424171530/507257.png'}
                    width={30}
                    height={30}
                    alt="back_arrow"
                />
            </button>
        </Link>
    )
}
