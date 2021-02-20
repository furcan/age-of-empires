import { FiCheck } from 'react-icons/fi';

import './FilterButtons.scss';

function FilterButtons(props) {
  const { onClickHandler, classList } = props;

  return (
    <div className="buttons-wrapper">
      <button type="button" name="All" onClick={(event) => onClickHandler(event)} className={classList.All ? 'selected' : ''}>
        {classList.All && <FiCheck />}
        <span>All</span>
      </button>
      <button type="button" name="Dark" onClick={(event) => onClickHandler(event)} className={classList.Dark ? 'selected' : ''}>
        {classList.Dark && <FiCheck />}
        <span>Dark</span>
      </button>
      <button type="button" name="Feudal" onClick={(event) => onClickHandler(event)} className={classList.Feudal ? 'selected' : ''}>
        {classList.Feudal && <FiCheck />}
        <span>Feudal</span>
      </button>
      <button type="button" name="Castle" onClick={(event) => onClickHandler(event)} className={classList.Castle ? 'selected' : ''}>
        {classList.Castle && <FiCheck />}
        <span>Castle</span>
      </button>
      <button type="button" name="Imperial" onClick={(event) => onClickHandler(event)} className={classList.Imperial ? 'selected' : ''}>
        {classList.Imperial && <FiCheck />}
        <span>Imperial</span>
      </button>
    </div>
  );
}

export default FilterButtons;
