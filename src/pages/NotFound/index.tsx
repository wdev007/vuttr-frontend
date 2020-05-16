import React from 'react';
import { Result, Button } from 'antd';

import history from '../../services/history';

const NotFoundPage: React.FC = () => {
  const handleRedirect = (): void => {
    history.push('/');
  };

  const RenderButton: React.FC = () => (
    <Button type="primary" onClick={handleRedirect}>
      Back Home
    </Button>
  );
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<RenderButton />}
    />
  );
};

export default NotFoundPage;
