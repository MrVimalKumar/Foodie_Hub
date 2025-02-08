import {useRouteError} from "react-router"

const Error =()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <div>Error Occured No Route is found
            <h1>Status:{err.status}</h1>
        </div>
    )
};

export default Error;