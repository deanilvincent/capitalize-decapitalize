module.exports = (letterCase, data) => {
    letterCase = letterCase.toLowerCase()

    if(letterCase === 'c'){ 
        // Capitalizes every first letter of every given string
        data = str => str.replace(/\b[a-z]/g, char => char.toUpperCase()
    }

    return data
};
