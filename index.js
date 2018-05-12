let squares = document.querySelectorAll('.square');
let nodes = Array.prototype.slice.call(squares);
let players = document.querySelectorAll('.player');
let count = 30;
let colors = [];

let diceroll = () => {
    return Math.ceil(Math.random() * 6);
}


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
    squares.forEach((square,i) => {
        square.classList.remove('player');
        squares[0].classList.add('player');
        count = 30;
        document.querySelector('.count').innerHTML = '30';
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
    count--;
    document.querySelector('.count').innerHTML--;
    if(count===0) document.querySelector('.count').innerHTML = "You lost!";
    else if(colors.every(color=>color.classList.contains('player'))) document.querySelector('.count').innerHTML = "You won!";
})

document.getElementById('blueButton').addEventListener('click', () => {
    check('blue');
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('brown', 'pink', 'yellow', 'green', 'red');
            square.classList.add('blue');
        }
    });
    count--;    
    document.querySelector('.count').innerHTML--;
    if(count===0) document.querySelector('.count').innerHTML = "You lost!";
    else if(colors.every(color=>color.classList.contains('player'))) document.querySelector('.count').innerHTML = "You won!";
})

document.getElementById('yellowButton').addEventListener('click', () => {
    check('yellow');
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('brown', 'pink', 'green', 'blue', 'red');
            square.classList.add('yellow');
        }
    });
    count--;    
    document.querySelector('.count').innerHTML--;
    if(count===0) document.querySelector('.count').innerHTML = "You lost!";  
    else if(colors.every(color=>color.classList.contains('player'))) document.querySelector('.count').innerHTML = "You won!";      
})

document.getElementById('pinkButton').addEventListener('click', () => {
    check('pink');
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('brown', 'green', 'yellow', 'blue', 'red');
            square.classList.add('pink');
        }
    });
    count--;    
    document.querySelector('.count').innerHTML--;
    if(count===0) document.querySelector('.count').innerHTML = "You lost!";    
    else if(colors.every(color=>color.classList.contains('player'))) document.querySelector('.count').innerHTML = "You won!";    
})

document.getElementById('redButton').addEventListener('click', () => {
    check('red');
    squares.forEach(square => {
        if (square.classList.contains('player')) {
            square.classList.remove('brown', 'pink', 'yellow', 'blue', 'green');
            square.classList.add('red');
        }
    });
    count--;    
    document.querySelector('.count').innerHTML--;
    if(count===0) document.querySelector('.count').innerHTML = "You lost!";
    else if(colors.every(color=>color.classList.contains('player'))) document.querySelector('.count').innerHTML = "You won!";    
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
    count--;
    document.querySelector('.count').innerHTML--;
    if(count===0) document.querySelector('.count').innerHTML = "You lost!";
    else if(colors.every(color=>color.classList.contains('player'))) document.querySelector('.count').innerHTML = "You won!";
})

document.getElementById('new-game').addEventListener('click', () => paintBoard());