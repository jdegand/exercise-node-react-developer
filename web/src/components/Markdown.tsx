import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// testing ReactMarkdown needs to be mocked

function Markdown() {
  const [error, setError] = useState(null);
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(false);

  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
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
            setError(null);
            setMarkdown(data);
          })
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      }
    }
    fetchMarkdown(name);
  }, [name]);

  return (
    <section className="card-readme-section">
      <h1>README.md Details</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );
}

export default Markdown;
