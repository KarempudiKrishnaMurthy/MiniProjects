import React from 'react';

export default function Button({ name, onClick }) {
  return (
    <button className="button" onClick={() => onClick(name)}>
      {name}
    </button>
  );
}
