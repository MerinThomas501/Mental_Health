const questions = [
    { 
        text: "How often do you feel overwhelmed by your responsibilities?", 
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    { 
        text: "How often do you find it hard to relax during your free time?", 
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    { 
        text: "Do you experience physical symptoms (e.g., headaches, stomachaches, tension) when you're stressed?", 
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    { 
        text: "How often do you feel anxious or nervous without a clear reason?", 
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    { 
        text: "How often do you feel unable to focus due to stress?", 
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(index) {
    const question = questions[index];
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    questionElement.innerHTML = `
        <p>${question.text}</p>
        ${question.options.map((option, i) => `
            <label>
                <input type="radio" name="q${index}" value="${i + 1}" />
                ${option}
            </label><br>
        `).join('')}
    `;
    
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = ''; // Clear any previous content
    quizContainer.appendChild(questionElement);

    // Show Next Button after the question is displayed
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("submit-btn").style.display = "none";
}

function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        score += parseInt(selectedOption.value);
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function submitQuiz() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        score += parseInt(selectedOption.value);
    }
    showResults();
}

function showResults() {
    let recommendation = '';
    let videoEmbed = '';

    // Provide recommendations based on score
    if (score <= 10) {
        recommendation = `
            <p>Your stress level is low. Great job! Keep it up!</p>
            <p>Check out this video for more tips on maintaining a stress-free life:</p>
        `;
        videoEmbed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/1jv_3O14aHw" frameborder="0" allowfullscreen></iframe>`;
    } else if (score <= 15) {
        recommendation = `
            <p>Your stress level is moderate. Consider incorporating relaxation techniques.</p>
            <p>Here's a helpful video for stress management:</p>
        `;
        videoEmbed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/XWvpc4aqL0k" frameborder="0" allowfullscreen></iframe>`;
    } else if (score <= 20) {
        recommendation = `
            <p>Your stress level is high. It's time to adopt some serious stress management techniques.</p>
            <p>Watch this video for effective stress reduction strategies:</p>
        `;
        videoEmbed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/6p_yaNFSYao" frameborder="0" allowfullscreen></iframe>`;
    } else {
        recommendation = `
            <p>Your stress level is very high. You should definitely consider seeking professional help.</p>
            <p>Here's an article to help you understand stress and how to cope with it:</p>
            <a href="https://www.psychologytoday.com/us/basics/stress/understanding-stress" target="_blank">Understanding Stress - Psychology Today</a>
        `;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Your total score is: ${score}</p>
        <p>${recommendation}</p>
        <div>${videoEmbed}</div>
    `;

    // Hide Next Button and Show Submit Button
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
}

showQuestion(currentQuestionIndex);
