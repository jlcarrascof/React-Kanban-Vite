import { RouteObject } from "react-router";
import Layout from "../layout";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                children: [
                    {
                        path: "",
                        element: <Boards />,
                    },
                ],
            },
        ],
    }
]

export default routes
