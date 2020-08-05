import React from 'react';

const HeaderApp1 = React.lazy(() => import('app1/Header'));

export default () => (
  <div style={{margin: '20px'}}>
    <React.Suspense fallback='Loading header...'>
      <HeaderApp1 title="Title App 2" color="#bf41b7" />
    </React.Suspense>
  </div>
);

