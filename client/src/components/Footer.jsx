import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsGithub} from 'react-icons/bs';

export default function Com() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
         <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <Link to="/" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-2  text-white self-center text-lg sm:text-xl font-semibold dark:text-white'>
                 Boxvers
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>

                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='# '
                        >
                            Services
                        </Footer.Link>
                        <Footer.Link
                            href='# '
                        >
                            Portfolio
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>

                    <Footer.Title title='Follow us'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='# '
                        >
                            Github
                        </Footer.Link>
                        <Footer.Link
                            href='# '
                        >
                            Discord
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>

                    <Footer.Title title='Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='# '
                        >
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link
                            href='# '
                        >
                            Terms &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>

                    


                </div>
            </div>
            <Footer.Divider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by='Boxvers' year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                </div>
            </div>
         </div>
        
    </Footer>
  )
}
