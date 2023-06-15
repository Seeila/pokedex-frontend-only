import React from "react";
import defaultClasses from "./pill.module.css";

const Pill: React.FC<{ text: string; color?: string }> = ({ text }) => {
    return <div className={defaultClasses.root}>{text}</div>;
};

export default Pill;
