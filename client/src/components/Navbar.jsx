import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-(linear-gradient(135deg, #454a57, #1e1f24, #4d2449, #181117)) p-3 rounded-full cursor-pointer hover:bg-[#000000]"
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        )}
      </div>
      <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
        <a href="https://www.linkedin.com/in/ernesti-sario-010b6a214/" target="_blank" rel="noopener noreferrer">
          <li className="py-2 px-7 mx-4 rounded-full cursor-pointer font-semibold hover:bg-[#000000]">
            My Profile
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;