// 2D array = multi-dimensional array that stores a matrix
//            of data in rows and columns

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        console.log(`Matrix[${i}][${j}] = ` + matrix[i][j]);
    }
}

console.log("---------------------------------------");

for (let rows of matrix){
    for (let value of rows){
        console.log(value);
    }
}

console.log("---------------------------------------");

matrix[0][0] = "x";
matrix[0][1] = "o";
matrix[0][2] = "x";

matrix[1][0] = "o";
matrix[1][1] = "x";
matrix[1][2] = "o";

matrix[2][0] = "x";
matrix[2][1] = "o";
matrix[2][2] = "x";

for (let row of matrix){
    let rowString = row.join(' ');
    console.log(rowString);
}
