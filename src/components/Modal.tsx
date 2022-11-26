import React from 'react'

interface ModalProps {
    children: React.ReactNode
    title: string
}

export function Modal({ children, title }: ModalProps) {
    return (
        <>
            <div
                className='fixed bg-black/70 top-0 right-0 left-0 bottom-0'
            />
            <div
                className='w-[400px] p-5 rounded bg-white absolute top-10 translate-x-1/2'
            >
                <h1 className='text-2xl text-center mb-2'>{ title }</h1>
                { children }
            </div>
        </>
    )
}
