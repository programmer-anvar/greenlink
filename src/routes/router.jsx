import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home-page/Home";
import Service from "../pages/service-page/Service";
import Layout from "../components/Layout";

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
        path:'/service',
        element:(
            <Layout>
                <Service/>
            </Layout>
        )
    },
]);

// export const publickRouter = createBrowserRouter([
//     {path:'*',element: <Login/>}
// ])