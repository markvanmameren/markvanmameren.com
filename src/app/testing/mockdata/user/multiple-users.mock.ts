import { IUser } from '../../../shared/interfaces/user.interface';

export const mockMultipleUsers: IUser[] = [
  {
    firstName: 'Johan',
    lastName: 'de Boer',
    password: 'qwerty123',
    email: 'johan@deboer.nl',
    avatar: 'test.url/651.jpg',
    id: '3',
  },
  {
    firstName: 'Henk',
    lastName: 'Smit',
    password: 'qwerty456',
    email: 'henkjan@smit.nl',
    avatar: 'test.url/690.jpg',
    id: '6',
  },
  {
    firstName: 'Hannah',
    lastName: 'de Boer',
    password: 'qwerty789',
    email: 'hannah@deboer.nl',
    avatar: 'test.url/912.jpg',
    id: '9',
  },
];
