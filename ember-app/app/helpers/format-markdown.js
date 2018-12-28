import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import marked from 'marked';

export function formatMarkdown(params/*, hash*/) {
  let value = params[0];
  return htmlSafe(marked(value));
}

export default helper(formatMarkdown);

