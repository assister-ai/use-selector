import { selector } from 'recoil';
import { selectKey, selectProjection } from '../.';
import { camelCase } from 'lodash';

export function keySelector(state, key) {
  return selector({
    key: `${key}State`,
    get: ({ get }) => selectKey(get(state), key).get(),
    set: ({ get, set }, newValue) => selectKey(
      get(state),
      key,
      value => set(state, value)
    ).set(newValue)
  });
}

export function projection(state, keys) {
  const [tailKey, ...headKeys] = [...keys.slice(-1), ...keys.slice(0, -1)];
  const joinedNameByAnd = camelCase([
    ...headKeys.map(key => [key, 'And']).flat(),
    tailKey,
    'State'
  ].join(' '));
  console.log(joinedNameByAnd)
  return selector({
    key: joinedNameByAnd,
    get: ({ get }) => selectProjection(get(state), keys).get(),
    set: ({ get, set }, newValue) => selectProjection(
      get(state),
      keys,
      value => set(state, value)
    ).set(newValue)
  });
}
