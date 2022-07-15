import React from 'react';
import Poke from '../Poke/index';

interface PokeListInterface {
    pokes: {
        name: string,
        url: string
    }[]
};

function PokeList(props: PokeListInterface) {
    const { pokes } = props
    return (
        <div className="c-poke-list__inner">
            {pokes.map((poke, index: number) => (
                <div className="c-poke-list__item" key={index}>
                    <h3 className="c-poke__name">{poke.name}</h3>
                    <Poke url={poke.url} />
                </div>
            ))}
        </div>
    );
}

export default PokeList;