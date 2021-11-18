export function isClass(type: unknown) {
    return typeof type === "function" && type.toString().slice(0, 5) === "class";
}

export function ignoreThis(target: unknown) {
    return target;
}

export function isSymbol(value: unknown) {
    return typeof value === "symbol";
}

export function createIncreament(start = 0) {
    return () => start++;
}
