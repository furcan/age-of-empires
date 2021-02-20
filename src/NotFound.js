function NotFound(props) {

  const goBack = () => {
    if (props.history) {
      props.history.goBack(-1);
    }
  };

  return (
    <div>
      <h1>404 - Not found</h1>
      <button type="button" onClick={() => goBack()}>Go Back</button>
    </div>
  );
}

export default NotFound;
