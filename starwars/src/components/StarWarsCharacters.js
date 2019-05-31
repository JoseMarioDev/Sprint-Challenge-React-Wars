import React from 'react';
import Character from './Character';

const StarWarsCharacters = props => {
  return props.StarWarsCharacters.map(character => (
    <Character Character={character} />
  ));
};

export default StarWarsCharacters;
