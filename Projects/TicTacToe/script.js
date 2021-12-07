(function () {
    const players = Array.from(document.querySelectorAll('input[name=player-choice]'));
    const playerMsg = document.querySelector('.message');
    const grid = document.getElementById('grid');
    const hideFieldset = document.getElementById('hiddenField');

    let mark = '';
    let cells = [];

    players.forEach(choice => {
        choice.addEventListener('click', setPlayer);
    });

    function setPlayer() {
        mark = this.value;
        if (mark === 'X') {
            // seashell.appendChild(image01);
        } else {
            // seashell.appendChild(image02);
        }
        playerMsg.textContent = 'Make your move!'
        buildGrid();
    }

    function playerMove() {}

    function buildGrid() {
        let cell
        for (let i = 1; i <= 9; i += 1) {
            let cell = document.createElement('li');
            cell.id = 'cell' + i;
            cell.addEventListener('click', playerMove);
            grid.appendChild(cell);
        }

        cells = Array.from(grid.getElementsByTagName('li'));
        hideFieldset.style.display = 'none';
        console.log(cells);
    }
})()