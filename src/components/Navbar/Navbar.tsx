import { useEffect, useState } from 'react';
import { DropDownButton, ButtonWithFunctions } from '../index';
import { UserIcon } from '@heroicons/react/24/solid';
import './Navbar.css'

export const Navbar = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setVisible(true);
      }
      else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header${visible ? ' visible' : ''}`}>
      <nav className="navbar">
        <div className='left'>
          <DropDownButton></DropDownButton>
        </div>
        <div>
          <ButtonWithFunctions text='' onClick={() => console.log('Button user')}>
            <UserIcon className='user-icon'/>
          </ButtonWithFunctions>
        </div>
      </nav>
    </header>
  )
}