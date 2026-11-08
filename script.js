
// =====================================
// MCA MOCK TEST - QUESTION DATABASE
// =====================================

// Every question has its correct answer.
// Q12 accepts both equivalent correct options.

const questions = [

    {
        q: "What is the output of the following code?",
        code: "AL = -28 decimal, BL = 59 decimal\nIMUL BL\nAX = ?",
        options: [
            ["AX = 1652H", false],
            ["AX = F9C8H", false],
            ["AX = F98CH", true],
            ["AX = 1652", false]
        ]
    },

    {
        q: "In normal text mode, the screen is divided into:",
        options: [
            ["80 Rows and 25 Columns", false],
            ["25 Rows and 80 Columns", true],
            ["80 Rows and 80 Columns", false],
            ["25 Rows and 25 Columns", false]
        ]
    },

    {
        q: "If we want to divide a signed number by 2, this operation can better be accomplished by:",
        options: [
            ["SHL", false],
            ["SHR", false],
            ["SAR", true],
            ["SAL", false]
        ]
    },

    {
        q: "In assembly language, the CX register is used normally as a ______ register.",
        options: [
            ["index", false],
            ["pointer", false],
            ["source", false],
            ["counter", true]
        ]
    },

    {
        q: "What is the output of the following code?",
        code: "PUSH AL",
        options: [
            ["Increment SP by 2 & push a word to stack", false],
            ["Illegal", true],
            ["Decrement SP by 2 & push AL to stack", false],
            ["Decrement SP by 2 & push a word to stack", false]
        ]
    },

    {
        q: "When a 32 bit number is divided by a 16 bit number, the remainder will be stored in:",
        options: [
            ["CX", false],
            ["AX", false],
            ["DX", true],
            ["BX", false]
        ]
    },

    {
        q: "If a common cathode 7-segment display is connected to Port A of 8255, writing 0x3F to the port will display:",
        options: [
            ["8", false],
            ["9", false],
            ["0", true],
            ["1", false]
        ]
    },

    {
        q: "What is the output of the following code?",
        code: "CF = 0, BH = 179\nRCL BH, 1",
        options: [
            ["CF=1, BH=01001101", false],
            ["CF=0, BH=00101100", false],
            ["CF=0, BH=01100101", false],
            ["CF=1, BH=01100110", true]
        ]
    },

    {
        q: "______ register holds the address of next instruction to be executed.",
        options: [
            ["Source index", false],
            ["Program counter", true],
            ["Base pointer", false],
            ["Code segment", false]
        ]
    },

    {
        q: "To convert any digit to its ASCII representation, we need to:",
        options: [
            ["Subtract 0x61 from the digit", false],
            ["Subtract 0x30 from the digit", false],
            ["Add 0x61 with the digit", false],
            ["Add 0x30 with the digit", true]
        ]
    },

    {
        q: "For the execution of the instruction DIV BL, the implied dividend will be stored in:",
        options: [
            ["DX", false],
            ["CX", false],
            ["AX", true],
            ["BX", false]
        ]
    },

    {
        q: "What is the output of the following code?",
        code: "AX = 37D7H, BH = 151 decimal\nDIV BH",
        options: [
            ["AL = 56H, AH = 5EH", false],
            ["AL = 5EH, AH = 101 decimal", true],
            ["AL = 65H, AH = 94 decimal", false],
            ["AH = 65H, AL = 5EH", true]
        ]
    },

    {
        q: "The instruction AND AH, 11110111 is equivalent to:",
        options: [
            ["Sub AH, 4, if 4th bit of AH is cleared", false],
            ["Sub AH, 8, if 4th bit of AH is set", true],
            ["Sub AH, 8, if 4th bit of AH is cleared", false],
            ["Sub AH, 4, if 4th bit of AH is set", false]
        ]
    },

    {
        q: "INT 21 service 07H is used to read character from standard input without echo. It returns the result in ______ register.",
        options: [
            ["BH", false],
            ["CL", false],
            ["AL", true],
            ["BL", false]
        ]
    },

    {
        q: "Suppose AL contains 20 decimal, then after two left shifts produces the value as:",
        options: [
            ["40", false],
            ["5", false],
            ["80", true],
            ["10", false]
        ]
    },

    {
        q: "Which flags are NOT used for mathematical operations?",
        options: [
            ["Direction, Overflow and Trap flag", false],
            ["Direction, Interrupt and Trap flag", true],
            ["Carry, Interrupt and Trap flag", false],
            ["Direction, Interrupt and Sign flag", false]
        ]
    },

    {
        q: "In the instruction MOV AX, 5 the number of operands is:",
        options: [
            ["3", false],
            ["4", false],
            ["1", false],
            ["2", true]
        ]
    },

    {
        q: "What is the output of the following code?",
        code: "SI = 1001001110101101, CF = 0\nSHR SI, 1",
        options: [
            ["SI=19820, CF=1", false],
            ["SI=53708, CF=1", false],
            ["SI=18902, CF=1", true],
            ["SI=37805, CF=1", false]
        ]
    },

    {
        q: "In 8255, if you want to output data to a 7-segment display through Port B, which control word configures Port B as output (Mode 0)?",
        options: [
            ["10010000B", true],
            ["10000001B", false],
            ["10000010B", false],
            ["10000000B", false]
        ]
    },

    {
        q: "What is the output of the following code?",
        code: "BX = 23763, CL = 8\nROL BX, CL",
        options: [
            ["BX=0110100100111101, CF=1", false],
            ["BX=1011100110001100, CF=1", false],
            ["BX=1101001101011100, CF=0", true],
            ["BX=0101110011010011, CF=0", false]
        ]
    }

];


