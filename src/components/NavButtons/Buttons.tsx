import './Buttons.css'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon
} from '@heroicons/react/24/solid'

export const DropDownButton = () => {
  return (
    <div className="menu-container">
      <Menu>
        <MenuButton className="menu-button">
          Nuestros modelos
          <ChevronDownIcon className="menu-icon-chevron" />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="menu-items"
        >

          <MenuItem>
            <button className="menu-item group">
              <PencilIcon className="menu-icon" />
              Edit
              <kbd className="menu-kbd">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="menu-item group">
              <Square2StackIcon className="menu-icon" />
              Duplicate
              <kbd className="menu-kbd">⌘D</kbd>
            </button>
          </MenuItem>
          <div className="menu-divider" />
          <MenuItem>
            <button className="menu-item group">
              <ArchiveBoxXMarkIcon className="menu-icon" />
              Archive
              <kbd className="menu-kbd">⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="menu-item group">
              <TrashIcon className="menu-icon" />
              Delete
              <kbd className="menu-kbd">⌘D</kbd>
            </button>
          </MenuItem>

        </MenuItems>
      </Menu>
    </div>
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