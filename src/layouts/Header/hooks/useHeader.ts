import { useState } from "react";

import { menuItems as links } from "@pokedex-graphql/datas/menuItems.js";
import { IMenuItems } from "@pokedex-graphql/layouts/MobileMenu/components/MobileMenu";
import { useNavigate } from "react-router-dom";

export type AnchorType = "top" | "left" | "bottom" | "right";

export interface IDrawerOpen {
    top: boolean;
    left: boolean;
    bottom: false;
    right: false;
}

export const useHeader = () => {
    const menuItems: IMenuItems[] = links;

    const [isDrawerOpen, setDrawerOpen] = useState<IDrawerOpen>({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const navigate = useNavigate();

    const toggleDrawer =
        (anchor: AnchorType, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setDrawerOpen({ ...isDrawerOpen, [anchor]: open });
        };

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return {
        isDrawerOpen,
        toggleDrawer,
        menuItems,
        handleBackButtonClick,
    };
};
