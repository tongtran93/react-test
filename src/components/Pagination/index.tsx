import React from 'react';
import PropTypes from 'prop-types';

interface PaginationComponent {
    pagination: any,
    onPageChange: Function
};

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props: PaginationComponent) {
    const {pagination, onPageChange} = props;
    const {next, previous} = pagination;

    function handlePageChange(newPage: string, type: string) {
        if (onPageChange) {
            onPageChange(newPage, type);
        }
    }

    return (
        <div className="c-pagination">
            <button
                disabled={previous === null}
                onClick={() => handlePageChange(previous, "prev")}>
                Prev
            </button>

            <button
                disabled={next === null}
                onClick={() => handlePageChange(next, "next")}>
                Next
            </button>
        </div>
    );
}

export default Pagination;