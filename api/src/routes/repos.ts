/* eslint-disable no-console */
import { Router, Request, Response } from 'express';
import fsPromise from 'fs/promises';
import { Repo } from '../models/Repo';
import axios from 'axios';

// don't import data/repos.json - it will not be refetched if file changes

// have to filter data/repos.json for forks as well

// better not to combine data and filter ? - can use 2 arrays and type data better

// improvement: use AppError model and better error handling

async function example() {
  try {
    return JSON.parse(
      await fsPromise.readFile('./data/repos.json', {
        encoding: 'utf8',
      })
    );
  } catch (err) {
    console.log(err); // if you return an error, breaks application?
  }
}

export const repos = Router();

async function getRepos() {
  try {
    // api is rate-limited
    const { data } = await axios.get(
      'https://api.github.com/users/silverorange/repos',
      {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Accept: 'application/json',
        },
      }
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  res.status(200);
  const data = await getRepos();
  const localData = await example();

  if (localData && data) {
    const returnedData: Repo[] = [...data, ...localData].filter(
      (el) => el.fork === false
    );

    res.json({ repos: returnedData });
  } else if (data) {
    const returnedData: Repo[] = [...data].filter((el) => el.fork === false);

    res.json({ repos: returnedData });
  } else if (localData && !data) {
    const returnedData: Repo[] = [...localData].filter(
      (el) => el.fork === false
    );

    res.json({ repos: returnedData });
  } else {
    res.json({ repos: [] });
  }
});
