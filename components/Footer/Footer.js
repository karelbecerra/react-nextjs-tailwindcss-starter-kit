import React from 'react';

import Link from 'next/link';
import { Logo } from '../Logo';
import { TwitterIcon, WalletIcon } from '../icons';

const Footer = () => {
  return (
    <footer className="pt-8 flex flex-col items-center justify-center gradient-via-transparent">
      <div className='text-xs text-gray-100'>
        <Link href='/' passHref>
          <Logo size="w-12 h-12" color="text-gray-100"/>
        </Link>
      </div>
      <div className="container mx-auto flex space items-center justify-between h-32 px-4 xl:px-24">
        <div className="flex space-x-4 justify-center items-center">
          <label className="font-medium text-gray-100 hidden sm:block">find us in</label>
          <Link href="/Karel%20Becerra" >
            <a className="flex w-8 h-8 text-blue-300">
              <WalletIcon />
            </a>
          </Link>
          <Link href="https://twitter.com/karelbecerra">
            <a  target='_blank' className="flex w-8 h-8 text-blue-300">
              <TwitterIcon />
            </a>
          </Link>
        </div>
        <div className="flex text-gray-200 text-sm sm:text-base">
          <Link href='/terms-conditions' className='text-gray-200'>Terms & Conditions</Link>
        </div>
      </div>
      <div className='text-xs text-gray-200'>
        <a className="flex" href="https://twitter.com/karelbecerra"><span className="hidden sm:block">Created by Karel Becerra - twitter.com/karelbecerra</span></a>
      </div>
    </footer>
  );
}

export default Footer;
