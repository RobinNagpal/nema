import { enumType, objectType } from 'nexus';
import { Link } from './Link';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('name');
    t.field('role', { type: Role });
  },
});

const Role = enumType({
  name: 'Role',
  members: ['USER', 'ADMIN'],
});
