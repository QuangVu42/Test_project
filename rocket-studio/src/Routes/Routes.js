import RoutesConfig from "../Config/RoutesConfig";

import WorkUs from '../Pages/WorkUs/WorkUs'
import Home from '../Pages/Home/Home'

const publicRoutes = [
    {path: RoutesConfig.home, component: Home},
    {path: RoutesConfig.workus, component: WorkUs},
]

export default publicRoutes