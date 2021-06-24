
const printArrow = (direction, columns) => {
    const startOfDescendingColumn = columns - 2;
    if (direction === 'left') {
        for (let ascending = 0; ascending < columns; ascending++) {
            printRow(ascending, columns)
        }

        for (let descending = startOfDescendingColumn; descending >= 0; descending--) {
            printRow(descending, columns)
        }
    } else {
        for (let descending = startOfDescendingColumn; descending >= 0; descending--) {
            printRow(descending, columns)
        }
        for (let ascending = 0; ascending < columns; ascending++) {
            printRow(ascending, columns)
        }
    }
}

const printRow = (index, columns) => {
    const string = new Array(columns).fill(' ')
    string[index] = "*"
    console.log(string.join(' '))
}

printArrow('left', 5);
printArrow('right', 9);
printArrow('left', 15);
printArrow('right', 25);