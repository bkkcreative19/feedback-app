import React, { useState, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { uniq } from "lodash";

import { KeyCodes } from "../../constants/keyCodes";

import { DropdownStyles, Option } from "./Styles";

const defaultProps = {
  isInput: true,
};

export const DropDown = ({
  options,
  deactivateDropdown,
  onChange,
  isInput,
  setOption,
}) => {
  return (
    <DropdownStyles isInput={isInput}>
      {options.map((option) => {
        return (
          <Option
            onClick={() => {
              onChange(option);
              deactivateDropdown(false);

              // !isInput && setOption(option);
            }}
            key={option}
          >
            {option}
          </Option>
        );
      })}
    </DropdownStyles>
  );
};

// export default SelectDropdown;

DropDown.defaultProps = defaultProps;
