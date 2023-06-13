import { useMemo } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import {
    AnchorType,
    IDrawerOpen,
} from "@pokedex-graphql/layouts/Header/hooks/useHeader";
import Link from "@pokedex-graphql/components/Link/Link";

export interface IMenuItems {
    name: string;
    url: string;
}

interface MobileMenuProps {
    menuItems: IMenuItems[];
    toggleDrawer: (
        anchor: AnchorType,
        open: boolean
    ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    isDrawerOpen: IDrawerOpen;
    anchor: AnchorType;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    isDrawerOpen,
    toggleDrawer,
    menuItems,
    anchor,
}) => {
    const menuListItems = useMemo(() => {
        return menuItems.map((menuItem) => (
            <ListItem key={`menu-${menuItem.name}`}>
                <Link href={menuItem.url} variant="navigation">
                    {menuItem.name}
                </Link>
            </ListItem>
        ));
    }, [menuItems]);

    return (
        <Drawer
            anchor={anchor}
            open={isDrawerOpen[anchor]}
            onClose={toggleDrawer(anchor, false)}
        >
            <Box
                sx={{
                    width:
                        anchor === "top" || anchor === "bottom" ? "auto" : 250,
                }}
                margin={1}
                role="presentation"
                component="nav"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    <ListItem>
                        <Link href="/" variant="navigation">
                            Home
                        </Link>
                    </ListItem>
                    {menuListItems}
                </List>
            </Box>
        </Drawer>
    );
};

export default MobileMenu;
