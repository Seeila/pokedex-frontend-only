import React, { useMemo } from "react";

import List, { ListClasses } from "@mui/material/List";
import ListItem, { ListItemClasses } from "@mui/material/ListItem";

import { useStyle } from "@pokedex-graphql/helpers/classify";
import Link from "@pokedex-graphql/components/Link";
import defaultClasses from "./mobileMenuList.module.css";

export interface IMenuItems {
    name: string;
    url: string;
}

interface IMobileMenuListProps {
    menuItems: IMenuItems[];
    classes?: Partial<ListClasses> & Partial<ListItemClasses>;
}

const MobileMenuList: React.FC<IMobileMenuListProps> = ({
    menuItems,
    classes: propsClasses,
}) => {
    const classes = useStyle(defaultClasses, propsClasses);

    const menuListItems = useMemo(() => {
        return menuItems.map((menuItem) => (
            <ListItem key={`menu-${menuItem.name}`}>
                <Link
                    href={menuItem.url}
                    classes={{ root: classes.listItem }}
                    variant="navigation"
                >
                    {menuItem.name}
                </Link>
            </ListItem>
        ));
    }, [menuItems, classes]);

    return (
        <List className={classes.root}>
            <ListItem>
                <Link
                    href="/"
                    className={classes.listItem}
                    variant="navigation"
                >
                    Home
                </Link>
            </ListItem>
            {menuListItems}
        </List>
    );
};

export default MobileMenuList;
