import React from 'react';
import './style.css';

import Character from './Character';
import { connect } from 'react-redux';

const Characters = ({ characters = [] }) => {
  return (
    <div class="crawl">
      {' '}
      <section className="Characters">
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </section>
    </div>
  );
};

export default connect(({ characters }) => ({ characters }))(Characters);
