import React, { useState, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { uniq } from "lodash";

import { KeyCodes } from "../../constants/keyCodes";

import { DropdownStyles, Option } from "./Styles";

const SelectDropdown = ({ options, deactivateDropdown, onChange }) => {
  const [isCreatingOption, setCreatingOption] = useState(false);
  console.log(onChange);
  return (
    <DropdownStyles>
      {options.map((option) => {
        return (
          <Option
            onClick={() => {
              onChange(option);
              deactivateDropdown(false);
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

export default SelectDropdown;
