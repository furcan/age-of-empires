export const costObjectToPlainText = (input) => {
  return (JSON.stringify((input || '')) || '')
    .replace(/{"/, '')
    .replace(/":/gmi, ': ')
    .replace(/,"/gmi, ', ')
    .replace(/}/gmi, '').trim();
};
