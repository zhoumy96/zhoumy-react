import { RouteObject } from "react-router-dom";
import LazyWrapper from "@/baseComponents/lazyWrapper";

const ROUTER_CONFIG: RouteObject[] = [
    {
        path: "/",
        element: <LazyWrapper path={'/home'} />,
    },
    {
        path: "*",
        element: <>404 Not Found!</>,
    },
];

export { ROUTER_CONFIG };
