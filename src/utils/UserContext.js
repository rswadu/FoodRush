import { createContext } from "react";

const userContext=createContext({
    name:"dummy name",
    email:"dummyemeil@gmail.com",
});
export default userContext;