import React from 'react'
import { Link } from 'react-router-dom'
import style from './error.module.css'


export default function Error() {
    return <>
        <div>
            <h1 className='mb-3'>This Page is Not Found</h1>
            <Link to="/" className={`${style.redirectBtn} rounded py-2 px-4 text-white text-decoration-none`}>
                Go to the Main Page
            </Link>
        </div>
    </>
}
