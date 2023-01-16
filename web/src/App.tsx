import React, { useEffect, useState } from 'react';
import Repos from './components/Repos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepoDetail from './components/RepoDetail';
import { Repo } from './models/Repo';

import './App.css';

export function App() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:4000/repos')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Could not fetch data.  ${response.status} ${response.statusText}`
          );
        }

        return response.json();
      })
      .then((data) => {
        setError(null);

        // sort mutates
        const sortedRepos = data.repos
          .slice()
          .sort(function (x: Repo, y: Repo) {
            const date1 = new Date(x.created_at);
            const date2 = new Date(y.created_at);
            return date2.getTime() - date1.getTime();
          });

        setRepos(sortedRepos);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Repos repos={repos} error={error} loading={loading} />}
          />
          <Route path="/details/:name" element={<RepoDetail />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
