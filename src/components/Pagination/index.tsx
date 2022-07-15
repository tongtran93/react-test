import React from 'react';

interface PaginationInterface {
    pagination: any,
    onPageChange: Function
};

function Pagination(props: PaginationInterface) {
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
                disabled={!previous}
                onClick={() => handlePageChange(previous, "prev")}>
                Prev
            </button>

            <button
                disabled={!next}
                onClick={() => handlePageChange(next, "next")}>
                Next
            </button>
        </div>
    );
}

export default Pagination;