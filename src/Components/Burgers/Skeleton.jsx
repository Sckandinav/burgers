import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader speed={2} width={300} height={380} viewBox="0 0 300 380" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
    <rect x="12" y="12" rx="0" ry="0" width="280" height="200" />
    <rect x="12" y="298" rx="0" ry="0" width="168" height="23" />
    <rect x="12" y="238" rx="0" ry="0" width="101" height="40" />
    <rect x="11" y="330" rx="10" ry="10" width="118" height="30" />
    <rect x="161" y="330" rx="10" ry="10" width="118" height="30" />
  </ContentLoader>
);

export default Skeleton;
