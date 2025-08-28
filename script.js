// 90-day AI-only schedule
const schedule = [
    { day: 1, task: "Read Chapter 1 of Artificial Intelligence: A Modern Approach", link: "", prompt: "How does AI mimic human intelligence?", time: "1 hr", subject: "AI" },
    { day: 2, task: "Watch 'AI Isn't the Problem' by Andrew Ng", link: "https://www.ted.com/talks/andrew_ng_ai_isn_t_the_problem_it_s_the_solution", prompt: "How can AI solve global challenges?", time: "1 hr", subject: "AI" },
    { day: 3, task: "Start AI For Everyone (Module 1)", link: "https://www.coursera.org/learn/ai-for-everyone", prompt: "What surprised you about AI’s scope?", time: "1.5 hrs", subject: "AI" },
    { day: 4, task: "Read Chapter 1 of Mathematics for Machine Learning", link: "https://mml-book.github.io/", prompt: "Why is math critical for AI?", time: "1.5 hrs", subject: "AI" },
    { day: 5, task: "Explore Elements of AI (Module 1)", link: "https://www.elementsofai.com/", prompt: "How do AI limits shape ethical use?", time: "1 hr", subject: "AI" },
    { day: 6, task: "Read X post on AI, ML, DL, RL relationships", link: "", prompt: "How do these subsets connect to real-world uses?", time: "1 hr", subject: "AI" },
    { day: 7, task: "Watch 'How AI Could Save Education' by Sal Khan", link: "https://www.ted.com/talks/sal_khan_how_ai_could_save_not_destroy_education", prompt: "How can AI improve learning ethically?", time: "1 hr", subject: "AI" },
    { day: 8, task: "Read Chapter 1 of Python Machine Learning", link: "", prompt: "How do algorithms drive AI decisions?", time: "1.5 hrs", subject: "AI" },
    { day: 9, task: "Start Machine Learning Crash Course (Module 1)", link: "https://developers.google.com/machine-learning/crash-course", prompt: "What ML concept stood out?", time: "1.5 hrs", subject: "AI" },
    { day: 10, task: "Watch 'Neural Networks from Scratch'", link: "https://www.youtube.com/watch?v=Wo5d0c7d3Q4", prompt: "How do neural networks mimic the brain?", time: "1 hr", subject: "AI" },
    { day: 11, task: "Complete AI For Everyone (Module 2)", link: "https://www.coursera.org/learn/ai-for-everyone", prompt: "What are key AI workflow steps?", time: "1.5 hrs", subject: "AI" },
    { day: 12, task: "Read 'AI Ethics: A Brief History'", link: "https://arxiv.org/abs/2306.10092", prompt: "Why is AI ethics critical now?", time: "1 hr", subject: "AI" },
    { day: 13, task: "Explore TensorFlow playground", link: "https://playground.tensorflow.org/", prompt: "How do network parameters affect outcomes?", time: "1 hr", subject: "AI" },
    { day: 14, task: "Complete Elements of AI (Module 2)", link: "https://www.elementsofai.com/", prompt: "What ethical dilemmas arise in AI?", time: "1 hr", subject: "AI" },
    { day: 15, task: "Read Chapter 2 of Python Machine Learning", link: "", prompt: "How do you preprocess data for ML?", time: "1.5 hrs", subject: "AI" },
    { day: 16, task: "Watch 'The Ethical Algorithm' by Michael Kearns", link: "https://www.ted.com/talks/michael_kearns_the_ethical_algorithm", prompt: "How can algorithms be fair?", time: "1 hr", subject: "AI" },
    { day: 17, task: "Start Python Basics on Codecademy", link: "https://www.codecademy.com/learn/learn-python-3", prompt: "How does Python simplify AI coding?", time: "2 hrs", subject: "AI" },
    { day: 18, task: "Read 'Bias in AI' article", link: "https://www.nature.com/articles/d41586-021-01329-6", prompt: "What causes AI bias?", time: "1 hr", subject: "AI" },
    { day: 19, task: "Complete Machine Learning Crash Course (Module 2)", link: "https://developers.google.com/machine-learning/crash-course", prompt: "What’s the role of loss functions?", time: "1.5 hrs", subject: "AI" },
    { day: 20, task: "Explore Kaggle’s Intro to Machine Learning", link: "https://www.kaggle.com/learn/intro-to-machine-learning", prompt: "How do datasets shape ML models?", time: "1.5 hrs", subject: "AI" },
    { day: 21, task: "Watch 'AI and Society' lecture", link: "https://www.youtube.com/watch?v=0I6Ir6iI1Uk", prompt: "How should AI balance innovation and ethics?", time: "1 hr", subject: "AI" },
    { day: 22, task: "Read Chapter 3 of Artificial Intelligence: A Modern Approach", link: "", prompt: "What are search algorithms in AI?", time: "1.5 hrs", subject: "AI" },
    { day: 23, task: "Complete Python Basics (Codecademy, Part 2)", link: "https://www.codecademy.com/learn/learn-python-3", prompt: "How do loops aid AI tasks?", time: "2 hrs", subject: "AI" },
    { day: 24, task: "Read 'AI Governance Frameworks' paper", link: "https://arxiv.org/abs/2401.12345", prompt: "What makes a good AI policy?", time: "1 hr", subject: "AI" },
    { day: 25, task: "Start Deep Learning Specialization (Module 1)", link: "https://www.coursera.org/specializations/deep-learning", prompt: "What are neural network basics?", time: "2 hrs", subject: "AI" },
    { day: 26, task: "Watch 'AI for Good' by UN", link: "https://www.youtube.com/watch?v=IlpL1Obu5mw", prompt: "How can AI address global issues?", time: "1 hr", subject: "AI" },
    { day: 27, task: "Complete Kaggle’s Pandas tutorial", link: "https://www.kaggle.com/learn/pandas", prompt: "How does Pandas help AI data prep?", time: "1.5 hrs", subject: "AI" },
    { day: 28, task: "Read 'Fairness in ML' article", link: "https://www.ibm.com/watson/advantage-reports/fairness-in-machine-learning.html", prompt: "How can fairness be measured?", time: "1 hr", subject: "AI" },
    { day: 29, task: "Complete Deep Learning Specialization (Module 2)", link: "https://www.coursera.org/specializations/deep-learning", prompt: "How do activation functions work?", time: "2 hrs", subject: "AI" },
    { day: 30, task: "Explore fast.ai Practical Deep Learning", link: "https://course.fast.ai/", prompt: "How does fast.ai simplify DL?", time: "2 hrs", subject: "AI" },
    { day: 31, task: "Watch 'AI Ethics in Practice' video", link: "https://www.youtube.com/watch?v=QxuyfWoVV0Q", prompt: "What are practical AI ethics challenges?", time: "1 hr", subject: "AI" },
    { day: 32, task: "Read Chapter 2 of Mathematics for Machine Learning", link: "https://mml-book.github.io/", prompt: "How does linear algebra support AI?", time: "1.5 hrs", subject: "AI" },
    { day: 33, task: "Complete Kaggle’s Data Visualization", link: "https://www.kaggle.com/learn/data-visualization", prompt: "Why visualize AI data?", time: "1.5 hrs", subject: "AI" },
    { day: 34, task: "Read 'AI and Privacy' paper", link: "https://arxiv.org/abs/2305.12345", prompt: "How does AI impact privacy?", time: "1 hr", subject: "AI" },
    { day: 35, task: "Start TensorFlow Developer Certificate prep", link: "https://www.tensorflow.org/certificate", prompt: "What skills are needed for TF?", time: "2 hrs", subject: "AI" },
    { day: 36, task: "Watch 'Generative AI Basics' video", link: "https://www.youtube.com/watch?v=3M4Z5DL0Ptw", prompt: "What are generative AI uses?", time: "1 hr", subject: "AI" },
    { day: 37, task: "Complete fast.ai Practical Deep Learning (Part 2)", link: "https://course.fast.ai/", prompt: "How do practical DL projects work?", time: "2 hrs", subject: "AI" },
    { day: 38, task: "Read 'AI Accountability' article", link: "https://www.brookings.edu/research/algorithmic-accountability/", prompt: "Who is responsible for AI errors?", time: "1 hr", subject: "AI" },
    { day: 39, task: "Build a simple linear regression model (Python)", link: "https://scikit-learn.org/stable/modules/linear_model.html", prompt: "What did the model teach you?", time: "2 hrs", subject: "AI" },
    { day: 40, task: "Watch 'AI in Healthcare' lecture", link: "https://www.youtube.com/watch?v=2A6uA7E8f6Q", prompt: "How can AI improve healthcare ethically?", time: "1 hr", subject: "AI" },
    { day: 41, task: "Complete TensorFlow Developer Certificate prep (Part 2)", link: "https://www.tensorflow.org/certificate", prompt: "How does TF handle neural nets?", time: "2 hrs", subject: "AI" },
    { day: 42, task: "Read 'AI Transparency' paper", link: "https://arxiv.org/abs/2402.09876", prompt: "Why is transparency key in AI?", time: "1 hr", subject: "AI" },
    { day: 43, task: "Explore Kaggle’s Intro to Deep Learning", link: "https://www.kaggle.com/learn/intro-to-deep-learning", prompt: "What’s unique about DL models?", time: "2 hrs", subject: "AI" },
    { day: 44, task: "Watch 'AI and Bias Mitigation' video", link: "https://www.youtube.com/watch?v=1XhY4NEkphU", prompt: "How can bias be reduced in AI?", time: "1 hr", subject: "AI" },
    { day: 45, task: "Build a classification model (Python)", link: "https://scikit-learn.org/stable/supervised_learning.html", prompt: "What challenges arose in classification?", time: "2 hrs", subject: "AI" },
    { day: 46, task: "Read 'AI Regulation 2025' article", link: "https://www.theverge.com/2025/02/20/24123456/ai-regulatory-landscape-2025", prompt: "What are global AI regulations?", time: "1 hr", subject: "AI" },
    { day: 47, task: "Complete Deep Learning Specialization (Module 3)", link: "https://www.coursera.org/specializations/deep-learning", prompt: "How do CNNs process images?", time: "2 hrs", subject: "AI" },
    { day: 48, task: "Watch 'AI for Climate Change' video", link: "https://www.youtube.com/watch?v=9fH3G5e2g7M", prompt: "How can AI address climate issues?", time: "1 hr", subject: "AI" },
    { day: 49, task: "Explore PyTorch tutorials", link: "https://pytorch.org/tutorials/", prompt: "How does PyTorch differ from TensorFlow?", time: "2 hrs", subject: "AI" },
    { day: 50, task: "Read 'AI Ethics Case Studies' article", link: "https://www.technologyreview.com/2025/04/10/1089123/ai-ethics-in-practice-2025/", prompt: "What ethical lessons stood out?", time: "1 hr", subject: "AI" },
    { day: 51, task: "Build a neural network with TensorFlow", link: "https://www.tensorflow.org/tutorials/keras/classification", prompt: "What was challenging in NN design?", time: "2 hrs", subject: "AI" },
    { day: 52, task: "Watch 'AI and Human Rights' lecture", link: "https://www.youtube.com/watch?v=5y6F5xL3z7k", prompt: "How does AI affect human rights?", time: "1 hr", subject: "AI" },
    { day: 53, task: "Complete Kaggle’s NLP course", link: "https://www.kaggle.com/learn/natural-language-processing", prompt: "How does NLP process text?", time: "2 hrs", subject: "AI" },
    { day: 54, task: "Read 'AI Trustworthiness' paper", link: "https://arxiv.org/abs/2403.12345", prompt: "What builds trust in AI?", time: "1 hr", subject: "AI" },
    { day: 55, task: "Explore Hugging Face transformers", link: "https://huggingface.co/docs/transformers/index", prompt: "How do transformers power NLP?", time: "2 hrs", subject: "AI" },
    { day: 56, task: "Watch 'AI in Education' video", link: "https://www.youtube.com/watch?v=7B3X5xL3z7k", prompt: "How can AI personalize education?", time: "1 hr", subject: "AI" },
    { day: 57, task: "Build a simple NLP model (Hugging Face)", link: "https://huggingface.co/docs/transformers/quicktour", prompt: "What did the NLP model achieve?", time: "2 hrs", subject: "AI" },
    { day: 58, task: "Read 'AI and Employment' article", link: "https://www.brookings.edu/research/ai-and-the-future-of-work/", prompt: "How will AI impact jobs?", time: "1 hr", subject: "AI" },
    { day: 59, task: "Complete Deep Learning Specialization (Module 4)", link: "https://www.coursera.org/specializations/deep-learning", prompt: "What are RNNs used for?", time: "2 hrs", subject: "AI" },
    { day: 60, task: "Watch 'AI Safety' lecture", link: "https://www.youtube.com/watch?v=8z3xL3z7k5m", prompt: "What are AI safety risks?", time: "1 hr", subject: "AI" },
    { day: 61, task: "Explore reinforcement learning basics", link: "https://spinningup.openai.com/en/latest/", prompt: "How does RL train agents?", time: "2 hrs", subject: "AI" },
    { day: 62, task: "Read 'AI and Bias' paper", link: "https://arxiv.org/abs/2404.12345", prompt: "What are bias mitigation strategies?", time: "1 hr", subject: "AI" },
    { day: 63, task: "Build a reinforcement learning model", link: "https://spinningup.openai.com/en/latest/user/introduction.html", prompt: "What challenges did RL present?", time: "2 hrs", subject: "AI" },
    { day: 64, task: "Watch 'AI Ethics Frameworks' video", link: "https://www.youtube.com/watch?v=9z4xL3z7k5n", prompt: "What makes an ethical AI framework?", time: "1 hr", subject: "AI" },
    { day: 65, task: "Complete Kaggle’s Computer Vision course", link: "https://www.kaggle.com/learn/computer-vision", prompt: "How do CNNs process images?", time: "2 hrs", subject: "AI" },
    { day: 66, task: "Read 'AI in Finance' article", link: "https://www.forbes.com/sites/forbestechcouncil/2025/01/15/ai-in-finance-2025/", prompt: "How is AI used in finance?", time: "1 hr", subject: "AI" },
    { day: 67, task: "Build a CNN with TensorFlow", link: "https://www.tensorflow.org/tutorials/images/cnn", prompt: "What did the CNN achieve?", time: "2 hrs", subject: "AI" },
    { day: 68, task: "Watch 'AI and Law' lecture", link: "https://www.youtube.com/watch?v=0z5xL3z7k5p", prompt: "How does AI impact legal systems?", time: "1 hr", subject: "AI" },
    { day: 69, task: "Explore GANs with PyTorch", link: "https://pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html", prompt: "What are GANs used for?", time: "2 hrs", subject: "AI" },
    { day: 70, task: "Read 'AI Ethics in Practice' paper", link: "https://arxiv.org/abs/2502.98765", prompt: "What are real-world AI ethics cases?", time: "1 hr", subject: "AI" },
    { day: 71, task: "Build a GAN with PyTorch", link: "https://pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html", prompt: "What challenges arose in GANs?", time: "2 hrs", subject: "AI" },
    { day: 72, task: "Watch 'AI and Creativity' video", link: "https://www.youtube.com/watch?v=1z6xL3z7k5q", prompt: "Can AI be truly creative?", time: "1 hr", subject: "AI" },
    { day: 73, task: "Complete Kaggle’s Time Series course", link: "https://www.kaggle.com/learn/time-series", prompt: "How are time series used in AI?", time: "2 hrs", subject: "AI" },
    { day: 74, task: "Read 'AI Governance Models' article", link: "https://www.oecd.org/digital/artificial-intelligence/", prompt: "What are effective AI governance models?", time: "1 hr", subject: "AI" },
    { day: 75, task: "Build a time series model (Python)", link: "https://www.tensorflow.org/tutorials/structured_data/time_series", prompt: "What insights did the model provide?", time: "2 hrs", subject: "AI" },
    { day: 76, task: "Watch 'AI in Agriculture' video", link: "https://www.youtube.com/watch?v=2z7xL3z7k5r", prompt: "How can AI improve agriculture?", time: "1 hr", subject: "AI" },
    { day: 77, task: "Explore AutoML with Google Cloud", link: "https://cloud.google.com/automl", prompt: "How does AutoML simplify AI?", time: "2 hrs", subject: "AI" },
    { day: 78, task: "Read 'AI and Accessibility' article", link: "https://www.w3.org/WAI/standards-guidelines/ai/", prompt: "How can AI enhance accessibility?", time: "1 hr", subject: "AI" },
    { day: 79, task: "Build an AutoML model (Google Cloud)", link: "https://cloud.google.com/automl", prompt: "What was easy or hard in AutoML?", time: "2 hrs", subject: "AI" },
    { day: 80, task: "Watch 'AI Ethics in 2025' lecture", link: "https://www.youtube.com/watch?v=3z8xL3z7k5s", prompt: "What are 2025’s AI ethics trends?", time: "1 hr", subject: "AI" },
    { day: 81, task: "Explore transfer learning with TensorFlow", link: "https://www.tensorflow.org/tutorials/images/transfer_learning", prompt: "How does transfer learning save time?", time: "2 hrs", subject: "AI" },
    { day: 82, task: "Read 'AI and Global Development' article", link: "https://www.un.org/en/desa/ai-global-development", prompt: "How can AI aid development?", time: "1 hr", subject: "AI" },
    { day: 83, task: "Build a transfer learning model", link: "https://www.tensorflow.org/tutorials/images/transfer_learning", prompt: "What did transfer learning achieve?", time: "2 hrs", subject: "AI" },
    { day: 84, task: "Watch 'AI and Ethics' panel", link: "https://www.youtube.com/watch?v=4z9xL3z7k5t", prompt: "What were key panel insights?", time: "1 hr", subject: "AI" },
    { day: 85, task: "Complete Kaggle’s Feature Engineering", link: "https://www.kaggle.com/learn/feature-engineering", prompt: "How does feature engineering improve models?", time: "2 hrs", subject: "AI" },
    { day: 86, task: "Read 'AI Policy Brief' article", link: "https://www.brookings.edu/research/ai-policy-brief-2025/", prompt: "What policies shape AI?", time: "1 hr", subject: "AI" },
    { day: 87, task: "Build a feature-engineered model", link: "https://scikit-learn.org/stable/modules/preprocessing.html", prompt: "How did features impact performance?", time: "2 hrs", subject: "AI" },
    { day: 88, task: "Watch 'Future of AI' lecture", link: "https://www.youtube.com/watch?v=5z0xL3z7k5u", prompt: "What’s the future of AI?", time: "1 hr", subject: "AI" },
    { day: 89, task: "Explore AI ethics toolkit", link: "https://aiethicsinitiative.org/toolkit", prompt: "How can toolkits guide ethical AI?", time: "1.5 hrs", subject: "AI" },
    { day: 90, task: "Create a portfolio of AI projects and share on GitHub", link: "https://github.com/", prompt: "How does this portfolio position you as an AI doctor?", time: "2 hrs", subject: "AI" }
];

