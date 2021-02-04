import React from 'react';

import {
    Text,
    Stack,
    Box,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuList,
    MenuItem,
    Avatar,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { useAuth } from '../../providers/AuthProvider';

interface MenuLinksProps {
    isOpen: boolean;
}

interface MenuLinkProps {
    children: any;
    to: string;
}

interface ProfileDropdownProps {}

const styles = {
    stack: {
        spacing: 8,
        align: 'center',
        justify: ['center', 'space-between', 'flex-end', 'flex-end'],
        pt: [4, 4, 0, 0],
    },
};

const MenuLink: React.FC<MenuLinkProps> = ({ children, isLast, to = '/', ...rest }: any) => {
    return (
        <Link to={to}>
            <Text display="block" fontWeight="bold" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

const ProfileDropdown: React.FC<ProfileDropdownProps> = () => {
    const { logout, currentUser }: any = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Menu>
            <MenuButton>
                <Avatar name={currentUser.username} src={currentUser.avatar}/>
            </MenuButton>
            <MenuList>
                <MenuGroup title="Account">
                    <Link to={`/profile/${currentUser.username}`}>
                        <MenuItem>Profile</MenuItem>
                    </Link>
                    <Link to="/settings">
                        <MenuItem>Settings</MenuItem>
                    </Link>
                </MenuGroup>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
        </Menu>
    );
};

export const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
    const { currentUser }: any = useAuth();
    return (
        <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
            <Stack {...styles.stack} direction={['column', 'row', 'row', 'row']}>
                <ColorModeSwitcher />
                <MenuLink to="/">Home</MenuLink>
                {!currentUser ? <MenuLink to="/login">Login</MenuLink> : null}
                {currentUser ? ( <MenuLink to="/create">Create</MenuLink> ) : null}
                {currentUser ? <ProfileDropdown /> : null}
            </Stack>
        </Box>
    );
};
