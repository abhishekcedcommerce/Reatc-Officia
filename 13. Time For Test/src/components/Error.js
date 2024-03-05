import { useRouteError } from "react-router-dom";
// hooks will use to show the error in details 
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1> Erorr Page -- OOPs!! something went wrong</h1>
            <h3>Status - {err.status}, Status Text = {err.statusText}</h3>
        </div>
    )
}
export default Error;