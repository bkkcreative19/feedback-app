import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import useOnOutsideClick from "../../hooks/onOutsideClick";
import { KeyCodes } from "../../constants/keyCodes";
import Icon from "../Icon";
import Dropdown from "./Dropdown";
import { DownArrow as Hey } from "../../../assets/shared/icon-arrow-down.svg";
import { IoIosArrowDown } from "react-icons/io";
import { SelectedInput, StyledSelect } from "./Styles";

const Select = ({ name, options, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef();

  const deactivateDropdown = () => {
    setIsOpen(false);
  };

  useOnOutsideClick(selectRef, isOpen, deactivateDropdown);
  return (
    <StyledSelect ref={selectRef}>
      <SelectedInput>{props.value}</SelectedInput>
      <IoIosArrowDown
        onClick={() => setIsOpen(!isOpen)}
        cursor="pointer"
        color="#4661E6"
        size="1.5em"
      />
      {isOpen && (
        <Dropdown
          deactivateDropdown={deactivateDropdown}
          onChange={props.onChange}
          options={options}
        />
      )}
    </StyledSelect>
  );
};

export default Select;
