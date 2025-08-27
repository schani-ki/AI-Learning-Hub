// 30-day schedule data
const schedule = [
    { day: 1, task: "Read Chapter 1 of Artificial Intelligence: A Modern Approach", link: "", prompt: "How does AI mimic human intelligence for positive impact?" },
    { day: 2, task: "Watch 'AI Isn't the Problem' by Andrew Ng", link: "https://www.ted.com/talks/andrew_ng_ai_isn_t_the_problem_it_s_the_solution", prompt: "How can AI solve global challenges?" },
    { day: 3, task: "Start AI For Everyone (Module 1)", link: "https://www.coursera.org/learn/ai-for-everyone", prompt: "What surprised you about AI’s scope?" },
    { day: 4, task: "Read Chapter 1 of Mathematics for Machine Learning", link: "", prompt: "Why is math critical for AI?" },
    { day: 5, task: "Explore Elements of AI (Module 1)", link: "https://www.elementsofai.com/", prompt: "How do AI limits shape ethical use?" },
    { day: 6, task: "Read X post on AI, ML, DL, RL relationships", link: "", prompt: "How do these subsets connect to real-world uses?" },
    { day: 7, task: "Watch 'How AI Could Save Education' by Sal Khan", link: "https://www.ted.com/talks/sal_khan_how_ai_could_save_not_destroy_education", prompt: "How can AI improve learning ethically?" },
    { day: 8, task: "Read Chapter 1 of Python Machine Learning", link: "", prompt: "How do algorithms drive AI decisions?" },
    { day: 9, task: "Start Deep Learning Specialization (Module 1)", link: "https://www.coursera.org/specializations/deep-learning", prompt: "Why are neural networks key to AI?" },
    { day: 10, task: "Watch 'Deep Learning: A Crash Course' by Pieter Abbeel", link: "https://www.youtube.com/watch?v=6M5VXKLf4D4", prompt: "How do these architectures enable advanced AI?" },
    { day: 11, task: "Read Chapter 1 of Prompt Engineering for LLMs", link: "", prompt: "How does prompt engineering shape AI outputs?" },
    { day: 12, task: "Explore CS50 AI with Python (Module 1)", link: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python", prompt: "How does coding deepen AI understanding?" },
    { day: 13, task: "Read X post on Agentic AI concepts", link: "", prompt: "How can agentic AI solve complex tasks?" },
    { day: 14, task: "Watch 'Reinforcement Learning, by Example' by DeepMind", link: "https://www.youtube.com/watch?v=2pWv7GOvuf0", prompt: "How does RL align with ethical AI goals?" },
    { day: 15, task: "Read Chapter 1 of AI 2041", link: "", prompt: "How can this application impact society positively?" },
    { day: 16, task: "Start Generative AI with LLMs (Module 1)", link: "https://www.deeplearning.ai/courses/generative-ai-with-llms/", prompt: "How do LLMs enable creative applications?" },
    { day: 17, task: "Watch 'How AI Can Tackle Climate Change' by Priya Donti", link: "https://www.youtube.com/watch?v=NGl1GQHgrHs", prompt: "How can AI scale for environmental good?" },
    { day: 18, task: "Practice on Kaggle: Titanic dataset tutorial", link: "https://www.kaggle.com/", prompt: "What challenges did you face?" },
    { day: 19, task: "Watch 'AI and the Future of Healthcare' by Suchi Saria", link: "https://www.youtube.com/watch?v=bFnlLbFwQAg", prompt: "How can AI improve diagnostics ethically?" },
    { day: 20, task: "Practice on Hugging Face: NLP model demo", link: "https://huggingface.co/", prompt: "How accessible are these tools for impact?" },
    { day: 21, task: "Read 'AI for Social Good: 7 Inspiring Examples'", link: "https://research.google/blog/ai-for-social-good-7-inspiring-examples/", prompt: "How can AI address social challenges?" },
    { day: 22, task: "Research OpenAI and DeepMind blogs", link: "https://openai.com/blog", prompt: "How do these companies shape AI’s future?" },
    { day: 23, task: "Follow 5 X leaders: @sama, @demishassabis, @andrewyng, @ylecun, @karpathy", link: "", prompt: "What insights stand out?" },
    { day: 24, task: "Read UNESCO’s Ethics of AI Recommendation", link: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics", prompt: "How do these principles ensure a better future?" },
    { day: 25, task: "Watch 'The Catastrophic Risks of AI' by Yoshua Bengio", link: "https://www.youtube.com/watch?v=qe9QSCF-d88", prompt: "How can we balance AI innovation and safety?" },
    { day: 26, task: "Practice 'Build Your First Neural Network with PyTorch' by Sentdex", link: "https://www.youtube.com/watch?v=Jy4wM2X1u2k", prompt: "What did coding teach you about AI?" },
    { day: 27, task: "Read 'The EU AI Act: A New Era for Regulation'", link: "https://www.technologyreview.com/2024/03/19/1089919/the-ai-act-is-done-heres-what-will-and-wont-change/", prompt: "How do regulations shape AI ethics?" },
    { day: 28, task: "Engage on X: Reply to @Plinz or @demishassabis on AGI ethics", link: "", prompt: "How did the community respond?" },
    { day: 29, task: "Upload project to GitHub with #AIForGood", link: "https://github.com/", prompt: "What feedback did you receive?" },
    { day: 30, task: "Watch Lex Fridman interview with an AI pioneer", link: "https://www.youtube.com/@lexfridman", prompt: "How do these insights inspire your AI journey?" }
];

// Load tasks
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const progressList = document.getElementById('progress-list');

    schedule.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <input type="checkbox" id="task-${task.day}" ${localStorage.getItem(task-${task.day}) === 'true' ? 'checked' : ''}>
            <label for="task-${task.day}">Day ${task.day}: ${task.task}</label>
            <button onclick="toggleDetails(${task.day})">Details</button>
            <div id="details-${task.day}" class="task-details">
                <p><strong>Resource:</strong> ${task.link ? <a href="${task.link}" target="_blank">${task.task}</a> : 'Check your book or X'}</p>
                <p><strong>Journal Prompt:</strong> ${task.prompt}</p>
            </div>
        `;
        taskList.appendChild(taskDiv);

        const progressDiv = document.createElement('div');
        progressDiv.innerHTML = `<p>Day ${task.day}: ${task.task} - ${localStorage.getItem(task-${task.day}) === 'true' ? 'Completed' : 'Pending'}</p>`;
        progressList.appendChild(progressDiv);
    });

    // Journal form
    const journalForm = document.getElementById('journal-form');
    journalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const entry = document.getElementById('journal-entry').value;
        const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
        entries.push({ date: new Date().toLocaleDateString(), entry });
        localStorage.setItem('journalEntries', JSON.stringify(entries));
        alert('Journal entry saved!');
        document.getElementById('journal-entry').value = '';
    });

    // Daily reminder (basic alert)
    const today = new Date().getDate();
    const todayTask = schedule.find(task => task.day === today);
    if (todayTask) {
        alert(Today's Task (Day ${todayTask.day}): ${todayTask.task});
    }
});

// Toggle task details
function toggleDetails(day) {
    const details = document.getElementById(details-${day});
    details.classList.toggle('active');
}

// Save task completion
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        localStorage.setItem(checkbox.id, checkbox.checked);
        location.reload(); // Refresh progress
    });
});