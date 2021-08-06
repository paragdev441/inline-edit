import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome !</h1>
      <Link to="/text-in-place">
        <b>Go to TextInPlace</b>
      </Link>
    </div>
  );
};

export default Welcome;
