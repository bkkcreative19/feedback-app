import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import TextareaAutoSize from "react-textarea-autosize";

import { StyledTextarea } from "./Styles";

const propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
  minRows: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  invalid: false,
  minRows: 2,
  value: undefined,
  onChange: () => {},
};

const Textarea = forwardRef(
  ({ className, invalid, onChange, ...textareaProps }, ref) => (
    <StyledTextarea
      onChange={(event) => onChange(event.target.value, event)}
      className={className}
      invalid={invalid}
      value={textareaProps.value}
    >
      {/* <TextareaAutoSize
        {...textareaProps}
        onChange={(event) => onChange(event.target.value, event)}
        inputref={ref || undefined}
      /> */}
    </StyledTextarea>
  )
);

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
