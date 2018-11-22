import { helper } from '@ember/component/helper';

export function firstCard([isFirst, ...rest]) {

  //We need to be really carefull about the input. It is given as a list always.
  if (isFirst){
    return 'mb-5';
  }
  else{
    return 'my-5';
  }
}

export default helper(firstCard);
