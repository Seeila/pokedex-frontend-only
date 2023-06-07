import { ComponentsVariants } from "@mui/material/styles/variants";

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        navigation: true;
    }
}

const variants: ComponentsVariants["MuiLink"] = [
    {
        props: {
            variant: "navigation",
        },
        style: {
            position: "relative",
            textDecoration: "none",
            "&::after": {
                content: `""`,
                width: "100%",
                height: "2px",
                color: "inherit",
                backgroundColor: "var(--pokedex-palette-primary-main)",
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%) scaleX(0)",
                transition: "250ms ease-in",
            },
            "&:hover": {
                color: "inherit",
                "&::after": {
                    transform: "translateX(-50%) scaleX(1)",
                },
            },
        },
    },
];

export const MuiLink = {
    variants: [...variants],
};
