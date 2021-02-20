import { VscLoading } from 'react-icons/vsc';

import './TableLoading.scss';

function TableLoading() {
  return (
    <div className="table-loading">
      <VscLoading />
      <p>Loading units...</p>
    </div>
  );
}

export default TableLoading;
