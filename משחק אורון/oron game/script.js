let score = 0;
let questionCount = 0;
let currentAnswer = null;
let difficulty = 'easy';
let operation = '+';
let history = [];  // Array to store the history of questions

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('submitBtn').addEventListener('click', checkAnswer);

function startGame() {
    score = 0;
    questionCount = 0;
    history = []; // Reset history

    // Clear the table body
    const tbody = document.querySelector('#historyTable tbody');
    tbody.innerHTML = '';

    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('feedback').textContent = '';

    // Get selected difficulty and operation
    difficulty = document.getElementById('difficulty').value;
    operation = document.getElementById('operation').value;

    // Show question container
    document.getElementById('question-container').style.display = 'block';
    nextQuestion();
}

function nextQuestion() {
    questionCount++;

    if (questionCount > 10) {
        resetGame();
        return;
    }

    // Generate a random question based on selected difficulty and operation
    let num1, num2;
    let min, max;

    if (difficulty === 'easy') {
        min = 1;
        max = 10;
    } else if (difficulty === 'medium') {
        min = 10;
        max = 100;
    } else {
        min = 100;
        max = 1000;
    }

    num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Generate the question string and correct answer
    let questionText = `${num1} ${operation} ${num2}`;
    currentAnswer = calculateAnswer(num1, num2, operation);

    // Update the displayed question
    document.getElementById('question').textContent = questionText;
}

function calculateAnswer(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const correct = userAnswer === currentAnswer;

    // Update score if correct
    if (correct) {
        score++;
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        document.getElementById('feedback').textContent = `Wrong! Correct answer: ${currentAnswer}`;
    }

    // Add the question to the history table
    const tbody = document.querySelector('#historyTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${document.getElementById('question').textContent}</td>
        <td>${userAnswer}</td>
        <td>${currentAnswer}</td>
        <td>${correct ? 'Correct' : 'Incorrect'}</td>
        <td>${score}</td>
    `;
    tbody.appendChild(row);

    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('answer').value = ''; // Clear the input
    nextQuestion();
}

function resetGame() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('feedback').textContent = `Game Over! Your final score is ${score}`;
}
