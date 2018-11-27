import { helper } from '@ember/component/helper';

export function incr([number, ...theRest]) {

  return number + 1;
}

export default helper(incr);
