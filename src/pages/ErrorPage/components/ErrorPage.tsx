import { useRouteError } from "react-router-dom";
import ErrorMessage from "@pokedex-graphql/components/Error/ErrorMessage";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <ErrorMessage />
        </div>
    );
};

export default ErrorPage;
