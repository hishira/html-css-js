export const isNil = (value: any): boolean =>{
    return value === null || value === undefined;
}

export const isNilOneOfThem = (...value: any[]): boolean =>{
    return value.filter(isNil).length > 0;
}