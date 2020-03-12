import React from 'react';

export default function Banner({children, title, subtitle}) {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <h2 className="text-title">{title}</h2>
        <h2 className="text-title">{subtitle}</h2>
        {children}
      </div>
    </div>
  )
}
