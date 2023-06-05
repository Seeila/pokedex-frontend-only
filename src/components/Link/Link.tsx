import React from "react";
import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import defaultClasses from './link.module.css';

interface LinkProps extends React.ComponentPropsWithoutRef<"a">{
  isUnderlined?: boolean;
  href?: string;
}

const Link: React.FC<LinkProps> = ({isUnderlined, href, ...restProps})  => {
  const linkClass = isUnderlined ? defaultClasses.centerUnderlined : defaultClasses.root;
  const underlined = isUnderlined ? "none" : "always";
  return (
    <MuiLink {...restProps} underline={underlined} component={ReactRouterLink} to={href ?? "#"} classes={{root: linkClass}}/>
  );
};

export default Link;