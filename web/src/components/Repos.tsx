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
