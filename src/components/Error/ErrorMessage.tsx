import { isRouteErrorResponse, useRouteError } from "react-router-dom";

 const ErrorMessage = () => {
  const error = useRouteError();
  console.error(error);

  let errorMessage = 'Unknown error';

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  }

  return <p>{errorMessage}</p>
}

export default ErrorMessage;