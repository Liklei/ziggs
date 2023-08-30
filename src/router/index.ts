import {
  createBrowserRouter,
  RouteObject
} from "react-router-dom";
import Index from '../components/index';
import ChatApp from '../components/chat';
import Three from '../components/three';
import Dnd from '../view/dnd'

const routesRouteObject: Array<RouteObject> = [
    {
        path: "/",
        Component: Index,
    },
    {
        path: "/chat",
        Component: ChatApp,
    },
    {
        path: "/three",
        Component: Three
    },
    {
        path: "/dnd",
        Component: Dnd
    }
];
  
const router = createBrowserRouter(routesRouteObject);
export default router;