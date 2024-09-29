import React from 'react'
import {Sidebar} from 'flowbite-react'
import {HiArrowSmRight, HiDocumentText, HiUser} from 'react-icons/hi'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';


export default function DashSidebar() {
    const location = useLocation();
    const dispatch = useDispatch();
    const [tab, setTab] = useState('');
    const {currentUser} = useSelector(state => state.user);
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get('tab')
      if(tabFromUrl) {
        setTab(tabFromUrl);
      }
      
    }, [location.search])
    const handleSignout = async () => {
      try {
          const res = await fetch('/api/user/signout', {
              method: 'POST', 
          });
          const data = await res.json();
          if(!res.ok){
              console.log(data.message);
              
          }  else{
              dispatch(signoutSuccess());
          }
      } catch (error) {
          console.log(error.message);
          
      }
  }
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup className='flex flex-col gap-1'>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item as='div' active={tab === 'profile'} icon={HiUser} label={currentUser.isAdmin ? 'Admin' : 'User'} labelColor={'dark'} >
                    Profile
                </Sidebar.Item>
                </Link>

                {currentUser.isAdmin && (



                <Link to='/dashboard?tab=posts'>
                <Sidebar.Item as='div' active={tab === 'posts'} icon={HiDocumentText}  >
                    Posts
                </Sidebar.Item>
                </Link>
                )}

                <Sidebar.Item   icon={HiArrowSmRight} onClick={handleSignout}  className='cursor-pointer'>
                    Sign Out
                </Sidebar.Item>

            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
