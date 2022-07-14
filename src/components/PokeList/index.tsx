import React from 'react';
import PropTypes from 'prop-types';
import Poke from '../Poke/index';

PokeList.propTypes = {
    pokes: PropTypes.array,
};

PokeList.defaultProps = {
    pokes: [],
}

function PokeList(props: any) {
    const { pokes } = props
    return (
        <div className="c-poke-list__inner">
            {pokes.map((poke: {name: string, url: string}, index: number) => (
                <div className="c-poke-list__item" key={index}>
                    <h3 className="c-poke__name">{poke.name}</h3>
                    <Poke url={poke.url} />
                </div>
            ))}
        </div>
    );
}

export default PokeList;