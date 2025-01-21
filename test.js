const obj = {
    a: 1,
    b: 2,
    c: 3,
    z: 2,
    d: 2,
}

console.log(Object.keys(obj).filter(key => obj[key] === 2))