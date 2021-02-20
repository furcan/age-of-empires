import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

import { costObjectToPlainText } from '../../helpers/Helpers';

import './TableUnits.scss';

function TableUnits(props) {
  const { data } = props;
  return (
    <div className="units-table-wrapper">
      <table className="units-table">
        <thead>
          <tr>
            <th>ID</th>
            <th className="table-name">Name</th>
            <th>Age</th>
            <th>Costs</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((unit) => <tr key={unit.id}>
              <td>{unit.id}</td>
              <td className="table-name">
                <Link key={unit.id} to={`${process.env.PUBLIC_URL}/units/${unit.id}`}>
                  {unit.name}
                  <FiExternalLink />
                </Link>
              </td>
              <td>{unit.age}</td>
              <td>{unit.cost !== null ? costObjectToPlainText(unit.cost) : '...'}</td>
              <td>
                <Link key={unit.id} to={`${process.env.PUBLIC_URL}/units/${unit.id}`}>
                  <button type="button">Show Details</button>
                </Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default TableUnits;
