import React, { useState } from 'react';
import Card from './Card';
import { Repo } from '../models/Repo';

interface RepoProps {
  repos: Repo[];
  error?: any;
  loading: boolean;
}

function Repos(props: RepoProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div>
      {props.error && <div data-testid="repos-error">{props.error}</div>}
      {props.loading && (
        <div data-testid="repos-loading">Fetching repos...</div>
      )}
      {props.repos.length > 0 && !props.error && searchTerm
        ? props.repos
            .filter((repo: Repo) => repo.language === searchTerm)
            .map((repo: Repo) => {
              return (
                <Card
                  key={repo.id}
                  repo={repo}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              );
            })
        : props.repos.map((repo: Repo) => {
            return (
              <Card
                key={repo.id}
                repo={repo}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            );
          })}
    </div>
  );
}

export default Repos;

/*
{
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
        credentials: 'same-origin',
      },
}
*/

/*
{repos.length > 0 && searchTerm
        ? repos
            .filter((repo: any) => repo.language === searchTerm)
            .map((repo: any) => {
              return (
                <div key={repo.id} className="card">
                  <h1>{repo.name}</h1>
                  {repo.description === null ? (
                    <h2>No description, website, or topics provided.</h2>
                  ) : (
                    <h2>{repo.description}</h2>
                  )}
                  <h3>{repo.forks_count}</h3>
                  <button type="button" onClick={() => setSearchTerm('')}>
                    Back to full list
                  </button>
                  <button
                    type="button"
                    onClick={() => setSearchTerm(repo.language)}
                  >
                    {repo.language}
                  </button>
                </div>
              );
            })
        : repos.map((repo: any) => {
            return (
              <div key={repo.id} className="card">
                <h1>{repo.name}</h1>
                {repo.description === null ? (
                  <h2>No description, website, or topics provided.</h2>
                ) : (
                  <h2>{repo.description}</h2>
                )}
                <h3>{repo.forks_count}</h3>
                <button
                  type="button"
                  onClick={() => setSearchTerm(repo.language)}
                >
                  {repo.language}
                </button>
              </div>
            );
          })}
*/

/*
  // need try and catch and error state

  /*
   const fetchRepos = async () => {
    setStatus('Loading');

    try {
    fetch('http://localhost:4000/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data.repos)); // console.log('data', data)

      setStatus('SUCCESS');
    } catch {
      setStatus('ERROR');
    }
  }

  fetchRepos();
*/

/*
import React, { useState, useEffect } from 'react';
import Card from './Card';

function Repos() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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

        //console.log('repos before sort', data.repos);

        // sort mutates
        const sortedRepos = data.repos.slice().sort(function (x: any, y: any) {
          const date1 = new Date(x.created_at); //updated_at
          const date2 = new Date(y.created_at);
          return date2.getTime() - date1.getTime();
        });

        // console.log('repos', data.repos);
        // console.log('sortedRepos', sortedRepos);

        setRepos(sortedRepos);
      })
      .catch((err) => setError(err.message));
  }, []);

  //console.log('repos', repos);
  //console.log('searchTerm', searchTerm);

  return (
    <div>
      {error && <div>{error}</div>}
      {repos.length > 0 && !error && searchTerm
        ? repos
            .filter((repo: any) => repo.language === searchTerm)
            .map((repo: any) => {
              return (
                <Card
                  key={repo.id}
                  repo={repo}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              );
            })
        : repos.map((repo: any) => {
            return (
              <Card
                key={repo.id}
                repo={repo}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            );
          })}
    </div>
  );
}

export default Repos;
*/
