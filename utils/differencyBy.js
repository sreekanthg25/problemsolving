function differenceBy(source = [], values, fn, map) {
  const isSourceArray = Array.isArray(source);
  const iterator = !isSourceArray ? Object.keys[source] : source;
  return iterator.reduce((acc, value) => {
    const isFunction = typeof fn === 'function';
    const sourceVal = isFunction ? fn(isSourceArray ? value : source[value]) : value;
    const valueExists = values.some(val => sourceVal === (isFunction ? fn(val) : val));
    if(!valueExists) {
      acc.push(typeof map === 'function' ? map(value) : value);
    }
    return acc;
  },[]);
}
