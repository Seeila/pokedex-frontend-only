import React, {useMemo} from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Link from '@pokedex-graphql/components/Link';
import defaultClasses from './mobileMenuList.module.css';

export interface IMenuItems {
    name: string;
    url: string;
}


const MobileMenuList : React.FC<{menuItems:IMenuItems[]}> = ({menuItems}) => {

    const menuListItems = useMemo(() => {
        return menuItems.map((menuItem) => (
            <ListItem key={`menu-${menuItem.name}`}>
              <Link href={menuItem.url} className={defaultClasses.listItem} isUnderlined={true}>{menuItem.name}</Link>
            </ListItem>
          ))
    }, [menuItems]);

    return (
      <List className={defaultClasses.root}>
        <ListItem>
          <Link href="/" className={defaultClasses.listItem} isUnderlined={true}>Home</Link>
        </ListItem>
        {menuListItems}
      </List>
    )
};

export default MobileMenuList;