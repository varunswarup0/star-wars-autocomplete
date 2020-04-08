import React from 'react';
import './style.css';

const Character = ({ character }) => {
  const { id, name } = character;
  return (
    <p>
      <article className="Character">
        <a href={`https://star-wars-characters.glitch.me/api/characters/${id}`}>
          {name}
        </a>
      </article>
    </p>
  );
};

export default Character;
