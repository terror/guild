import React, { useState } from 'react';

import { NavContainer } from './NavContainer';
import { MenuToggle } from './MenuToggle';
import { MenuLinks } from './MenuLinks';
import { Logo } from './Logo';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <NavContainer>
            <Logo />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavContainer>
    );
};
