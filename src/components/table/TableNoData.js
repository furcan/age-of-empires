import { VscFolderOpened } from 'react-icons/vsc';

import './TableNoData.scss';

function TableNoData() {
  return (
    <div className="table-nodata">
      <VscFolderOpened />
      <p>No matching unit found.</p>
    </div>
  );
}

export default TableNoData;
