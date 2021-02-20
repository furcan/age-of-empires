import NotFound from '../../NotFound';

function UnitDetail(props) {

  // todo: datada bu id yoksa
  if (props.match.params.id === '4444') {
    return <NotFound />;
  }

  return (
    <div>
      <h1>Unit Detail</h1>
    </div>
  );
}

export default UnitDetail;
