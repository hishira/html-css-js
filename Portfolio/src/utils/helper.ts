
export const isNil = (value: any): boolean =>{
    return value === null || value === undefined;
}

export const isNilOneOfThem = (...value: any[]): boolean =>{
    return value.filter(isNil).length > 0;
}

export const isUndefined = (value: any): boolean => {
    return value === undefined;
    
}
export const isOneOfThemUndefined = (...value: any[]): boolean => {
    return value.filter(isUndefined).length > 0;
}

export const isNotUndefined = (value: any): boolean => {
    return value !== undefined;
}


