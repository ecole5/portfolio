import { helper } from '@ember/component/helper';

export function betterLink(params/*, hash*/) {
  return window.ASSET_FINGERPRINT_HASH;
}

export default helper(betterLink);
