import { useEffect, useState } from 'react';
import { DropDownButton, ButtonWithFunctions, Promocion } from '../index';
// import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import logoSVG from '../../assets/cat-halloween-kitty-svgrepo-com.svg'
import './Navbar.css'

export const Navbar = () => {

  const [transformed, setTransformed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTransformed(true);
      }
      else {
        setTransformed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Promocion estadoActual={`${transformed ? ' transformed' : ''}`} />

      <header className={`header${transformed ? ' transformed' : ''}`}>
        <nav className="navbar">

          <div className='left'>
            <img src={logoSVG} alt="Logo" className='logo' />
          </div>

          <div className='center-items'>
            <DropDownButton
              dropDownLabel="Nuestros diseños" 
              options={[
                { label: 'Nike', onClick: () => console.log('Modelos de coches') },
                { label: 'Mascotas', onClick: () => console.log('Modelos de motos') },
                { label: 'Disney/Pixar', onClick: () => console.log('Modelos de camiones') }
              ]}
            />

            <DropDownButton
              dropDownLabel="Creá tu estilo"
              options={[
                { label: 'Remeras', onClick: () => console.log('Remeras') },
                { label: 'Buzos', onClick: () => console.log('Buzos') }
              ]}
            />

            <DropDownButton
              dropDownLabel="Contactanos"
              options={[
                { label: 'Instagram', onClick: () => console.log('Remeras') },
                { label: 'Facebook', onClick: () => console.log('Buzos') }
              ]}
            />

          </div>

          <div className='right'>
            <ButtonWithFunctions text='Usuario' onClick={() => console.log('Button user')}>
              {/* <UserIcon className='icon'/> */}
              <i className="fa-solid fa-user icon"></i>
            </ButtonWithFunctions>
            <ButtonWithFunctions text='Carrito' onClick={() => console.log('Button cart')}>
              {/* <ShoppingCartIcon className='icon'/> */}
              <i className="fa-solid fa-cart-shopping icon"></i>
            </ButtonWithFunctions>
          </div>

        </nav>
      </header>
    </>
  )
}