// Display schedule and handle interactions
document.addEventListener('DOMContentLoaded', () => {
    const scheduleDiv = document.getElementById('schedule-list');
    const progressDiv = document.getElementById('stars');
    const journalInput = document.getElementById('journal');
    const journalStatus = document.getElementById('journal-status');
    const journalDate = document.getElementById('journal-date');

    // Error handling for missing elements
    if (!scheduleDiv) {
        console.error('Error: schedule-list element not found in HTML');
        return;
    }
    if (!progressDiv) {
        console.error('Error: stars element not found in HTML');
        return;
    }
    if (!journalInput || !journalStatus || !journalDate) {
        console.error('Error: journal, journal-status, or journal-date element not found in HTML');
    }

    const today = new Date('2025-08-28'); // Start date
    const startDate = new Date('2025-08-28');
    const currentDay = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const todayTask = schedule.find(task => task.day === currentDay);

    if (todayTask) {
        alert(Today's AI Mission (Day ${todayTask.day}): ${todayTask.task} (${todayTask.time}));
    }

    schedule.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <h3>Day ${task.day}: ${task.task}</h3>
            <input type="checkbox" id="task-${task.day}">
            <button onclick="toggleDetails('details-${task.day}')">Details</button>
            <div id="details-${task.day}" class="task-details">
                <p><strong>Time:</strong> ${task.time || '1-2 hrs'}</p>
                <p><strong>Resource:</strong> <a href="${task.link}">${task.link || 'No link'}</a></p>
                <p><strong>Journal Prompt:</strong> ${task.prompt}</p>
                <button onclick="readAloud('details-${task.day}')">Read Aloud</button>
            </div>
        `;
        scheduleDiv.appendChild(taskDiv);
    });

    // Progress tracking
    const updateProgress = () => {
        if (progressDiv) {
            const completed = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).length;
            progressDiv.innerHTML = '🧠'.repeat(completed);
        }
    };
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });

    // Load today’s journal
    if (journalDate && journalInput) {
        const todayDate = '2025-08-28';
        journalDate.value = todayDate;
        const savedJournal = localStorage.getItem(aiJournal_${todayDate});
        if (savedJournal) {
            journalInput.value = savedJournal;
            if (journalStatus) {
                journalStatus.innerText = Loaded journal for ${todayDate};
            }
        }
    }
});

// Toggle task details
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details) {
        details.classList.toggle('active');
    }
}

// Text-to-speech function
function readAloud(id) {
    const textElement = document.getElementById(id);
    if (textElement && 'speechSynthesis' in window) {
        const text = textElement.innerText;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    } else {
        alert('Browser does not support text-to-speech. Use Chrome Read Aloud extension.');
    }
}

// Journal save, load, and clear
function saveJournal() {
    const journal = document.getElementById('journal');
    const date = document.getElementById('journal-date');
    const status = document.getElementById('journal-status');
    if (journal && date && status && journal.value && date.value) {
        localStorage.setItem(aiJournal_${date.value}, journal.value);
        status.innerText = Journal saved for ${date.value}!;
    } else {
        if (status) {
            status.innerText = 'Please enter a date and journal entry.';
        }
    }
}

function loadJournal() {
    const date = document.getElementById('journal-date');
    const journal = document.getElementById('journal');
    const status = document.getElementById('journal-status');
    if (date && journal && status) {
        const savedJournal = localStorage.getItem(aiJournal_${date.value});
        if (savedJournal) {
            journal.value = savedJournal;
            status.innerText = Loaded journal for ${date.value};
        } else {
            journal.value = '';
            status.innerText = No journal found for ${date.value};
        }
    }
}

function clearJournal() {
    const date = document.getElementById('journal-date');
    const journal = document.getElementById('journal');
    const status = document.getElementById('journal-status');
    if (date && journal && status) {
        journal.value = '';
        localStorage.removeItem(aiJournal_${date.value});
        status.innerText = Journal cleared for ${date.value};
    }
}

// Motivational pop-ups
const tips = ["You’re on track to be an AI doctor!", "Master AI with daily practice!", "Ethics is the heart of AI!"];
window.onload = () => {
    const currentDay = Math.floor((new Date() - new Date('2025-08-28')) / (1000 * 60 * 60 * 24)) + 1;
    if (schedule.find(task => task.day === currentDay)) {
        alert(tips[Math.floor(Math.random() * tips.length)]);
    }
};
