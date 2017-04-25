import React from 'react';
const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
      <a
          onClick={(e) => {
            e.preventDefault();
            onClick()
          }}
          href="#">
        {children}
      </a>
  )
};

export default Link;
