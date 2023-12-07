import { ReplaceCharactersPipe } from './replace-characters.pipe';

describe('ReplaceCharactersPipe', () => {
  let replaceCharactersPipe: ReplaceCharactersPipe;

  beforeEach(() => {
    replaceCharactersPipe = new ReplaceCharactersPipe();
  });

  it('create an instance', () => {
    expect(replaceCharactersPipe).toBeTruthy();
  });

  it('should replace hyphens with spaces', () => {
    const stringToTest = 'sentence-with-hyphens';

    const resultString = replaceCharactersPipe.transform(
      stringToTest,
      '-',
      ' '
    );

    expect(resultString).toBe('sentence with hyphens');
  });

  it('should not replace anything when no replaceable characters are found', () => {
    const stringToTest = 'sentence without hyphens';

    const resultString = replaceCharactersPipe.transform(
      stringToTest,
      '-',
      ' '
    );

    expect(resultString).toBe(stringToTest);
  });
});
