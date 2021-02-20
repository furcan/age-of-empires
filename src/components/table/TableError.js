import { VscError } from 'react-icons/vsc';

import './TableError.scss';

function TableError() {
  return (
    <div className="table-error">
      <VscError />
      <p>Something went wrong while fetching units.</p>
    </div>
  );
}

export default TableError;
