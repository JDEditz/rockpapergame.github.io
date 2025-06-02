document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.choice');
    const msg = document.getElementById('result');
    const myScore = document.getElementById('playerScore');
    const pcScore = document.getElementById('computerScore');
    
    let me = 0;
    let pc = 0;

    function pcPick() {
        const stuff = ['rock', 'paper', 'scissors'];
        return stuff[Math.floor(Math.random() * stuff.length)];
    }

    function whoWon(me, pc) {
        if (me === pc) return 'tie';
        
        if (
            (me === 'rock' && pc === 'scissors') ||
            (me === 'paper' && pc === 'rock') ||
            (me === 'scissors' && pc === 'paper')
        ) {
            return 'me';
        }
        
        return 'pc';
    }

    function updatePoints(winner) {
        if (winner === 'me') me++;
        if (winner === 'pc') pc++;
        
        myScore.textContent = me;
        pcScore.textContent = pc;
    }

    function showMsg(winner, myPick, pcPick) {
        if (winner === 'tie') return "It's a tie!";
        if (winner === 'me') return `You win! ${myPick} beats ${pcPick}`;
        return `Computer wins! ${pcPick} beats ${myPick}`;
    }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const myPick = btn.dataset.choice;
            const computerPick = pcPick();
            const winner = whoWon(myPick, computerPick);
            
            updatePoints(winner);
            msg.textContent = showMsg(winner, myPick, computerPick);
        });
    });
});
