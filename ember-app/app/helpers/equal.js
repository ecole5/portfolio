import { helper } from '@ember/component/helper';

export function equal([first, second]) {
  return first == second;
}

export default helper(equal);
