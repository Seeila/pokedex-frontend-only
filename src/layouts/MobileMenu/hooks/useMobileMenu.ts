import {useState} from "react";

import {menuItems as links} from '@pokedex-graphql/datas/menuItems.js';
import {IMenuItems} from '@pokedex-graphql/layouts/MobileMenu/components/MobileMenuList';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const useMobileMenu = () => {
    const menuItems: IMenuItems[] = links;

    const [isDrawerOpen, setDrawerOpen] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawerOpen({ ...isDrawerOpen, [anchor]: open });
    };

    return {
        isDrawerOpen, toggleDrawer, menuItems
    }
};

export default useMobileMenu;