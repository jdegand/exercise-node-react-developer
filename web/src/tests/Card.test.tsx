/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import { Repo } from '../models/Repo';
import { BrowserRouter } from 'react-router-dom';

const mockCard: Repo = {
  id: 204345544,
  node_id: 'MDEwOlJlcG9zaXRvcnkyMDQzNDU1NDQ=',
  name: 'ambiguous-class-name-detector',
  full_name: 'silverorange/ambiguous-class-name-detector',
  private: false,
  owner: {
    login: 'silverorange',
    id: 1337129,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjEzMzcxMjk=',
    avatar_url: 'https://avatars.githubusercontent.com/u/1337129?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/silverorange',
    html_url: 'https://github.com/silverorange',
    followers_url: 'https://api.github.com/users/silverorange/followers',
    following_url:
      'https://api.github.com/users/silverorange/following{/other_user}',
    gists_url: 'https://api.github.com/users/silverorange/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/silverorange/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/silverorange/subscriptions',
    organizations_url: 'https://api.github.com/users/silverorange/orgs',
    repos_url: 'https://api.github.com/users/silverorange/repos',
    events_url: 'https://api.github.com/users/silverorange/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/silverorange/received_events',
    type: 'Organization',
    site_admin: false,
  },
  html_url: 'https://github.com/silverorange/ambiguous-class-name-detector',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/silverorange/ambiguous-class-name-detector',
  forks_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/forks',
  keys_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/collaborators{/collaborator}',
  teams_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/teams',
  hooks_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/hooks',
  issue_events_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/issues/events{/number}',
  events_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/events',
  assignees_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/branches{/branch}',
  tags_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/tags',
  blobs_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/git/blobs{/sha}',
  git_tags_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/git/tags{/sha}',
  git_refs_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/git/refs{/sha}',
  trees_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/git/trees{/sha}',
  statuses_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/statuses/{sha}',
  languages_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/languages',
  stargazers_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/stargazers',
  contributors_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/contributors',
  subscribers_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/subscribers',
  subscription_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/subscription',
  commits_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/compare/{base}...{head}',
  merges_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/merges',
  archive_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/{archive_format}{/ref}',
  downloads_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/downloads',
  issues_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/issues{/number}',
  pulls_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/notifications{?since,all,participating}',
  labels_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/labels{/name}',
  releases_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/releases{/id}',
  deployments_url:
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/deployments',
  created_at: '2019-08-25T20:20:57Z',
  updated_at: '2019-08-26T15:38:37Z',
  pushed_at: '2019-08-26T15:40:00Z',
  git_url: 'git://github.com/silverorange/ambiguous-class-name-detector.git',
  ssh_url: 'git@github.com:silverorange/ambiguous-class-name-detector.git',
  clone_url:
    'https://github.com/silverorange/ambiguous-class-name-detector.git',
  svn_url: 'https://github.com/silverorange/ambiguous-class-name-detector',
  homepage: null,
  size: 24,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'PHP',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  has_discussions: false,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz',
  },
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [],
  visibility: 'public',
  forks: 1,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master',
};

// setSearchTerm - jestSpyOn

describe('Card rendered', () => {
  test('Card is in document', async () => {
    render(
      <BrowserRouter>
        <Card
          repo={mockCard}
          searchTerm={''}
          setSearchTerm={() => 'Need a mock'}
        />
      </BrowserRouter>
    );
    const repo = screen.getByTestId('card');
    expect(repo).toBeInTheDocument();
  });

  test('No searchTerm exists - back button is not displayed', async () => {
    render(
      <BrowserRouter>
        <Card
          repo={mockCard}
          searchTerm={''}
          setSearchTerm={() => 'Need a mock'}
        />
      </BrowserRouter>
    );
    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(1);
  });

  test('When searchTerm exists - back button is displayed', async () => {
    render(
      <BrowserRouter>
        <Card
          repo={mockCard}
          searchTerm={'PHP'}
          setSearchTerm={() => 'Need a mock'}
        />
      </BrowserRouter>
    );
    const backButton = screen.getByText('Back to full list');
    expect(backButton).toBeInTheDocument();
  });
});
