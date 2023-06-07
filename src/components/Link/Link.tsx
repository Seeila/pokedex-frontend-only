import React from "react";
import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

const Link: React.FC<LinkProps> = ({ href, classes, ...restProps }) => {
    return (
        <MuiLink {...restProps} component={ReactRouterLink} to={href ?? "#"} />
    );
};

export default Link;
