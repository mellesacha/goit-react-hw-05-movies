import { Outlet } from "react-router-dom";
import {Header, List, Container, NavItemLink} from "./Layout.styled";
import { Suspense } from "react";

const Layout = () => {

    return (<>
        <Header>
            <Container>
                <List>
                    <li><NavItemLink to="/">Home</NavItemLink></li>
                    <li><NavItemLink to="movies">Movies</NavItemLink></li>
                </List>
            </Container>
            
        </Header>
        <main>
            <Suspense>
            <Outlet />
            </Suspense>
            
        </main>
        
         
    </>
       
    )
};

export default Layout;