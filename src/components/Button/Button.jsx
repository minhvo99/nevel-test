import React from 'react';
import Icon from '../Icon/Icon';
import './Button.scss';

const Button = (props) => {
  const severity = props.severity ? 'btn-' + props.severity : '';
  const label = props.label ? 'btn__txt' : 'btn__raised';
  const rounded = props.rounded ? 'rounded' : '';
  const icon = props?.icon ? 'btn__icon' : '';

  return (
    <button
      className={`btn ${severity} ${rounded} ${icon}`}
      onClick={props?.onClick ? () => props.onClick() : null}
      disabled={props?.disabled}
    >
      {props?.icon ? (
        <Icon icon={props?.icon} />
      ) : (
        <span className={`${label}`}>{props?.label}</span>
      )}
    </button>
  );
};

export default Button;
