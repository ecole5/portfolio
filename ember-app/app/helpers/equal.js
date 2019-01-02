import { helper } from '@ember/component/helper';

export function equal([first, second]) {
  console.log("cools");
  return first == second;
}

export default helper(equal);
