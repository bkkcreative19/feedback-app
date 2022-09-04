import React, { useRef, useState } from "react";
import {
  ActionButton,
  HeaderStyles,
  Sort,
  SortBy,
  SortDropdown,
  Span,
  Suggestions,
} from "./Styles";
import { Icon } from "./Icon";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useOnOutsideClick from "../../../shared/hooks/onOutsideClick";
import Dropdown from "../../../shared/components/Select/Dropdown";

export const Header = ({ feedbackLength, sortSelected, setSortSelected }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const deactivateDropdown = () => {
    setIsOpen(false);
  };
  // console.log(selected);
  useOnOutsideClick(dropdownRef, isOpen, deactivateDropdown);

  return (
    <HeaderStyles>
      <Icon />
      <Suggestions>{feedbackLength} Suggestions</Suggestions>
      <SortBy ref={dropdownRef}>
        <Span>Sort by :</Span>
        <Sort onClick={() => setIsOpen(true)}>
          {sortSelected}
          <IoIosArrowDown />
        </Sort>

        {isOpen && (
          <SortDropdown
            isInput={false}
            options={[
              "Most Upvotes",
              "Least Upvotes",
              "Most Comments",
              "Least Comments",
            ]}
            onChange={setSortSelected}
            deactivateDropdown={deactivateDropdown}
          />
        )}
      </SortBy>
      <ActionButton
        onClick={() => navigate("/create-feedback")}
        variant="purple"
      >
        + Add Feedback
      </ActionButton>
    </HeaderStyles>
  );
};
