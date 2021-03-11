import React, { useEffect, useState } from 'react';
import Pagination from '../component/Pagination';
import { paginate } from '../component/Paginate';
function ForumPages() {
    const [forums, setForums] = useState({});
    const pagePer = 5;
    const currentPage = 1;
    useEffect(() => {
        fetch('http://localhost:5000/forum')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(typeof data)
                setForums(data);
            });
    }, []);

    const forumsArray = Array.from(forums);

    const pagedForums = paginate(forumsArray, currentPage, pagePer);

    const count = forums.length;
    if (count === 0)
        return <p>정보가 없습니다.</p>

    const handlePageChange = (page) => {
        setForums({ forums, currentPage: page });
    }

    return (
        <>
            <p>{count} 개의 글이 있습니다.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Tag</th>
                    </tr>
                </thead>
                <tbody>
                    {pagedForums.map(forum =>
                        <tr key={forum.id}>
                            <td>{forum.id}</td>
                            <td>{forum.title}</td>
                            <td>{forum.tag.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <Pagination
                itemsCount={count}
                pageSize={pagePer}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />

        </>
    );
}

export default ForumPages;