import "core-js"
import React from 'React';
import _ from 'lodash';
import './index.less';

const aa = () => {
  if (!_.isEmpty([])) {
    console.log(123213);
  }

  var cc = new Set([1,2,3]);
  console.log(cc)

  const aa = [1,23];
  if (aa.includes('1')) {
    console.log(123213);
  }
  return (
    <div></div>
  )
}

export { aa as default }