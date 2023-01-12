import React from "react";
import { LordIcon, LordIconProps } from "../lordicon";

const CustomLordIcon = ({src, trigger, colors, size, delay}:LordIconProps) => {
  return (
    <LordIcon
      src={src}
      trigger={trigger}
      colors={colors}
      size={size}
      delay={delay}
    />
  );
};

export default CustomLordIcon;
