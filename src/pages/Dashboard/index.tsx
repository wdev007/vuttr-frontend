import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
// import Tool from '../../models/tool';

const Dashboard: React.FC = () => {
  // const [tools, setTools] = useState<Array<Tool>>([]);

  // useEffect(() => {

  // }, []);

  return (
    <>
      <Header />
      <Card
        id="eae"
        title="olá mundo"
        description="aeae doisdo afaf andk sdan ds"
        link="www.google.com"
        tags={['ola', 'eaew']}
      />
    </>
  );
};

export default Dashboard;
