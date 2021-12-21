(function () {
    const players = Array.from(document.querySelectorAll('input[name=player-choice]'));
    const playerMsg = document.querySelector('.message');
    const grid = document.getElementById('grid');
    const hideFieldset = document.getElementById('hiddenField');
    const seashell = document.querySelector('.seashell');
    const resetBtn = document.querySelector('.reset');
    const hideRestartBtn = document.querySelector('.hiddenBtn');



    const image01 = new Image();
    image01.src = './resource/seashell01.png';
    image01.alt = 'seashell';
    //image01.width = '50';

    const image02 = new Image();
    image02.src = './resource/seashell02.png';
    image02.alt = 'seashell';
    //image02.width = '50';

    let mark = '';
    let cells = [];
    let cellIds = [];
    let cellIdTrack = [];
    let cellPlayed = [];
    let victory = false;

    players.forEach(choice => {
        choice.addEventListener('click', setPlayer);
    });
    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        restartGame();
    });

    function setPlayer() {
        mark = this.value;
        if (mark === 'X') {
            seashell.appendChild(image01);
        } else {
            seashell.appendChild(image02);
        }
        playerMsg.textContent = 'Make your move!'
        buildGrid();
    }

    function playerMove() {
        if (this.textContent === '' && mark === 'X' && victory === false) {
            this.textContent = mark;
            this.appendChild(image01.cloneNode(true));
            cellIdTrack.push(this.id);
        } else if (this.textContent === '' && mark === 'O' && victory === false) {
            this.textContent = mark;
            this.appendChild(image02.cloneNode(true));
            cellIdTrack.push(this.id);
        }

        if (!victory) playerMsg.textContent = 'Wait!'

        checkCellRow();
        gameDraw();
        switchMark();
        setTimeout(computerMove, 1000);
    }

    function computerMove() {
        cells.forEach(cell => {
            if (cell.textContent === '' && victory === false) {
                cellIds.push(cell.id);
            }
        });

        if (mark === 'O' && victory === false) {
            breakme: {
                // Make the computer win
                // row strategy 01
                if (cellIds.includes('cell3') && cellPlayed.includes('cell1') && cellPlayed.includes('cell2') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[2].id);
                    break breakme;
                }
                if (cellIds.includes('cell2') && cellPlayed.includes('cell1') && cellPlayed.includes('cell3') && cells[1].textContent === '') {
                    cells[1].textContent = mark;
                    cells[1].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[1].id);
                    break breakme;
                }
                if (cellIds.includes('cell1') && cellPlayed.includes('cell2') && cellPlayed.includes('cell3') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[0].id);
                    break breakme;
                }

                // row strategy 02
                if (cellIds.includes('cell6') && cellPlayed.includes('cell4') && cellPlayed.includes('cell5') && cells[5].textContent === '') {
                    cells[5].textContent = mark;
                    cells[5].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[5].id);
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellPlayed.includes('cell4') && cellPlayed.includes('cell6') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[4].id);
                    break breakme;
                }
                if (cellIds.includes('cell4') && cellPlayed.includes('cell5') && cellPlayed.includes('cell6') && cells[3].textContent === '') {
                    cells[3].textContent = mark;
                    cells[3].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[3].id);
                    break breakme;
                }

                // row strategy 03
                if (cellIds.includes('cell9') && cellPlayed.includes('cell7') && cellPlayed.includes('cell8') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[8].id);
                    break breakme;
                }
                if (cellIds.includes('cell8') && cellPlayed.includes('cell7') && cellPlayed.includes('cell9') && cells[7].textContent === '') {
                    cells[7].textContent = mark;
                    cells[7].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[7].id);
                    break breakme;
                }
                if (cellIds.includes('cell7') && cellPlayed.includes('cell8') && cellPlayed.includes('cell9') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[6].id);
                    break breakme;
                }

                // column strategy 01
                if (cellIds.includes('cell7') && cellPlayed.includes('cell1') && cellPlayed.includes('cell4') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[6].id);
                    break breakme;
                }
                if (cellIds.includes('cell4') && cellPlayed.includes('cell1') && cellPlayed.includes('cell7') && cells[3].textContent === '') {
                    cells[3].textContent = mark;
                    cells[3].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[3].id);
                    break breakme;
                }
                if (cellIds.includes('cell1') && cellPlayed.includes('cell4') && cellPlayed.includes('cell7') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[0].id);
                    break breakme;
                }

                // column strategy 02
                if (cellIds.includes('cell8') && cellPlayed.includes('cell2') && cellPlayed.includes('cell5') && cells[7].textContent === '') {
                    cells[7].textContent = mark;
                    cells[7].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[7].id);
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellPlayed.includes('cell2') && cellPlayed.includes('cell8') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[4].id);
                    break breakme;
                }
                if (cellIds.includes('cell2') && cellPlayed.includes('cell5') && cellPlayed.includes('cell8') && cells[1].textContent === '') {
                    cells[1].textContent = mark;
                    cells[1].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[1].id);
                    break breakme;
                }

                // column strategy 03
                if (cellIds.includes('cell9') && cellPlayed.includes('cell3') && cellPlayed.includes('cell6') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[8].id);
                    break breakme;
                }
                if (cellIds.includes('cell6') && cellPlayed.includes('cell3') && cellPlayed.includes('cell9') && cells[5].textContent === '') {
                    cells[5].textContent = mark;
                    cells[5].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[5].id);
                    break breakme;
                }
                if (cellIds.includes('cell3') && cellPlayed.includes('cell6') && cellPlayed.includes('cell9') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[2].id);
                    break breakme;
                }

                // diagonal strategy 01
                if (cellIds.includes('cell9') && cellPlayed.includes('cell1') && cellPlayed.includes('cell5') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[8].id);
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellPlayed.includes('cell1') && cellPlayed.includes('cell9') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[4].id);
                    break breakme;
                }
                if (cellIds.includes('cell1') && cellPlayed.includes('cell5') && cellPlayed.includes('cell9') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[0].id);
                    break breakme;
                }

                // diagonal strategy 02
                if (cellIds.includes('cell7') && cellPlayed.includes('cell3') && cellPlayed.includes('cell5') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[6].id);
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellPlayed.includes('cell3') && cellPlayed.includes('cell7') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[4].id);
                    break breakme;
                }
                if (cellIds.includes('cell3') && cellPlayed.includes('cell5') && cellPlayed.includes('cell7') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[2].id);
                    break breakme;
                }
                // end of strategies for computer to win


                // Prevent the player to win easily
                // row strategy 01
                if (cellIds.includes('cell3') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell2') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[2].id);
                    break breakme;
                }
                if (cellIds.includes('cell2') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell3') && cells[1].textContent === '') {
                    cells[1].textContent = mark;
                    cells[1].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[1].id);
                    break breakme;
                }
                if (cellIds.includes('cell1') && cellIdTrack.includes('cell2') && cellIdTrack.includes('cell3') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[0].id);
                    break breakme;
                }

                // row strategy 02
                if (cellIds.includes('cell6') && cellIdTrack.includes('cell4') && cellIdTrack.includes('cell5') && cells[5].textContent === '') {
                    cells[5].textContent = mark;
                    cells[5].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[5].id);
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellIdTrack.includes('cell4') && cellIdTrack.includes('cell6') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[4].id);
                    break breakme;
                }
                if (cellIds.includes('cell4') && cellIdTrack.includes('cell5') && cellIdTrack.includes('cell6') && cells[3].textContent === '') {
                    cells[3].textContent = mark;
                    cells[3].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[3].id);
                    break breakme;
                }

                // row strategy 03
                if (cellIds.includes('cell9') && cellIdTrack.includes('cell7') && cellIdTrack.includes('cell8') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[8].id);
                    break breakme;
                }
                if (cellIds.includes('cell8') && cellIdTrack.includes('cell7') && cellIdTrack.includes('cell9') && cells[7].textContent === '') {
                    cells[7].textContent = mark;
                    cells[7].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[7].id);
                    break breakme;
                }
                if (cellIds.includes('cell7') && cellIdTrack.includes('cell8') && cellIdTrack.includes('cell9') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[6].id);
                    break breakme;
                }

                // column strategy 01
                if (cellIds.includes('cell7') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell4') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[6].id);
                    break breakme;
                }
                if (cellIds.includes('cell4') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell7') && cells[3].textContent === '') {
                    cells[3].textContent = mark;
                    cells[3].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[3].id);
                    break breakme;
                }
                if (cellIds.includes('cell1') && cellIdTrack.includes('cell4') && cellIdTrack.includes('cell7') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[0].id);
                    break breakme;
                }

                // column strategy 02
                if (cellIds.includes('cell8') && cellIdTrack.includes('cell2') && cellIdTrack.includes('cell5') && cells[7].textContent === '') {
                    cells[7].textContent = mark;
                    cells[7].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[7].id);
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellIdTrack.includes('cell2') && cellIdTrack.includes('cell8') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[4].id);
                    break breakme;
                }
                if (cellIds.includes('cell2') && cellIdTrack.includes('cell5') && cellIdTrack.includes('cell8') && cells[1].textContent === '') {
                    cells[1].textContent = mark;
                    cells[1].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[1].id);
                    break breakme;
                }

                // column strategy 03
                if (cellIds.includes('cell9') && cellIdTrack.includes('cell3') && cellIdTrack.includes('cell6') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[8].id);
                    break breakme;
                }
                if (cellIds.includes('cell6') && cellIdTrack.includes('cell3') && cellIdTrack.includes('cell9') && cells[5].textContent === '') {
                    cells[5].textContent = mark;
                    cells[5].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[5].id);
                    break breakme;
                }
                if (cellIds.includes('cell3') && cellIdTrack.includes('cell6') && cellIdTrack.includes('cell9') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[2].id);
                    break breakme;
                }

                // diagonal strategy 01
                if (cellIds.includes('cell9') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell5') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[8].id);
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell9') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[4].id);
                    break breakme;
                }
                if (cellIds.includes('cell1') && cellIdTrack.includes('cell5') && cellIdTrack.includes('cell9') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[0].id);
                    break breakme;
                }

                // diagonal strategy 02
                if (cellIds.includes('cell7') && cellIdTrack.includes('cell3') && cellIdTrack.includes('cell5') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[6].id);
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellIdTrack.includes('cell3') && cellIdTrack.includes('cell7') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[4].id);
                    break breakme;
                }
                if (cellIds.includes('cell3') && cellIdTrack.includes('cell5') && cellIdTrack.includes('cell7') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[2].id);
                    break breakme;
                }
                // end of strategies

                // computer moves to win
                if (cellIds.includes('cell5') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[4].id);
                    console.log(cellPlayed);
                    break breakme;
                }
                if (cellIds.includes('cell1') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[0].id);
                    console.log(cellPlayed);
                    break breakme;
                }
                if (cellIds.includes('cell9') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[8].id);
                    console.log(cellPlayed);
                    break breakme;
                }
                if (cellIds.includes('cell3') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[2].id);
                    console.log(cellPlayed);
                    break breakme;
                }
                if (cellIds.includes('cell7') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[6].id);
                    console.log(cellPlayed);
                    break breakme;
                }
                if (cellIds.includes('cell6') && cells[5].textContent === '') {
                    cells[5].textContent = mark;
                    cells[5].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[5].id);
                    console.log(cellPlayed);
                    break breakme;
                }
                if (cellIds.includes('cell8') && cells[7].textContent === '') {
                    cells[7].textContent = mark;
                    cells[7].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[7].id);
                    console.log(cellPlayed);
                    break breakme;
                }
                if (cellIds.includes('cell2') && cells[1].textContent === '') {
                    cells[1].textContent = mark;
                    cells[1].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[1].id);
                    console.log(cellPlayed);
                    break breakme;
                }
                if (cellIds.includes('cell4') && cells[3].textContent === '') {
                    cells[3].textContent = mark;
                    cells[3].appendChild(image02.cloneNode(true));
                    cellPlayed.push(cells[3].id);
                    console.log(cellPlayed);
                    break breakme;
                }
            }
        }

        // Changing the seashell
        if (mark === 'X' && victory === false) {
            breakme: {
                // row strategy 01
                if (cellIds.includes('cell3') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell2') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell2') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell3') && cells[1].textContent === '') {
                    cells[1].textContent = mark;
                    cells[1].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell1') && cellIdTrack.includes('cell2') && cellIdTrack.includes('cell3') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image01.cloneNode(true));
                    break breakme;
                }

                // row strategy 02
                if (cellIds.includes('cell6') && cellIdTrack.includes('cell4') && cellIdTrack.includes('cell5') && cells[5].textContent === '') {
                    cells[5].textContent = mark;
                    cells[5].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellIdTrack.includes('cell4') && cellIdTrack.includes('cell6') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell4') && cellIdTrack.includes('cell5') && cellIdTrack.includes('cell6') && cells[3].textContent === '') {
                    cells[3].textContent = mark;
                    cells[3].appendChild(image01.cloneNode(true));
                    break breakme;
                }

                // row strategy 03
                if (cellIds.includes('cell9') && cellIdTrack.includes('cell7') && cellIdTrack.includes('cell8') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell8') && cellIdTrack.includes('cell7') && cellIdTrack.includes('cell9') && cells[7].textContent === '') {
                    cells[7].textContent = mark;
                    cells[7].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell7') && cellIdTrack.includes('cell8') && cellIdTrack.includes('cell9') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image01.cloneNode(true));
                    break breakme;
                }

                // column strategy 01
                if (cellIds.includes('cell7') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell4') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell4') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell7') && cells[3].textContent === '') {
                    cells[3].textContent = mark;
                    cells[3].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell1') && cellIdTrack.includes('cell4') && cellIdTrack.includes('cell7') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image01.cloneNode(true));
                    break breakme;
                }

                // column strategy 02
                if (cellIds.includes('cell8') && cellIdTrack.includes('cell2') && cellIdTrack.includes('cell5') && cells[7].textContent === '') {
                    cells[7].textContent = mark;
                    cells[7].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellIdTrack.includes('cell2') && cellIdTrack.includes('cell8') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell2') && cellIdTrack.includes('cell5') && cellIdTrack.includes('cell8') && cells[1].textContent === '') {
                    cells[1].textContent = mark;
                    cells[1].appendChild(image01.cloneNode(true));
                    break breakme;
                }

                // column strategy 03
                if (cellIds.includes('cell9') && cellIdTrack.includes('cell3') && cellIdTrack.includes('cell6') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell6') && cellIdTrack.includes('cell3') && cellIdTrack.includes('cell9') && cells[5].textContent === '') {
                    cells[5].textContent = mark;
                    cells[5].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell3') && cellIdTrack.includes('cell6') && cellIdTrack.includes('cell9') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image01.cloneNode(true));
                    break breakme;
                }

                // diagonal strategy 01
                if (cellIds.includes('cell9') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell5') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellIdTrack.includes('cell1') && cellIdTrack.includes('cell9') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell1') && cellIdTrack.includes('cell5') && cellIdTrack.includes('cell9') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image01.cloneNode(true));
                    break breakme;
                }

                // diagonal strategy 02
                if (cellIds.includes('cell7') && cellIdTrack.includes('cell3') && cellIdTrack.includes('cell5') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell5') && cellIdTrack.includes('cell3') && cellIdTrack.includes('cell7') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell3') && cellIdTrack.includes('cell5') && cellIdTrack.includes('cell7') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                // end of strategies

                // Make the computer win
                if (cellIds.includes('cell5') && cells[4].textContent === '') {
                    cells[4].textContent = mark;
                    cells[4].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell1') && cells[0].textContent === '') {
                    cells[0].textContent = mark;
                    cells[0].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell9') && cells[8].textContent === '') {
                    cells[8].textContent = mark;
                    cells[8].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell3') && cells[2].textContent === '') {
                    cells[2].textContent = mark;
                    cells[2].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell7') && cells[6].textContent === '') {
                    cells[6].textContent = mark;
                    cells[6].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell6') && cells[5].textContent === '') {
                    cells[5].textContent = mark;
                    cells[5].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell8') && cells[7].textContent === '') {
                    cells[7].textContent = mark;
                    cells[7].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell2') && cells[1].textContent === '') {
                    cells[1].textContent = mark;
                    cells[1].appendChild(image01.cloneNode(true));
                    break breakme;
                }
                if (cellIds.includes('cell4') && cells[3].textContent === '') {
                    cells[3].textContent = mark;
                    cells[3].appendChild(image01.cloneNode(true));
                    break breakme;
                }
            }
        }

        if (!victory) playerMsg.textContent = 'Make your move';

        checkCellRow();
        gameDraw();
        switchMark();
    }

    function switchMark() {
        if (mark === 'X') {
            mark = 'O';
        } else {
            mark = 'X';
        }
    }

    function buildGrid() {
        for (let i = 1; i <= 9; i += 1) {
            let cell = document.createElement('li');
            cell.id = 'cell' + i;
            cell.addEventListener('click', playerMove);
            grid.appendChild(cell);
        }
        cells = Array.from(grid.getElementsByTagName('li'));
        hideFieldset.style.display = 'none';
        hideRestartBtn.style.display = 'block';
    }

    function gameDraw() {
        let draw = [];
        cells.forEach(cell => {
            if (cell.textContent !== '') {
                draw.push(cell);
            }
        });
        if (draw.length === 9 && victory === false) {
            seashell.innerHTML = '';
            playerMsg.textContent = "It's a draw!";
            draw = [''];
            victory = true;
        }
    }

    function winner(cell01, cell02, cell03) {
        if (cell01.textContent === mark && cell02.textContent === mark && cell03.textContent === mark) {
            if (mark === 'X') {
                seashell.innerHTML = '';
                seashell.appendChild(image01);
            } else {
                seashell.innerHTML = '';
                seashell.appendChild(image02);
            }
            playerMsg.textContent = 'is the winner!';
            victory = true;
        }
    }

    function checkCellRow() {
        winner(document.getElementById('cell1'), document.getElementById('cell2'), document.getElementById('cell3'));
        winner(document.getElementById('cell4'), document.getElementById('cell5'), document.getElementById('cell6'));
        winner(document.getElementById('cell7'), document.getElementById('cell8'), document.getElementById('cell9'));
        winner(document.getElementById('cell1'), document.getElementById('cell4'), document.getElementById('cell7'));
        winner(document.getElementById('cell2'), document.getElementById('cell5'), document.getElementById('cell8'));
        winner(document.getElementById('cell3'), document.getElementById('cell6'), document.getElementById('cell9'));
        winner(document.getElementById('cell1'), document.getElementById('cell5'), document.getElementById('cell9'));
        winner(document.getElementById('cell3'), document.getElementById('cell5'), document.getElementById('cell7'));
    }

    function restartGame() {
        mark = '';
        cellIds = [];
        cellIdTrack = [];
        cellPlayed = [];
        victory = false;

        cells.forEach(cell => {
            cell.textContent = '';
        });
        playerMsg.textContent = 'Please choose your seashell';
        seashell.textContent = '';
        grid.innerHTML = '';
        hideFieldset.style.display = 'block';
        hideRestartBtn.style.display = 'none';
    }
})()