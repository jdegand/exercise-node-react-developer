import React, { useState, useEffect } from 'react';
import { Commit } from '../models/Commit';
import { useParams } from 'react-router-dom';

function LastCommit() {
  const [lastCommit, setLastCommit] = useState({} as Commit);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { name } = useParams();

  useEffect(() => {
    setLoading(true);

    function fetchLastCommit(urlParameter: string | undefined) {
      if (urlParameter !== undefined) {
        fetch(
          `https://api.github.com/repos/${urlParameter?.replace(
            '-',
            '/'
          )}/branches`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Could not fetch last commit.`);
            }
            return response.json();
          })
          .then((data) => data[0].commit.sha)
          .then((sha) => {
            fetch(
              `https://api.github.com/repos/${name?.replace(
                '-',
                '/'
              )}/commits/${sha}`
            )
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`Could not fetch data.`);
                }
                return response.json();
              })
              .then((data) => {
                setError(null);
                setLastCommit(data.commit);
              });
          })
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      }
    }
    fetchLastCommit(name);
  }, [name]);

  return (
    <section>
      <h1>Last Commit Details</h1>
      {loading && <div>Loading...</div>}
      {!loading && Object.keys(lastCommit).length === 0 ? (
        <div>{error}</div>
      ) : (
        <div>
          <p>
            Date: <span>{lastCommit.author?.date}</span>
          </p>
          <h2>
            Author: <span>{lastCommit.author?.name}</span>
          </h2>
          <h3>
            Message: <span>{lastCommit?.message}</span>
          </h3>
        </div>
      )}
    </section>
  );
}

export default LastCommit;
