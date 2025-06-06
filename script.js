document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ພາສາລາວເປັນພາສາປະຈຳຊາດຂອງປະເທດໃດ?",
            options: [
                "ໄທ",
                "ຫວຽດນາມ",
                "ກຳປູເຈຍ",
                "ລາວ"
            ],
            answer: "ລາວ",
            explanation: "ພາສາລາວເປັນພາສາທາງການ ແລະ ພາສາຫຼັກທີ່ໃຊ້ໃນການສື່ສານທົ່ວປະເທດລາວ."
        },
        {
            question: "ພາສາລາວຈັດຢູ່ໃນຕະກູນພາສາໃດ?",
            options: [
                "ອິນໂດ-ຢູໂຣບ",
                "ໄຕ-ກະໄດ",
                "ມົງ-ຂະແມ",
                "ຈີນ-ທິເບດ"
            ],
            answer: "ໄຕ-ກະໄດ",
            explanation: "ພາສາລາວຈັດຢູ່ໃນຕະກູນພາສາໄຕ-ກະໄດ (Tai-Kadai language family)."
        },
        {
            question: "ພາສາລາວເປັນພາສາວັນນະຍຸດ (tonal language) ຫຼືບໍ່?",
            options: [
                "ແມ່ນ",
                "ບໍ່ແມ່ນ",
                "ບາງສ່ວນ",
                "ບໍ່ກ່ຽວຂ້ອງ"
            ],
            answer: "ແມ່ນ",
            explanation: "ພາສາລາວເປັນພາສາວັນນະຍຸດ (tonal language) ທີ່ການປ່ຽນລະດັບສຽງຈະເຮັດໃຫ້ຄວາມໝາຍຂອງຄຳປ່ຽນແປງ."
        },
        {
            question: "ຕົວອັກສອນທີ່ໃຊ້ໃນການຂຽນພາສາລາວມີຊື່ວ່າແນວໃດ?",
            options: [
                "ຕົວອັກສອນໄທ",
                "ຕົວອັກສອນຂະແມ",
                "ຕົວອັກສອນລາວ (ອັກສອນລາວ)",
                "ຕົວອັກສອນບາລີ"
            ],
            answer: "ຕົວອັກສອນລາວ (ອັກສອນລາວ)",
            explanation: "ພາສາລາວໃຊ້ຕົວອັກສອນລາວ (ອັກສອນລາວ)."
        },
        {
            question: "ຕົວອັກສອນລາວມີຕົ້ນກຳເນີດມາຈາກອັກສອນບູຮານໃດ?",
            options: [
                "ອັກສອນຮີບຣູ",
                "ອັກສອນກຣີກ",
                "ອັກສອນບຣາມມີ (Brahmi script)",
                "ອັກສອນລາຕິນ"
            ],
            answer: "ອັກສອນບຣາມມີ (Brahmi script)",
            explanation: "ຕົວອັກສອນລາວມີຕົ້ນກຳເນີດມາຈາກອັກສອນບຣາມມີ (Brahmi script) ຜ່ານທາງອັກສອນຂະແມບູຮານ."
        },
        {
            question: "ໃນການຮຽນວິຊາພາສາລາວ, ນັກຮຽນຈະໄດ້ຮຽນຮູ້ທັກສະໃດແດ່?",
            options: [
                "ການຄິດໄລ່ເລກ",
                "ການແຕ້ມຮູບ",
                "ການຟັງ, ການເວົ້າ, ການອ່ານ, ການຂຽນ",
                "ການປຸງແຕ່ງອາຫານ"
            ],
            answer: "ການຟັງ, ການເວົ້າ, ການອ່ານ, ການຂຽນ",
            explanation: "ວິຊາພາສາລາວກວມເອົາທັກສະຕ່າງໆ ເຊັ່ນ: ການຟັງ, ການເວົ້າ, ການອ່ານ, ການຂຽນ, ໄວຍາກອນ, ຄຳສັບ, ແລະ ວັນນະຄະດີລາວ."
        },
        {
            question: "ພາສາລາວມີຄຳຢືມມາຈາກພາສາໃດແດ່?",
            options: [
                "ພາສາຍີ່ປຸ່ນ, ພາສາຈີນ",
                "ພາສາປາລີ, ສັນສະກິດ, ຝຣັ່ງ, ອັງກິດ",
                "ພາສາສະເປນ, ພາສາເຢຍລະມັນ",
                "ພາສາຣັດເຊຍ, ພາສາໂປແລນ"
            ],
            answer: "ພາສາປາລີ, ສັນສະກິດ, ຝຣັ່ງ, ອັງກິດ",
            explanation: "ພາສາລາວມີຄຳຢືມມາຈາກພາສາປາລີ, ສັນສະກິດ, ຝຣັ່ງ, ແລະ ອັງກິດ."
        },
        {
            question: "ການຮຽນຮູ້ພາສາລາວມີຄວາມສຳຄັນແນວໃດຕໍ່ການຮັກສາວັດທະນະທຳ?",
            options: [
                "ບໍ່ມີບົດບາດ",
                "ເປັນພາຫະນະໃນການບັນທຶກ ແລະ ສືບທອດວັດທະນະທຳ",
                "ສຳຄັນສຳລັບການຄ້າຂາຍເທົ່ານັ້ນ",
                "ເປັນການຮຽນຮູ້ເລື່ອງເຕັກໂນໂລຢີ"
            ],
            answer: "ເປັນພາຫະນະໃນການບັນທຶກ ແລະ ສືບທອດວັດທະນະທຳ",
            explanation: "ພາສາລາວເປັນພາຫະນະໃນການບັນທຶກ ແລະ ສືບທອດວັນນະຄະດີ, ເພງ, ນິທານ, ແລະ ຮີດຄອງປະເພນີຕ່າງໆ ຂອງລາວ."
        },
        {
            question: "ມີຈັກສຽງວັນນະຍຸດໃນສໍານຽງພາສາລາວວຽງຈັນ?",
            options: [
                "3 ສຽງ",
                "4 ສຽງ",
                "5 ສຽງ",
                "6 ສຽງ"
            ],
            answer: "6 ສຽງ",
            explanation: "ໃນສໍານຽງພາສາລາວວຽງຈັນມີ 6 ສຽງວັນນະຍຸດ."
        },
        {
            question: "ນອກຈາກເປັນພາສາສື່ສານແລ້ວ ພາສາລາວເປັນຕົວແທນຂອງສິ່ງໃດ?",
            options: [
                "ອາຫານ",
                "ດົນຕີ",
                "ເອກະລັກ ແລະ ຈິດວິນຍານຂອງຊາດ",
                "ສະຖານທີ່ທ່ອງທ່ຽວ"
            ],
            answer: "ເອກະລັກ ແລະ ຈິດວິນຍານຂອງຊາດ",
            explanation: "ພາສາລາວເປັນພາກສ່ວນສຳຄັນຂອງວັດທະນະທຳ ແລະ ເອກະລັກຂອງຊາດລາວ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
