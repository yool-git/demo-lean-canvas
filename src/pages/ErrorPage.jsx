import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      Error page
      {error.message}
    </div>
  );
}

export default ErrorPage;
