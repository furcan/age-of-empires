import { FiCheck } from 'react-icons/fi';

import './FilterButtons.scss';

function FilterButtons(props) {
  const { onClickHandler, classListAge } = props;

  return (
    <div className="buttons-wrapper">
      <button type="button" name="All" onClick={onClickHandler} className={classListAge.All ? 'selected' : ''}>
        {classListAge.All && <FiCheck />}
        <span>All</span>
      </button>
      <button type="button" name="Dark" onClick={onClickHandler} className={classListAge.Dark ? 'selected' : ''}>
        {classListAge.Dark && <FiCheck />}
        <span>Dark</span>
      </button>
      <button type="button" name="Feudal" onClick={onClickHandler} className={classListAge.Feudal ? 'selected' : ''}>
        {classListAge.Feudal && <FiCheck />}
        <span>Feudal</span>
      </button>
      <button type="button" name="Castle" onClick={onClickHandler} className={classListAge.Castle ? 'selected' : ''}>
        {classListAge.Castle && <FiCheck />}
        <span>Castle</span>
      </button>
      <button type="button" name="Imperial" onClick={onClickHandler} className={classListAge.Imperial ? 'selected' : ''}>
        {classListAge.Imperial && <FiCheck />}
        <span>Imperial</span>
      </button>
    </div>
  );
}

export default FilterButtons;
