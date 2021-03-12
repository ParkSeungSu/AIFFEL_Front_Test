import React from 'react';
import _ from 'lodash';
import axois from 'axios';
function Pagination(props) {

    const { itemsCount, pageSize, currentPage, onPageChange } = props;

    const pageCount = Math.ceil(itemsCount / pageSize);
    console.log(itemsCount, pageSize, pageCount);

    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);

    return (
        <div className="pagi">
            <nav>
                <ul className="pagination">
                    {pages.map(page => (
                        <li key={page}
                            className={page === currentPage ? "page-item active" : "page-item"} // Bootstrap을 이용하여 현재 페이지를 시각적으로 표시
                            style={{ cursor: "pointer" }}>
                            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a> {/* 페이지 번호 클릭 이벤트 처리기 지정 */}
                        </li>

                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;