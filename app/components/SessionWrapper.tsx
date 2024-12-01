import { SessionProvider } from "next-auth/react";
import { Children } from "react";

export const SessionWrapper = ({children} : {children:React.ReactNode}) =>{
    return <SessionProvider>{children}</SessionProvider>
}