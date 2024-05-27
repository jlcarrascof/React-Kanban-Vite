import { RouteObject } from "react-router";

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
