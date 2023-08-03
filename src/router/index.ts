import {
  createBrowserRouter,
  RouteObject
} from "react-router-dom";
import Index from '../components/index';
import ChatApp from '../components/chat';

const routesRouteObject: Array<RouteObject> = [
    {
        path: "/",
        Component: Index,
    },
    {
        path: "/chat",
        Component: ChatApp,
    }
];
  
const router = createBrowserRouter(routesRouteObject);
export default router;