function differenceBy(array, values, fn) {
    return array.reduce((acc, value) => {
       const sourceVal = fn(value);
       const valueExistsInSource = values.some(val => sourceVal === fn(val));
       if(!valueExistsInSource) { acc.push(value); }
       return acc;
    },[])
}
