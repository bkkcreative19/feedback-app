import React, { forwardRef } from "react";
import { StyledButton, Text } from "./Styles";
import PropTypes from "prop-types";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "purple",
    "darkBlue",
    "red",
    "lightBlue",
    "empty",
    "textPrimary",
  ]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconSize: PropTypes.number,
  disabled: PropTypes.bool,
  isWorking: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  children: undefined,
  variant: "purple",
  icon: undefined,
  iconSize: 18,
  disabled: false,
  isWorking: false,
  onClick: () => {},
};

export const Button = forwardRef(
  (
    {
      children,
      variant,
      //   icon,
      //   iconSize,
      disabled,
      isWorking,
      onClick,
      ...buttonProps
    },
    ref
  ) => {
    const handleClick = () => {
      if (!disabled && !isWorking) {
        onClick();
      }
    };

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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
