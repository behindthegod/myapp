export const required = (value) => {
    if (value) return undefined;
    return "хули нам, пацанам"
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength)
        return `Длинна больше ${maxLength}!`;
    return undefined
};