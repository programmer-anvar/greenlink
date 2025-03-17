import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home-page/Home";
import Service from "../pages/service-page/Service";
import Layout from "../components/Layout";
import Content from "../pages/contents-page/Content";
import HistoryPromotionSystem from "../pages/history-promotion-system/HistoryPromotionSystem";
import AirPollutantEmissionFacility from "../pages/Air-Pollutant-Emission-Facility/AirPollutantEmissionFacility";

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
    {
        path:'/contents',
        element:(
            <Layout>
                <Content/>
            </Layout>
        )
    },
    
    {
        path:'/history_promotion',
        element:(
            <Layout>
                <HistoryPromotionSystem/>
            </Layout>
        )
    },
    {
        path:'/air-polutant',
        element:(
            <Layout>
                <AirPollutantEmissionFacility/>
            </Layout>
        )
    },
]);

// export const publickRouter = createBrowserRouter([
//     {path:'*',element: <Login/>}
// ])