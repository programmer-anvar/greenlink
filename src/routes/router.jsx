import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home-page/Home";
import Layout from "../components/Layout";
import Company from "../pages/company/Company";
import FacilityyStatus from "../pages/facility-status/FacilityyStatus";
import MainBusiness from "../pages/mainBusiness/MainBusiness";
import Directions from "../pages/directions/Directions";
import EnvironmentConsulting from "../pages/mainBusiness/EnvironmentConsulting";
import IoTSystem from "../pages/IoT-System/IoTSystem";

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
    {
        path:'/facility-status',
        element:(
            <Layout>
                <FacilityyStatus/>
            </Layout>
        )
    },

    {
        path:'/main-busines',
        element:(
            <Layout>
                <MainBusiness/>
            </Layout>
        )
    },
    {
        path:'/directions',
        element:(
            <Layout>
                <Directions/>
            </Layout>
        )
    },

    {
        path:'/environmrnt-consulting',
        element:(
            <Layout>
                <EnvironmentConsulting/>
            </Layout>
        )
    },
    {
        path:'/ioTSystem',
        element:(
            <Layout>
                <IoTSystem/>
            </Layout>
        )
    },
   
]);

// export const publickRouter = createBrowserRouter([
//     {path:'*',element: <Login/>}
// ])