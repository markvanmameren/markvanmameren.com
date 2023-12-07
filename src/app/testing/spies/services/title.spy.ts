import { Title } from '@angular/platform-browser';

export const getTitleSpy = (): jasmine.SpyObj<Title> =>
  jasmine.createSpyObj('Title', {
    getTitle: 'test title',
    setTitle: undefined,
  });
