import { useState } from 'react';
import './Buttons.css'

type DropDownOption = {
  label: string;
  onClick: () => void;
}

type DropDownButtonProps = { 
  dropDownLabel: string;
  options?: DropDownOption[];
}

export const DropDownButton = ({ dropDownLabel, options = [] }: DropDownButtonProps) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className='dropdown-container'>
      <button className='dropdown-button' onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`dropdown-button-text ${menuOpen ? 'menu-open' : ''}`}>
          {dropDownLabel}
        </span>
        <i className={`fa-solid fa-chevron-down dropdown-icon ${menuOpen ? 'open' : ''}`}></i>
      </button>
      <div className={`dropdown-menu ${menuOpen ? 'open' : 'closed'}`}>
        {options.map((option: DropDownOption, index: number) => (
          <button 
            key={index} 
            className='dropdown-menu-item' 
            onClick={() => {
              option.onClick();
              setMenuOpen(false);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  text?: string;
}

export const ButtonWithFunctions = ({ children, onClick, text }: ButtonProps) => {
  return (
    <button className="button-with-functions" onClick={onClick}>
      {children}
      {text && <span className="button-text">{text}</span>}
    </button>
  )
}