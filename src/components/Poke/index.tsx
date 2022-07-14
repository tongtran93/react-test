import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Poke.propTypes = {
    url: PropTypes.string,
};
  
Poke.defaultProps = {
    url: '',
}

function Poke(props: any) {
    const { url } = props;
    const [poke, setPoke] = useState(Object);

    useEffect(() => {
        async function fetchPoke() {
            try {
                const requestUrl = url;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                setPoke(responseJSON);
              } catch (error: any) {
                console.log("Failt to fetch poke: ", error.message);
              }
        }

        fetchPoke();
    }, [url]);

    return (
        <div className="c-poke__wrap">
            <div className="c-poke__avatar">
                <img src={poke.sprites?.other.dream_world.front_default} alt={poke.species?.name} />
            </div>
            <div className="c-poke__abilities">
                <span>Abilities:</span>
                <ul>
                    {poke.abilities && poke.abilities.map((skill: {ability: {name: string}}, index: number) => (
                        <li key={index}>{skill.ability.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Poke;