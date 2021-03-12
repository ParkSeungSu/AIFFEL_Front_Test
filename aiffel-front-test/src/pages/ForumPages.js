import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../component/Pagination';
import { paginate } from '../component/Paginate';
import { duration } from '@material-ui/core/styles/transitions';
function ForumPages(prop) {
    const [dummy, setDummy] = useState([]);

    console.log(prop.setFroumData);

    useEffect(() => {
        fetch('http://localhost:5000/forum')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDummy(JSON.parse(JSON.stringify(data)));
            });
    }, []);
    const dummyArray = Array.from(dummy).slice();
    console.log(dummyArray);
    const [forums, setForums] = useState({
        data: '',
        pageSize: 5,
        currentPage: 1
    });
    console.log(forums);
    const handlePageChange = (page) => {
        setForums({ ...dummyArray, pageSize: 5, currentPage: page });
    };

    const { data, pageSize, currentPage } = forums;
    const pagedForums = paginate(dummyArray, currentPage, pageSize);
    const count = dummyArray.length;

    console.log(count);

    console.log(pagedForums);

    function create() {
        window.location.href = "/create"
    }

    if (count === 0)
        return <p>정보가 없습니다.</p>

    return (
        <div className="forumList">
            <p>{count} 개의 글이 있습니다.</p>
            <div className="CreateBT">
                <button onClick={create}>✏</button>
            </div>
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
                            <td> <Link onClick={() => prop.setFroumData(dummyArray)} to={`/forum/${forum.id}`}>{forum.id}</Link></td>
                            <td> <Link onClick={() => prop.setFroumData(dummyArray)} to={`/forum/${forum.id}`}>{forum.title}</Link></td>
                            <td> {forum['tag'].name}</td>
                        </tr>

                    )}
                </tbody>
            </table>

            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />

        </div>
    );
}

export default ForumPages;