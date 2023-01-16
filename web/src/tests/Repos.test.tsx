/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Repos from '../components/Repos';
import { Repo } from '../models/Repo';
import { BrowserRouter } from 'react-router-dom';

// problem adding data/repos.json entries to mockData
// that data is only a partial of Repo type
// changed mockData to Array<Partial<Repo>>>
// that has cascading effect in component files and requires many changes to accomodate
// github data response changed since this exercise created?
// convert api request to different response or use less restrictive repo interface from api folder

const mockData: Repo[] = [
  {
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
  },
  {
    id: 140745386,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNDA3NDUzODY=',
    name: 'accessible-google-places-autocomplete',
    full_name: 'silverorange/accessible-google-places-autocomplete',
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
    html_url:
      'https://github.com/silverorange/accessible-google-places-autocomplete',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete',
    forks_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/forks',
    keys_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/teams',
    hooks_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/accessible-google-places-autocomplete/deployments',
    created_at: '2018-07-12T17:34:53Z',
    updated_at: '2021-05-27T16:25:27Z',
    pushed_at: '2018-10-24T21:10:22Z',
    git_url:
      'git://github.com/silverorange/accessible-google-places-autocomplete.git',
    ssh_url:
      'git@github.com:silverorange/accessible-google-places-autocomplete.git',
    clone_url:
      'https://github.com/silverorange/accessible-google-places-autocomplete.git',
    svn_url:
      'https://github.com/silverorange/accessible-google-places-autocomplete',
    homepage: null,
    size: 383,
    stargazers_count: 3,
    watchers_count: 3,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 4,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 1,
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
    forks: 4,
    open_issues: 1,
    watchers: 3,
    default_branch: 'master',
  },
  {
    id: 32468968,
    node_id: 'MDEwOlJlcG9zaXRvcnkzMjQ2ODk2OA==',
    name: 'amqp-media-duration',
    full_name: 'silverorange/amqp-media-duration',
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
    html_url: 'https://github.com/silverorange/amqp-media-duration',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/silverorange/amqp-media-duration',
    forks_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/forks',
    keys_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/teams',
    hooks_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/amqp-media-duration/deployments',
    created_at: '2015-03-18T15:59:50Z',
    updated_at: '2021-09-13T15:30:08Z',
    pushed_at: '2021-09-13T17:14:45Z',
    git_url: 'git://github.com/silverorange/amqp-media-duration.git',
    ssh_url: 'git@github.com:silverorange/amqp-media-duration.git',
    clone_url: 'https://github.com/silverorange/amqp-media-duration.git',
    svn_url: 'https://github.com/silverorange/amqp-media-duration',
    homepage: null,
    size: 35,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 6,
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
    forks: 6,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 17527904,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNzUyNzkwNA==',
    name: 'Building',
    full_name: 'silverorange/Building',
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
    html_url: 'https://github.com/silverorange/Building',
    description: 'Basic CMS Framework for silverorange/Site',
    fork: false,
    url: 'https://api.github.com/repos/silverorange/Building',
    forks_url: 'https://api.github.com/repos/silverorange/Building/forks',
    keys_url:
      'https://api.github.com/repos/silverorange/Building/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/Building/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/silverorange/Building/teams',
    hooks_url: 'https://api.github.com/repos/silverorange/Building/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/Building/issues/events{/number}',
    events_url: 'https://api.github.com/repos/silverorange/Building/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/Building/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/Building/branches{/branch}',
    tags_url: 'https://api.github.com/repos/silverorange/Building/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/Building/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/Building/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/Building/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/Building/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/Building/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/silverorange/Building/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/Building/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/Building/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/Building/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/Building/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/Building/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/Building/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/Building/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/Building/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/Building/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/Building/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/silverorange/Building/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/Building/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/silverorange/Building/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/Building/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/silverorange/Building/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/Building/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/Building/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/silverorange/Building/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/Building/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/Building/deployments',
    created_at: '2014-03-07T21:25:34Z',
    updated_at: '2022-04-22T14:08:39Z',
    pushed_at: '2022-08-18T19:33:09Z',
    git_url: 'git://github.com/silverorange/Building.git',
    ssh_url: 'git@github.com:silverorange/Building.git',
    clone_url: 'https://github.com/silverorange/Building.git',
    svn_url: 'https://github.com/silverorange/Building',
    homepage: null,
    size: 96,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 10,
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
    forks: 10,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 16284485,
    node_id: 'MDEwOlJlcG9zaXRvcnkxNjI4NDQ4NQ==',
    name: 'Castanet',
    full_name: 'silverorange/Castanet',
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
    html_url: 'https://github.com/silverorange/Castanet',
    description: 'Podcast feed framework',
    fork: false,
    url: 'https://api.github.com/repos/silverorange/Castanet',
    forks_url: 'https://api.github.com/repos/silverorange/Castanet/forks',
    keys_url:
      'https://api.github.com/repos/silverorange/Castanet/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/Castanet/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/silverorange/Castanet/teams',
    hooks_url: 'https://api.github.com/repos/silverorange/Castanet/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/Castanet/issues/events{/number}',
    events_url: 'https://api.github.com/repos/silverorange/Castanet/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/Castanet/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/Castanet/branches{/branch}',
    tags_url: 'https://api.github.com/repos/silverorange/Castanet/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/Castanet/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/Castanet/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/Castanet/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/Castanet/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/Castanet/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/silverorange/Castanet/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/Castanet/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/Castanet/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/Castanet/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/Castanet/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/Castanet/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/Castanet/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/Castanet/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/Castanet/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/Castanet/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/Castanet/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/silverorange/Castanet/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/Castanet/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/silverorange/Castanet/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/Castanet/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/silverorange/Castanet/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/Castanet/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/Castanet/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/silverorange/Castanet/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/Castanet/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/Castanet/deployments',
    created_at: '2014-01-27T16:17:59Z',
    updated_at: '2019-06-21T18:10:14Z',
    pushed_at: '2018-02-28T19:12:04Z',
    git_url: 'git://github.com/silverorange/Castanet.git',
    ssh_url: 'git@github.com:silverorange/Castanet.git',
    clone_url: 'https://github.com/silverorange/Castanet.git',
    svn_url: 'https://github.com/silverorange/Castanet',
    homepage: '',
    size: 58,
    stargazers_count: 3,
    watchers_count: 3,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 7,
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
    forks: 7,
    open_issues: 0,
    watchers: 3,
    default_branch: 'master',
  },
  {
    id: 12111160,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjExMTE2MA==',
    name: 'blorgy',
    full_name: 'silverorange/blorgy',
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
    html_url: 'https://github.com/silverorange/blorgy',
    description: 'Weblog built on Blorg',
    fork: false,
    url: 'https://api.github.com/repos/silverorange/blorgy',
    forks_url: 'https://api.github.com/repos/silverorange/blorgy/forks',
    keys_url: 'https://api.github.com/repos/silverorange/blorgy/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/blorgy/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/silverorange/blorgy/teams',
    hooks_url: 'https://api.github.com/repos/silverorange/blorgy/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/blorgy/issues/events{/number}',
    events_url: 'https://api.github.com/repos/silverorange/blorgy/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/blorgy/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/blorgy/branches{/branch}',
    tags_url: 'https://api.github.com/repos/silverorange/blorgy/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/blorgy/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/blorgy/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/blorgy/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/blorgy/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/blorgy/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/silverorange/blorgy/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/blorgy/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/blorgy/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/blorgy/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/blorgy/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/blorgy/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/blorgy/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/blorgy/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/blorgy/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/blorgy/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/blorgy/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/silverorange/blorgy/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/blorgy/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/silverorange/blorgy/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/blorgy/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/silverorange/blorgy/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/blorgy/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/blorgy/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/silverorange/blorgy/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/blorgy/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/blorgy/deployments',
    created_at: '2013-08-14T14:41:52Z',
    updated_at: '2022-02-22T19:22:01Z',
    pushed_at: '2022-02-22T19:21:57Z',
    git_url: 'git://github.com/silverorange/blorgy.git',
    ssh_url: 'git@github.com:silverorange/blorgy.git',
    clone_url: 'https://github.com/silverorange/blorgy.git',
    svn_url: 'https://github.com/silverorange/blorgy',
    homepage: '',
    size: 3935,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 5,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 5,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 11538540,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTUzODU0MA==',
    name: 'amqp-pdf-to-text',
    full_name: 'silverorange/amqp-pdf-to-text',
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
    html_url: 'https://github.com/silverorange/amqp-pdf-to-text',
    description: 'AMQP worker to convert PDF to plain-text',
    fork: false,
    url: 'https://api.github.com/repos/silverorange/amqp-pdf-to-text',
    forks_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/forks',
    keys_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/teams',
    hooks_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/branches{/branch}',
    tags_url: 'https://api.github.com/repos/silverorange/amqp-pdf-to-text/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/amqp-pdf-to-text/deployments',
    created_at: '2013-07-19T22:36:48Z',
    updated_at: '2021-09-13T15:30:13Z',
    pushed_at: '2021-09-13T17:04:22Z',
    git_url: 'git://github.com/silverorange/amqp-pdf-to-text.git',
    ssh_url: 'git@github.com:silverorange/amqp-pdf-to-text.git',
    clone_url: 'https://github.com/silverorange/amqp-pdf-to-text.git',
    svn_url: 'https://github.com/silverorange/amqp-pdf-to-text',
    homepage: '',
    size: 32,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 6,
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
    forks: 6,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 11500526,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTUwMDUyNg==',
    name: 'botr-api',
    full_name: 'silverorange/botr-api',
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
    html_url: 'https://github.com/silverorange/botr-api',
    description: "PEAR-packaged version of Bits On The Run's API.",
    fork: false,
    url: 'https://api.github.com/repos/silverorange/botr-api',
    forks_url: 'https://api.github.com/repos/silverorange/botr-api/forks',
    keys_url:
      'https://api.github.com/repos/silverorange/botr-api/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/botr-api/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/silverorange/botr-api/teams',
    hooks_url: 'https://api.github.com/repos/silverorange/botr-api/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/botr-api/issues/events{/number}',
    events_url: 'https://api.github.com/repos/silverorange/botr-api/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/botr-api/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/botr-api/branches{/branch}',
    tags_url: 'https://api.github.com/repos/silverorange/botr-api/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/botr-api/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/botr-api/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/botr-api/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/botr-api/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/botr-api/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/silverorange/botr-api/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/botr-api/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/botr-api/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/botr-api/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/botr-api/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/botr-api/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/botr-api/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/botr-api/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/botr-api/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/botr-api/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/botr-api/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/silverorange/botr-api/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/botr-api/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/silverorange/botr-api/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/botr-api/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/silverorange/botr-api/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/botr-api/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/botr-api/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/silverorange/botr-api/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/botr-api/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/botr-api/deployments',
    created_at: '2013-07-18T10:48:11Z',
    updated_at: '2020-10-08T08:40:08Z',
    pushed_at: '2018-02-28T19:12:19Z',
    git_url: 'git://github.com/silverorange/botr-api.git',
    ssh_url: 'git@github.com:silverorange/botr-api.git',
    clone_url: 'https://github.com/silverorange/botr-api.git',
    svn_url: 'https://github.com/silverorange/botr-api',
    homepage: '',
    size: 26,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 3,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: 'bsd-3-clause',
      name: 'BSD 3-Clause "New" or "Revised" License',
      spdx_id: 'BSD-3-Clause',
      url: 'https://api.github.com/licenses/bsd-3-clause',
      node_id: 'MDc6TGljZW5zZTU=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 3,
    open_issues: 1,
    watchers: 1,
    default_branch: 'master',
  },
  {
    id: 11500519,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTUwMDUxOQ==',
    name: 'blorg',
    full_name: 'silverorange/blorg',
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
    html_url: 'https://github.com/silverorange/blorg',
    description: 'Blogging platform.',
    fork: false,
    url: 'https://api.github.com/repos/silverorange/blorg',
    forks_url: 'https://api.github.com/repos/silverorange/blorg/forks',
    keys_url: 'https://api.github.com/repos/silverorange/blorg/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/blorg/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/silverorange/blorg/teams',
    hooks_url: 'https://api.github.com/repos/silverorange/blorg/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/blorg/issues/events{/number}',
    events_url: 'https://api.github.com/repos/silverorange/blorg/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/blorg/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/blorg/branches{/branch}',
    tags_url: 'https://api.github.com/repos/silverorange/blorg/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/blorg/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/blorg/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/blorg/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/blorg/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/blorg/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/silverorange/blorg/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/blorg/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/blorg/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/blorg/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/blorg/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/blorg/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/blorg/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/blorg/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/blorg/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/blorg/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/blorg/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/silverorange/blorg/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/blorg/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/silverorange/blorg/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/blorg/issues{/number}',
    pulls_url: 'https://api.github.com/repos/silverorange/blorg/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/blorg/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/blorg/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/silverorange/blorg/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/blorg/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/blorg/deployments',
    created_at: '2013-07-18T10:47:54Z',
    updated_at: '2016-01-25T17:51:12Z',
    pushed_at: '2018-03-01T15:12:08Z',
    git_url: 'git://github.com/silverorange/blorg.git',
    ssh_url: 'git@github.com:silverorange/blorg.git',
    clone_url: 'https://github.com/silverorange/blorg.git',
    svn_url: 'https://github.com/silverorange/blorg',
    homepage: '',
    size: 1466,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 5,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: 'lgpl-2.1',
      name: 'GNU Lesser General Public License v2.1',
      spdx_id: 'LGPL-2.1',
      url: 'https://api.github.com/licenses/lgpl-2.1',
      node_id: 'MDc6TGljZW5zZTEx',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 5,
    open_issues: 1,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 11500512,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTUwMDUxMg==',
    name: 'atom-feed',
    full_name: 'silverorange/atom-feed',
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
    html_url: 'https://github.com/silverorange/atom-feed',
    description: 'Atom feed creation.',
    fork: false,
    url: 'https://api.github.com/repos/silverorange/atom-feed',
    forks_url: 'https://api.github.com/repos/silverorange/atom-feed/forks',
    keys_url:
      'https://api.github.com/repos/silverorange/atom-feed/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/atom-feed/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/silverorange/atom-feed/teams',
    hooks_url: 'https://api.github.com/repos/silverorange/atom-feed/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/atom-feed/issues/events{/number}',
    events_url: 'https://api.github.com/repos/silverorange/atom-feed/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/atom-feed/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/atom-feed/branches{/branch}',
    tags_url: 'https://api.github.com/repos/silverorange/atom-feed/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/atom-feed/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/atom-feed/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/atom-feed/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/atom-feed/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/atom-feed/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/silverorange/atom-feed/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/atom-feed/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/atom-feed/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/atom-feed/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/atom-feed/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/atom-feed/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/atom-feed/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/atom-feed/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/atom-feed/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/atom-feed/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/atom-feed/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/silverorange/atom-feed/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/atom-feed/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/silverorange/atom-feed/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/atom-feed/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/silverorange/atom-feed/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/atom-feed/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/atom-feed/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/silverorange/atom-feed/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/atom-feed/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/atom-feed/deployments',
    created_at: '2013-07-18T10:47:33Z',
    updated_at: '2018-06-19T12:31:30Z',
    pushed_at: '2018-02-28T19:12:43Z',
    git_url: 'git://github.com/silverorange/atom-feed.git',
    ssh_url: 'git@github.com:silverorange/atom-feed.git',
    clone_url: 'https://github.com/silverorange/atom-feed.git',
    svn_url: 'https://github.com/silverorange/atom-feed',
    homepage: '',
    size: 43,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 6,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'lgpl-2.1',
      name: 'GNU Lesser General Public License v2.1',
      spdx_id: 'LGPL-2.1',
      url: 'https://api.github.com/licenses/lgpl-2.1',
      node_id: 'MDc6TGljZW5zZTEx',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 6,
    open_issues: 0,
    watchers: 2,
    default_branch: 'master',
  },
  {
    id: 11500503,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTUwMDUwMw==',
    name: 'authorize-net',
    full_name: 'silverorange/authorize-net',
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
    html_url: 'https://github.com/silverorange/authorize-net',
    description: "PEAR-packaged version of Authorize.net's AIM API.",
    fork: false,
    url: 'https://api.github.com/repos/silverorange/authorize-net',
    forks_url: 'https://api.github.com/repos/silverorange/authorize-net/forks',
    keys_url:
      'https://api.github.com/repos/silverorange/authorize-net/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/authorize-net/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/silverorange/authorize-net/teams',
    hooks_url: 'https://api.github.com/repos/silverorange/authorize-net/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/authorize-net/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/silverorange/authorize-net/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/authorize-net/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/authorize-net/branches{/branch}',
    tags_url: 'https://api.github.com/repos/silverorange/authorize-net/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/authorize-net/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/authorize-net/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/authorize-net/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/authorize-net/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/authorize-net/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/silverorange/authorize-net/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/authorize-net/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/authorize-net/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/authorize-net/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/authorize-net/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/authorize-net/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/authorize-net/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/authorize-net/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/authorize-net/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/authorize-net/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/authorize-net/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/silverorange/authorize-net/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/authorize-net/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/silverorange/authorize-net/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/authorize-net/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/silverorange/authorize-net/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/authorize-net/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/authorize-net/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/silverorange/authorize-net/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/authorize-net/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/authorize-net/deployments',
    created_at: '2013-07-18T10:47:11Z',
    updated_at: '2015-04-16T17:07:24Z',
    pushed_at: '2015-07-23T18:04:32Z',
    git_url: 'git://github.com/silverorange/authorize-net.git',
    ssh_url: 'git@github.com:silverorange/authorize-net.git',
    clone_url: 'https://github.com/silverorange/authorize-net.git',
    svn_url: 'https://github.com/silverorange/authorize-net',
    homepage: '',
    size: 480,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 4,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 4,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 11500489,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTUwMDQ4OQ==',
    name: 'admin',
    full_name: 'silverorange/admin',
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
    html_url: 'https://github.com/silverorange/admin',
    description: 'Site backend admin platform.',
    fork: false,
    url: 'https://api.github.com/repos/silverorange/admin',
    forks_url: 'https://api.github.com/repos/silverorange/admin/forks',
    keys_url: 'https://api.github.com/repos/silverorange/admin/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/silverorange/admin/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/silverorange/admin/teams',
    hooks_url: 'https://api.github.com/repos/silverorange/admin/hooks',
    issue_events_url:
      'https://api.github.com/repos/silverorange/admin/issues/events{/number}',
    events_url: 'https://api.github.com/repos/silverorange/admin/events',
    assignees_url:
      'https://api.github.com/repos/silverorange/admin/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/silverorange/admin/branches{/branch}',
    tags_url: 'https://api.github.com/repos/silverorange/admin/tags',
    blobs_url:
      'https://api.github.com/repos/silverorange/admin/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/silverorange/admin/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/silverorange/admin/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/silverorange/admin/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/silverorange/admin/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/silverorange/admin/languages',
    stargazers_url:
      'https://api.github.com/repos/silverorange/admin/stargazers',
    contributors_url:
      'https://api.github.com/repos/silverorange/admin/contributors',
    subscribers_url:
      'https://api.github.com/repos/silverorange/admin/subscribers',
    subscription_url:
      'https://api.github.com/repos/silverorange/admin/subscription',
    commits_url:
      'https://api.github.com/repos/silverorange/admin/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/silverorange/admin/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/silverorange/admin/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/silverorange/admin/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/silverorange/admin/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/silverorange/admin/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/silverorange/admin/merges',
    archive_url:
      'https://api.github.com/repos/silverorange/admin/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/silverorange/admin/downloads',
    issues_url:
      'https://api.github.com/repos/silverorange/admin/issues{/number}',
    pulls_url: 'https://api.github.com/repos/silverorange/admin/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/silverorange/admin/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/silverorange/admin/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/silverorange/admin/labels{/name}',
    releases_url:
      'https://api.github.com/repos/silverorange/admin/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/silverorange/admin/deployments',
    created_at: '2013-07-18T10:46:18Z',
    updated_at: '2022-04-21T18:57:26Z',
    pushed_at: '2022-11-28T21:40:18Z',
    git_url: 'git://github.com/silverorange/admin.git',
    ssh_url: 'git@github.com:silverorange/admin.git',
    clone_url: 'https://github.com/silverorange/admin.git',
    svn_url: 'https://github.com/silverorange/admin',
    homepage: '',
    size: 3751,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'PHP',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 10,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 3,
    license: {
      key: 'lgpl-2.1',
      name: 'GNU Lesser General Public License v2.1',
      spdx_id: 'LGPL-2.1',
      url: 'https://api.github.com/licenses/lgpl-2.1',
      node_id: 'MDc6TGljZW5zZTEx',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 10,
    open_issues: 3,
    watchers: 1,
    default_branch: 'master',
  },
];

describe('All Repos are rendered', () => {
  test('Repos length', async () => {
    render(
      <BrowserRouter>
        <Repos repos={mockData} loading={false} error={false} />
      </BrowserRouter>
    );
    const repos = screen.getAllByTestId('card');
    expect(repos).toHaveLength(12);
  });

  test('Error', async () => {
    render(
      <BrowserRouter>
        <Repos repos={[]} loading={false} error={'Failed to fetch.'} />
      </BrowserRouter>
    );
    const error = screen.getByTestId('repos-error');
    expect(error).toBeInTheDocument();
  });

  test('Loading', async () => {
    render(
      <BrowserRouter>
        <Repos repos={[]} loading={true} error={false} />
      </BrowserRouter>
    );
    const loading = screen.getByTestId('repos-loading');
    expect(loading).toBeInTheDocument();
  });
});
