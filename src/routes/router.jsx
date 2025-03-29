import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home-page/Home";
import Layout from "../components/Layout";
import Company from "../pages/company/Company";
import FacilityyStatus from "../pages/facility-status/FacilityyStatus";
import MainBusiness from "../pages/mainBusiness/MainBusiness";
import Directions from "../pages/directions/Directions";
import EnvironmentConsulting from "../pages/mainBusiness/EnvironmentConsulting";
import IoTSystem from "../pages/IoT-System/IoTSystem";
import MainReference from "../pages/reference-pages/MainReference";
import EnvironmentalConsulting from "../pages/reference-pages/environmental-consulting/EnvironmentalConsulting";
import EnvironmentalPlant from "../pages/reference-pages/environmental-plant/EnvironmentalPlant";
import FacilityMaintenance from "../pages/reference-pages/facility-maintenance/FacilityMaintenance";
import MainCustomer from "../pages/main-customer/MainCustomer";

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
    {
        path:'/reference',
        element:(
            <Layout>
                <MainReference/>
            </Layout>
        )
    },
    {
        path:'/environmental-consulting',
        element:(
            <Layout>
                <EnvironmentalConsulting/>
            </Layout>
        )
    },
    {
        path:'/environmental-plant',
        element:(
            <Layout>
                <EnvironmentalPlant/>
            </Layout>
        )
    },
    {
        path:'/facility-maintenance',
        element:(
            <Layout>
                <FacilityMaintenance/>
            </Layout>
        )
    },
    {
        path:'/customer',
        element:(
            <Layout>
                <MainCustomer/>
            </Layout>
        )
    },
   
]);

// export const publickRouter = createBrowserRouter([
//     {path:'*',element: <Login/>}
// ])