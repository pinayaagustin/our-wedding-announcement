'use client'
import { useEffect, useState } from 'react';

async function fetchData(setData) {
    const response = await fetch('/api/komentar');
    const data = await response.json();
    setData(data);
}

export default function Test() {
    const [dataComment, setDataComment] = useState(null);
    
    useEffect(() => {
        fetchData(setDataComment);
    }, []);

    return (
        <div>
            <button onClick={() => fetchData(setDataComment)}>Refresh Data</button>
            {dataComment ? (
                dataComment.map((data, index) => (
                    <div key={index}>{data.comment}</div>
                ))
                ) : "Loading..."}
        </div>
    )
}
