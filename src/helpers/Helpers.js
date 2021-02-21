// from the cost object to the plain text table data: begin
export const costObjectToPlainText = (input) => {
  return (JSON.stringify((input || '')) || '')
    .replace(/{"/, '')
    .replace(/":/gmi, ': ')
    .replace(/,"/gmi, ', ')
    .replace(/}/gmi, '').trim();
};
// from the cost object to the plain text table data: end

// empty data to dash: begin
export const emptyData = (params) => {
  return params || '-';
};
// empty data to dash: end
