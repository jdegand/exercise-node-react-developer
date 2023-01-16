/* eslint-disable @typescript-eslint/naming-convention */
export interface Commit {
  author: {
    name: string;
    email: string;
    date: string;
  };
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
