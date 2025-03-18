import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home-page/Home";
import Layout from "../components/Layout";
import Company from "../pages/company/Company";

export const protectedRouter = createBrowserRouter([
    {
        path:'/',
        element:(
            <Layout>
                <Home/>
            </Layout>
        )
    },
    {
        path:'/company',
        element:(
            <Layout>
                <Company/>
            </Layout>
        )
    },
   
]);

// export const publickRouter = createBrowserRouter([
//     {path:'*',element: <Login/>}
// ])