import React from 'react';
import store from '../database/store';

function Artists() {
    return (
        <>
            <p>artists</p>
            {store.map(data => (
                <div id="card-body" key={data.id}>
                    <div className="card">
                        <p>userId: {data.userId}</p>
                        <p>title: {data.title}</p>
                        <p>body: {data.body}</p>
                    </div>
                </div> 
            ))}
            
        </>
    );
}

export default Artists;