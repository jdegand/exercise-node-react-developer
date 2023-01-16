import { Link, useParams } from 'react-router-dom';
import LastCommit from './LastCommit';
import Markdown from './Markdown';

function RepoDetail() {
  // passing repos to RepoDetail component as props - you can keep old data of card along with new data
  // const previousData = props.repos.filter((repo: Repo) => repo.name === name);
  // carrying over the data is error-prone and not good - may need another fetch request to retrieve same data
  const { name } = useParams();

  return (
    <div className="card">
      <div className="card-top-row">
        <h1>
          Name: <span className="repo-name">{name}</span>
        </h1>
        <Link to="/">Back</Link>
      </div>
      <LastCommit />
      <Markdown />
    </div>
  );
}

export default RepoDetail;

/*
    <div key={previousData[0].id} className="card">
      <h1>
        Name: <span className="repo-name">{previousData[0].name}</span>
      </h1>
      {previousData[0].repo.description === null ? (
        <h2>No description, website, or topics provided.</h2>
      ) : (
        <h2>Description: {previousData[0].description}</h2>
      )}
      <h3>Forks Count: {previousData[0].forks_count}</h3>
      <Link to="/">Back</Link>
    </div>
*/

/*
// async / await implementation

  // make name a parameter ?
  async function fetchSha(urlParameter: string | undefined): Promise<string> {
    const response = await fetch(
      `https://api.github.com/repos/${urlParameter?.replace('-', '/')}/branches`
    );
    const data = await response.json();
    return data[0].commit.sha;
  }

  (async () => {
    console.log('iife', await fetchSha(name));
  })();
  
  async function fetchMd(urlParameter: string): Promise<string> {
    const response = await fetch(
      `https://raw.githubusercontent.com/${name?.replace(
        '-',
        '/'
      )}/master/README.md`
    );
    const data = await response.text();
    return data;
  }
*/

/*
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Commit } from '../models/Commit';

// testing ReactMarkdown needs to be mocked

function RepoDetail() {
  // passing repos to RepoDetail component as props - you can keep old data of card along with new data
  // const previousData = props.repos.filter((repo: any) => repo.name === name);
  // carrying over the data is error-prone and not good - may need another fetch request to same data
  const { name } = useParams();

  const [commitError, setCommitError] = useState(null);
  const [markdownError, setMarkdownError] = useState(null);
  const [markdown, setMarkdown] = useState('');
  const [lastCommit, setLastCommit] = useState({} as Commit);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    //setLoading(true);
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
                setCommitError(null);
                setLastCommit(data.commit);
              });
          })
          .catch((err) => setCommitError(err.message));
      }
    }

    function fetchMarkdown(urlParameter: string | undefined) {
      if (urlParameter !== undefined) {
        fetch(
          `https://raw.githubusercontent.com/${urlParameter?.replace(
            '-',
            '/'
          )}/master/README.md`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Could not fetch markdown.`);
            }

            return response.text();
          })
          .then((data) => {
            setMarkdownError(null);
            setMarkdown(data);
          })
          .catch((err) => setMarkdownError(err.message));
      }
    }

    fetchLastCommit(name);
    fetchMarkdown(name);

    //Promise.all([fetchLastCommit(name), fetchMarkdown(name)]);
  }, [name]);

  // Object.keys creates problem with conditional rendering - when you want to use a loading state
  // can't wrap whole jsx body and use ternary with loading

  return (
    <div className="card">
      <div className="card-top-row">
        <h1>
          Name: <span className="repo-name">{name}</span>
        </h1>
        <Link to="/">Back</Link>
      </div>
      {Object.keys(lastCommit).length === 0 ? (
        <section>
          <h1>Last Commit Details</h1>
          <div>{commitError}</div>
        </section>
      ) : (
        <section>
          <h1>Last Commit Details</h1>
          <p>
            Date: <span>{lastCommit.author?.date}</span>
          </p>
          <h2>Author: {lastCommit.author?.name}</h2>
          <h3>Message: {lastCommit?.message}</h3>
        </section>
      )}
      <section className="card-readme-section">
        <h1>Repo's README.md</h1>
        {markdownError && <div>{markdownError}</div>}
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </div>
  );
}

export default RepoDetail;
*/
