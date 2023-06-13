import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const PointsHeaderIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <circle cx="3" cy="3" r="3" fill={props.htmlColor} />
            <circle cx="3" cy="15" r="3" fill={props.htmlColor} />
            <circle cx="3" cy="27" r="3" fill={props.htmlColor} />
            <circle cx="27" cy="3" r="3" fill={props.htmlColor} />
            <circle cx="27" cy="15" r="3" fill={props.htmlColor} />
            <circle cx="27" cy="27" r="3" fill={props.htmlColor} />
            <circle cx="15" cy="3" r="3" fill={props.htmlColor} />
            <circle cx="15" cy="15" r="3" fill={props.htmlColor} />
            <circle cx="15" cy="27" r="3" fill={props.htmlColor} />
            <circle cx="39" cy="3" r="3" fill={props.htmlColor} />
            <circle cx="39" cy="15" r="3" fill={props.htmlColor} />
            <circle cx="39" cy="27" r="3" fill={props.htmlColor} />
            <circle cx="51" cy="3" r="3" fill={props.htmlColor} />
            <circle cx="51" cy="15" r="3" fill={props.htmlColor} />
            <circle cx="51" cy="27" r="3" fill={props.htmlColor} />
        </SvgIcon>
    );
};

export default PointsHeaderIcon;
