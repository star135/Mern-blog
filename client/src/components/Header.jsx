import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link , useLocation} from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMoon } from 'react-icons/fi';
import {useSelector} from 'react-redux';

export default function Header() {
    const path=useLocation().pathname;
    const {currentUser} = useSelector(state => state.user);
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-2  text-white self-center text-sm sm:text-xl font-semibold dark:text-white'>
            Boxvers
        </Link>
        <form >
            <TextInput type='text' 
            placeholder='search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            ></TextInput>
        </form>
        <button className='w-10 h-10 lg:hidden  text-gray-500 border-2  rounded-xl p-2.5' >
            <AiOutlineSearch/>
        </button>
        <div className='flex gap-2  md:order-2'>
            <button className='w-10 h-10  text-gray-500 rounded-xl p-2.5 m-2 border-2' 
             >
                <FiMoon/>
            </button>

            {currentUser ? (
                <Dropdown 
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                        alt='user'
                        img={currentUser.profilePicture}
                        rounded
                        />
                    }
                >
                    <DropdownHeader>
                        <span className='block text-sm'>@{currentUser.username}</span>
                        <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                    </DropdownHeader>
                    <Link to={'/dashboard?tab=profile'}>
                        <DropdownItem>Profile</DropdownItem>
                    </Link>
                    <DropdownDivider/>
                    <DropdownItem>Sign out</DropdownItem>

                </Dropdown>
            ):
                (

                    <Link to={'/sign-in'}>
                    <button   className='bg-gradient-to-r from-purple-500  to-blue-500 rounded-lg p-2 my-2 text-white self-center text-sm sm:text-xl font-semibold dark:text-white ' >Sign in
                    </button>
                        </Link>
                )
        }

                <NavbarToggle />
        </div>
        <NavbarCollapse>
            <NavbarLink active={path=="/"} as={'div'}>
                <Link to={'/'}>Home
                </Link>
            </NavbarLink>
            <NavbarLink active={path=="/about"} as={'div'}>
                <Link to={'/about'}>About
                </Link>
            </NavbarLink>
            <NavbarLink active={path=="/projects"} as={'div'}>
                <Link to={'/projects'}>Projects
                </Link>
            </NavbarLink>
        </NavbarCollapse>


    </Navbar>
  )
}
