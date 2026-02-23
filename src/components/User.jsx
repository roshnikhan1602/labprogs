import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';

function User() {
    const { id } = useParams();
    return <h2>User ID: {id}</h2>;
}

export default function App() {
    return (
        <Router>
            <nav>
                <Link to="/users/101">User 101</Link> | 
                <Link to="/users/202">User 202</Link> 
            </nav>

            <Routes>
                <Route path="/users/:id" element={<User />} />
            </Routes>
        </Router>
    );
}
