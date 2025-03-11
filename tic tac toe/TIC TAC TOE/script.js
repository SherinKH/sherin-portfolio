let title = document.querySelector('.title');
let turn = 'X';
let cells = [];

function reset(num1, num2, num3) {
    title.innerHTML = `${cells[num1]} winner`;
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';

    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 4000);
}

function winner() {
    for (let i = 1; i < 10; i++) {
        cells[i] = document.getElementById('item' + i).innerHTML;
    }
    if (cells[1] == cells[2] && cells[2] == cells[3] && cells[1] != '') {
        reset(1, 2, 3);
    }
    else if (cells[4] == cells[5] && cells[5] == cells[6] && cells[5] != '') {
        reset(4, 5, 6);
    }
    else if (cells[7] == cells[8] && cells[8] == cells[9] && cells[8] != '') {
        reset(7, 8, 9);
    }

    else if (cells[1] == cells[4] && cells[4] == cells[7] && cells[1] != '') {
        reset(1, 4, 7);
    }
    else if (cells[2] == cells[5] && cells[5] == cells[8] && cells[5] != '') {
        reset(2, 5, 8);
    }
    else if (cells[3] == cells[6] && cells[6] == cells[9] && cells[6] != '') {
        reset(3, 6, 9);
    }
    else if (cells[1] == cells[5] && cells[5] == cells[9] && cells[5] != '') {
        reset(1, 5, 9);
    }
    else if (cells[3] == cells[5] && cells[5] == cells[7] && cells[5] != '') {
        reset(3, 5, 7);
    }

}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O';
    }
    else if (turn === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
    winner();
}










