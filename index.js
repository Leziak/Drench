let squares = document.querySelectorAll('.square');
let nodes = Array.prototype.slice.call(squares);
let players = document.querySelectorAll('.player');
let num;
let count = 0;
let arr = [];
let brown = 1,
    red = 2,
    blue = 3,
    yellow = 4,
    green = 5,
    pink = 6;
let diceroll = () => {
    return Math.ceil(Math.random() * 6);
}
let colors = [];

let grid = () => {
    colors = [];
    for (let i = 0; i < nodes.length; i += 14) {
        colors.push(nodes.slice(i, i + 14));
    }
}

let check = (color) => {
    grid();
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < colors.length - 1; j++) {
            if (colors[i][j].classList.contains('player')) {
                right = j + 1;
                while (colors[i][right].classList.contains(color)) {
                    colors[i][right].classList.add('player');
                    right++;
                    if (right === 14) break;
                    console.log(i, right);
                }
                if (j > 0) {
                    left = j - 1
                    while (colors[i][left].classList.contains(color)) {
                        colors[i][left].classList.add('player');
                        left--;
                        if (left === -1) break;
                    }
                }
                down = i + 1;
                if (i < colors.length - 1) {
                    while (colors[down][j].classList.contains(color)) {
                        colors[down][j].classList.add('player');
                        down++;
                        if (down === 14) break;
                    }
                }
                up = i - 1
                if (i > 0) {
                    while (colors[up][j].classList.contains(color)) {
                        colors[up][j].classList.add('player');
                        up--;
                        if (up === -1) break;
                    }
                }

            }

        }
    }
    colors = [].concat.apply([], colors);
    colors.forEach((color, i) => {
        if (color.classList.contains('player')) squares[i].classList.add('player');
    })
}

let paintBoard = () => {
    squares.forEach(square => {

        num = diceroll();
        switch (num) {
            case 1:
                square.classList.remove('red', 'green', 'yellow', 'blue', 'pink');
                square.classList.add('brown');
                break;
            case 2:
                square.classList.remove('brown', 'green', 'yellow', 'blue', 'pink');
                square.classList.add('red');
                break;
            case 3:
                square.classList.remove('red', 'green', 'yellow', 'brown', 'pink');
                square.classList.add('blue');
                break;
            case 4:
                square.classList.remove('red', 'green', 'brown', 'blue', 'pink');
                square.classList.add('yellow');
                break;
            case 5:
                square.classList.remove('red', 'brown', 'yellow', 'blue', 'pink');
                square.classList.add('green');
                break;
            case 6:
                square.classList.remove('red', 'brown', 'yellow', 'blue', 'green');
                square.classList.add('pink');
                break;
        }
        grid();

    })
}

paintBoard();


document.getElementById('greenButton').addEventListener('click', () => {
    check('green');
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('brown', 'pink', 'yellow', 'blue', 'red');
            square.classList.add('green');
        }
    });
    document.querySelector('.count').innerHTML--;
})

document.getElementById('blueButton').addEventListener('click', () => {
    check('blue');
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('brown', 'pink', 'yellow', 'green', 'red');
            square.classList.add('blue');
        }
    });
    document.querySelector('.count').innerHTML--;
})

document.getElementById('yellowButton').addEventListener('click', () => {
    check('yellow');
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('brown', 'pink', 'green', 'blue', 'red');
            square.classList.add('yellow');
        }
    });
    document.querySelector('.count').innerHTML--;
})

document.getElementById('pinkButton').addEventListener('click', () => {
    check('pink');
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('brown', 'green', 'yellow', 'blue', 'red');
            square.classList.add('pink');
        }
    });
    document.querySelector('.count').innerHTML--;
})

document.getElementById('redButton').addEventListener('click', () => {
    check('red');
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('brown', 'pink', 'yellow', 'blue', 'green');
            square.classList.add('red');
        }
    });
    document.querySelector('.count').innerHTML--;
})

document.getElementById('brownButton').addEventListener('click', () => {
    check('brown');
    colors.forEach((color, i) => {
        if (color.classList.contains('player')) squares[i].classList.add('player');
    })
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('green', 'pink', 'yellow', 'blue', 'red');
            square.classList.add('brown');
        }
    });
    
    document.querySelector('.count').innerHTML--;
})

document.getElementById('new-game').addEventListener('click', () => paintBoard());