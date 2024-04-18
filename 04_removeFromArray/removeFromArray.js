const removeFromArray = function(array, ...theArgs) {
    length = array.length;
    for (const arg of theArgs)
    {
        for (let i = 0; i < length; i++) 
        {
            if (array[i] === arg)
            {
                array.splice(i, 1)
                i--;
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
