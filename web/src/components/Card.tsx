import React from 'react';
import { Link } from 'react-router-dom';
import { Repo } from '../models/Repo';

interface CardProps {
  repo: Repo;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function Card(props: CardProps) {
  // need repo full_name for api request - '/' conflicts with react-router
  // could look into other urls included in repos data for alternatives in building api request url
  // had problem with child route :name so I added 'details' to route name

  return (
    <div key={props.repo.id} className="card" data-testid="card">
      <Link to={`details/${props.repo.full_name.replace('/', '-')}`}>
        <h1>
          Repo: <span className="repo-name">{props.repo.name}</span>
        </h1>
      </Link>
      <p>{props.repo.created_at}</p>
      {props.repo.description === null ? (
        <h2>No description, website, or topics provided.</h2>
      ) : (
        <h2>Description: {props.repo.description}</h2>
      )}
      <h3>Forks Count: {props.repo.forks_count}</h3>
      {props.searchTerm && (
        <button type="button" onClick={() => props.setSearchTerm('')}>
          Back to full list
        </button>
      )}
      <button
        type="button"
        onClick={() => props.setSearchTerm(props.repo.language)}
      >
        {props.repo.language}
      </button>
    </div>
  );
}

export default Card;

/*
// eslint-disable @typescript-eslint/no-unused-vars 
// eslint-disable no-console 
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Card(props: any) {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(null);
  const [markdown, setMarkdown] = useState('');
  const [lastCommit, setLastCommit] = useState({} as Commit);
  const [sha, setSha] = useState('');

  //console.log('props.repo', props.repo);
  //console.log('e', error);
  //console.log('m', markdown);

  // need to run the api request in function and run the function onclick
  // promise.all ?
  // add loading state const [loading, setLoading] = useState(true); !loading && <div>{lastCommit}</div>

  interface Commit {
    author: {
      name: string;
      email: string;
      date: string;
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    comment_count: number;
    committer: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    verification: {
      verified: boolean;
      reason: string;
      signature: null;
      payload: null;
    };
  }

  function fetchOnToggle() {
    fetch(`https://api.github.com/repos/${props.repo.full_name}/branches`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not fetch data.`);
        }
        return response.json();
      })
      .then((data) => {
        setSha(data[0].commit.sha);
      })
      .catch((err) => console.log(err.message));

    if (sha) {
      fetch(
        `https://api.github.com/repos/${props.repo.full_name}/commits/${sha}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Could not fetch data.`);
          }
          return response.json();
        })
        .then((data) => {
          //console.log('commit only', data.commit);
          setLastCommit(data.commit);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setToggle(true));
    }
  }

  return (
    <div key={props.repo.id} className="card">
      <h1>
        Name:{' '}
        <span className="repo-name" onClick={() => fetchOnToggle()}>
          {props.repo.name}
        </span>
      </h1>
      {props.repo.description === null ? (
        <h2>No description, website, or topics provided.</h2>
      ) : (
        <h2>Description: {props.repo.description}</h2>
      )}
      <h3>Forks Count: {props.repo.forks_count}</h3>
      {toggle && (
        <>
          <h4>Owner: {props.repo.owner.login}</h4>
          <h5>Last updated: {props.repo.updated_at}</h5>
          <section>
            <h1>
              Last Commit: <span>{lastCommit.author.date}</span>
            </h1>
            <h2>Author: {lastCommit.author.name}</h2>
            <h3>Message: {lastCommit.message}</h3>
          </section>
          <div>
            {error && <div>README could not be fetched.</div>}
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </>
      )}
      {props.searchTerm && (
        <button type="button" onClick={() => props.setSearchTerm('')}>
          Back to full list
        </button>
      )}
      <button
        type="button"
        onClick={() => props.setSearchTerm(props.repo.language)}
      >
        {props.repo.language}
      </button>
    </div>
  );
}

export default Card;
*/
