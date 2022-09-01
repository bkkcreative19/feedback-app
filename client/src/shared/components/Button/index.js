import React, { forwardRef } from "react";
import { StyledButton } from "./Styles";

export const Button = forwardRef(
  (
    {
      children,
      variant,
      //   icon,
      //   iconSize,
      //   disabled,
      //   isWorking,
      //   onClick,
      ...buttonProps
    },
    ref
  ) => {
    // const handleClick = () => {
    //   if (!disabled && !isWorking) {
    //     onClick();
    //   }
    // };

    return (
      <StyledButton
        {...buttonProps}
        onClick={handleClick}
        variant={variant}
        ref={ref}
      >
        {/* {isWorking && <StyledSpinner size={26} color={getIconColor(variant)} />}

        {!isWorking && icon && typeof icon === "string" ? (
          <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
        ) : (
          icon
        )} */}
        {children && <Text>{children}</Text>}
      </StyledButton>
    );
  }
);
