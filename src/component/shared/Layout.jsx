

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <> 
            <Navbar/>
            <Outlet/>
             {children}
        </>
    )
}

export default Layout
