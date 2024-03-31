import React from 'react';
import UserIcon from '../icons/userIcon';

export default function Navbar() {
    return (
        <>
            <nav class="container navbar navbar-expand-lg  p-4 min-width-370">
                <div class="container-fluid">
                    <a class="navbar-brand bold fs-2" href="#">Task Board</a>
                        <span className='bg-light rounded-circle p-2 dfjcac cursor-pointer UserIcon'><UserIcon/></span>
                </div>
            </nav>
        </>
    )
}
