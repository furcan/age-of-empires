import { costObjectToPlainText, emptyData } from './Helpers';

describe('Helper functions should be run as epected.', () => {
  it('"costObjectToPlainText" should convert Object to PlainText: ', () => {
    const dummyCosts = {
      Wood: 19,
      Food: 23,
      Gold: 81,
    };

    const result = costObjectToPlainText(dummyCosts);
    expect(result).toBe('Wood: 19, Food: 23, Gold: 81');
  });

  it('"emptyData" should return a dash when param is null or empty: ', () => {
    const nullData = null;
    const emptyString = '';

    const nullResult = emptyData(nullData);
    expect(nullResult).toBe('-');

    const emptyResult = emptyData(emptyString);
    expect(emptyResult).toBe('-');
  });
});
