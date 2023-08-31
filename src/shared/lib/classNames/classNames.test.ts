import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });
  test('with mods', () => {
    const expected = 'someClass class1 hovered visited';
    expect(classNames('someClass', { hovered: true, visited: true }, ['class1'])).toBe(expected);
  });
  test('with mods false', () => {
    const expected = 'someClass class1 hovered';
    expect(classNames('someClass', { hovered: true, visited: false }, ['class1'])).toBe(expected);
  });
});
