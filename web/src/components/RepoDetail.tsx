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
