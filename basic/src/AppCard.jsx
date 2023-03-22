import React from 'react';
import Card from './components/Card';

const AppCard = () => {
  return (
    <div>
      <Card>
        <p>Card1</p>
      </Card>
      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>
      <Card>
        <article>하이?</article>
      </Card>
    </div>
  );
};

export default AppCard;
