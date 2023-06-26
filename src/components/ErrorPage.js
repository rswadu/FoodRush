import { useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const error=useRouteError();
    return(
        <>
        <h1>Something went wrong</h1>
        <h2>{error.status}</h2>
        <h2>{error.statusText}</h2>

        </>
    );
}
export default ErrorPage;