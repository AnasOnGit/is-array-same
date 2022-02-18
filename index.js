const isArraySame = (array1, array2) => {
    // check if array1 and array2 are same
    if (array1.length !== array2.length) {
        return false;
    }
    // check if array1 and array2 are same
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

module.exports = {
    isArraySame
}