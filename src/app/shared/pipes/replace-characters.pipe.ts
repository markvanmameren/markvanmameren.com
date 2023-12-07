import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCharacters',
})
export class ReplaceCharactersPipe implements PipeTransform {
  transform(
    value: string,
    characterToReplace: string,
    replacementCharacter: string
  ): string {
    if (!value || !characterToReplace || !replacementCharacter) {
      return value;
    }

    return value.replace(
      new RegExp(characterToReplace, 'g'),
      replacementCharacter
    );
  }
}
