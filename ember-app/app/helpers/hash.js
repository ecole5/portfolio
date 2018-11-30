import { helper } from '@ember/component/helper';

export function hash(params/*, hash*/) {
  return window.ASSET_FINGERPRINT_HASH;
}

export default helper(hash);