// =====================================
// GLOBAL VARIABLES
// =====================================

let currentQuestions = [];
let submitted = false;


// =====================================
// SHUFFLE FUNCTION
// =====================================

function shuffle(array) {

    let arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];

    }

    return arr;
}


// =====================================
// START / RETAKE QUIZ
// =====================================

function startQuiz() {

    submitted = false;

    // Shuffle questions and options
    currentQuestions = shuffle(questions).map(q => ({

        ...q,

        options: shuffle(q.options)

    }));

    document.getElementById("quiz").innerHTML = "";

    document.getElementById("result").style.display = "none";

    document.getElementById("submitBtn").style.display = "block";

    renderQuestions();

    updateProgress();

    window.scrollTo(0, 0);

}


// =====================================
// DISPLAY QUESTIONS
// =====================================

function renderQuestions() {

    const quiz = document.getElementById("quiz");

    currentQuestions.forEach((q, index) => {

        let html = `

            <div class="question" id="question${index}">

                <h3>Q${index + 1}. ${q.q}</h3>

        `;

        // Display assembly code if available
        if (q.code) {

            html += `

                <div class="code">${q.code}</div>

            `;

        }

        // Display options
        q.options.forEach((opt, optIndex) => {

            const letter = String.fromCharCode(97 + optIndex);

            html += `

                <label class="option" id="option${index}_${optIndex}">

                    <input
                        type="radio"
                        name="q${index}"
                        value="${optIndex}"
                        onchange="updateProgress()"
                    >

                    <b>${letter})</b> ${opt[0]}

                </label>

            `;

        });

        html += `

                <div class="explanation" id="explanation${index}"></div>

            </div>

        `;

        quiz.innerHTML += html;

    });

}


// =====================================
// UPDATE PROGRESS BAR
// =====================================

function updateProgress() {

    let count = 0;

    currentQuestions.forEach((q, index) => {

        if (
            document.querySelector(
                `input[name="q${index}"]:checked`
            )
        ) {

            count++;

        }

    });

    document.getElementById("answered").innerText =

        `Answered: ${count}/20`;

    document.getElementById("progressBar").style.width =

        (count / 20 * 100) + "%";

}


// =====================================
// SUBMIT QUIZ
// =====================================

function submitQuiz() {

    if (submitted) return;

    if (!confirm("Are you sure you want to submit the test?")) {

        return;

    }

    submitted = true;

    let correct = 0;
    let wrong = 0;
    let blank = 0;


    currentQuestions.forEach((q, index) => {

        const selected = document.querySelector(

            `input[name="q${index}"]:checked`

        );

        // Find all correct option indexes
        const correctIndexes = [];

        q.options.forEach((opt, i) => {

            if (opt[1]) {

                correctIndexes.push(i);

            }

        });


        // Check each option
        q.options.forEach((opt, i) => {

            const label = document.getElementById(

                `option${index}_${i}`

            );

            const radio = label.querySelector("input");

            radio.disabled = true;


            // Highlight correct option
            if (opt[1]) {

                label.classList.add("correct");

            }


            // Highlight selected wrong option
            if (

                selected &&

                Number(selected.value) === i &&

                !opt[1]

            ) {

                label.classList.add("wrong");

            }

        });


        const explanation = document.getElementById(

            `explanation${index}`

        );


        // Calculate result
        if (!selected) {

            blank++;

            explanation.innerHTML =

                '<span class="red">Not Answered</span>';

        }

        else if (

            correctIndexes.includes(Number(selected.value))

        ) {

            correct++;

            explanation.innerHTML =

                '<span class="green">✓ Correct Answer</span>';

        }

        else {

            wrong++;

            explanation.innerHTML =

                '<span class="red">✗ Wrong Answer</span>';

        }


        // Show correct answer
        const correctText = correctIndexes.map(i => {

            return (

                String.fromCharCode(97 + i) +

                ") " +

                q.options[i][0]

            );

        }).join(" / ");


        explanation.innerHTML +=

            `<br><span class="green">Correct: ${correctText}</span>`;

    });


    // =================================
    // FINAL RESULT CALCULATION
    // =================================

    const marks = correct - (wrong * 0.5);

    const percentage = (correct / 20 * 100);


    document.getElementById("correctCount").innerText = correct;

    document.getElementById("wrongCount").innerText = wrong;

    document.getElementById("blankCount").innerText = blank;

    document.getElementById("finalScore").innerText =

        marks.toFixed(2) + " / 20";

    document.getElementById("percentage").innerText =

        percentage.toFixed(1) + "%";


    // Grade system
    let grade = "";

    if (marks >= 16) {

        grade = "Excellent Performance!";

    }

    else if (marks >= 12) {

        grade = "Good Performance!";

    }

    else if (marks >= 8) {

        grade = "Keep Practicing!";

    }

    else {

        grade = "Need More Practice!";

    }


    document.getElementById("grade").innerText = grade;


    // Hide submit button
    document.getElementById("submitBtn").style.display = "none";

    // Show result
    document.getElementById("result").style.display = "block";


    // Scroll to result
    window.scrollTo({

        top: document.body.scrollHeight,

        behavior: "smooth"

    });

}


// =====================================
// INITIALIZE QUIZ
// =====================================

startQuiz();
