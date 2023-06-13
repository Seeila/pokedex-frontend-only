import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Button, { ButtonProps } from "@mui/material/Button";
import { AnchorType } from "@pokedex-graphql/layouts/Header/hooks/useHeader";

interface MobileMenuButtonProps extends ButtonProps {
    toggleDrawer: (
        anchor: AnchorType,
        open: boolean
    ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    anchor: AnchorType;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
    toggleDrawer,
    anchor,
    color,
    ...restProps
}) => {
    return (
        <Button
            onClick={toggleDrawer(anchor, true)}
            aria-label="Toggle Menu"
            role="button"
            sx={{ minWidth: 0 }}
            color={color}
            {...restProps}
        >
            <FormatListBulletedIcon sx={{ width: "2rem", height: "2rem" }} />
        </Button>
    );
};

export default MobileMenuButton;
