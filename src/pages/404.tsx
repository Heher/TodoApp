import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage: React.FC = () => (
  <Layout>
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <Link to="/">Go home</Link>.
      </p>
    </main>
  </Layout>
);

export default NotFoundPage;
