import { FiList } from 'react-icons/fi';
import { GiSpartanHelmet } from 'react-icons/gi';

import Home from '../pages/home/Home';
import Units from '../pages/units/Units';
import UnitDetail from '../pages/unit-detail/UnitDetail';

const Routes = [
  {
    path: `${process.env.PUBLIC_URL}/`,
    component: Home,
    exact: true,
    strict: true,
    name: 'Home',
    showInNavbar: true,
    icon: <GiSpartanHelmet />,
  },
  {
    path: `${process.env.PUBLIC_URL}/units`,
    component: Units,
    exact: true,
    strict: true,
    name: 'Units',
    showInNavbar: true,
    icon: <FiList />,
  },
  {
    path: `${process.env.PUBLIC_URL}/units/:id`,
    component: UnitDetail,
    exact: true,
    strict: true,
    name: 'Unit Detail',
    showInNavbar: false,
    icon: null,
  },
];

export default Routes;
