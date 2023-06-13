import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { WithRequiredProperty } from "@pokedex-graphql/helpers/typeMappers";

const BackButton: React.FC<WithRequiredProperty<ButtonProps, "onClick">> = ({
    onClick,
    color,
    ...restProps
}) => {
    return (
        <Button
            aria-label="Back"
            sx={{ minWidth: 0 }}
            onClick={onClick}
            color={color}
            {...restProps}
        >
            <ArrowBackIcon />
        </Button>
    );
};

export default BackButton;
