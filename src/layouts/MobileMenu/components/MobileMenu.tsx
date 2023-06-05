import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from '@mui/material/Box';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Button from  '@mui/material/Button';

import useMobileMenu from '@pokedex-graphql/layouts/MobileMenu/hooks/useMobileMenu.ts';
import MobileMenuList from '@pokedex-graphql/layouts/MobileMenu/components/MobileMenuList.tsx';

const ANCHOR = 'left';


const MobileMenu : React.FC = () => {

    const { isDrawerOpen, toggleDrawer, menuItems} = useMobileMenu();

    return (
        <>
            <Button onClick={toggleDrawer(ANCHOR, true)}>
                <FormatListBulletedIcon />
            </Button>
            <Drawer
            anchor={ANCHOR}
            open={isDrawerOpen[ANCHOR]}
            onClose={toggleDrawer(ANCHOR, false)}
            >
                <Box
                    sx={{ width: ANCHOR === 'top' || ANCHOR === 'bottom' ? 'auto' : 250 }}
                    role="presentation"
                    onClick={toggleDrawer(ANCHOR, false)}
                    onKeyDown={toggleDrawer(ANCHOR, false)}
                    >
                  <MobileMenuList menuItems={menuItems}/>
                </Box>
            </Drawer>
        </>
    )
}

export default MobileMenu;