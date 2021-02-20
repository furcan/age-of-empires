import { FiHome, FiGrid } from 'react-icons/fi';
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
    icon: <FiHome />,
  },
  {
    path: `${process.env.PUBLIC_URL}/units`,
    component: Units,
    exact: true,
    strict: true,
    name: 'Units',
    showInNavbar: true,
    icon: <FiGrid />,
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
