// 90-day AI-only schedule
const schedule = [
    // Week 1: AI Foundations
    { day: 1, task: "Read Chapter 1 of Artificial Intelligence: A Modern Approach", link: "", prompt: "How does AI mimic human intelligence?", time: "1 hr", subject: "AI" },
    { day: 2, task: "Watch 'AI Isn't the Problem' by Andrew Ng", link: "https://www.ted.com/talks/andrew_ng_ai_isn_t_the_problem_it_s_the_solution", prompt: "How can AI solve global challenges?", time: "1 hr", subject: "AI" },
    { day: 3, task: "Start AI For Everyone (Module 1)", link: "https://www.coursera.org/learn/ai-for-everyone", prompt: "What surprised you about AI’s scope?", time: "1.5 hrs", subject: "AI" },
    { day: 4, task: "Read Chapter 1 of Mathematics for Machine Learning", link: "", prompt: "Why is math critical for AI?", time: "1.5 hrs", subject: "AI" },
    { day: 5, task: "Explore Elements of AI (Module 1)", link: "https://www.elementsofai.com/", prompt: "How do AI limits shape ethical use?", time: "1 hr", subject: "AI" },
    { day: 6, task: "Read X post on AI, ML, DL, RL relationships", link: "", prompt: "How do these subsets connect to real-world uses?", time: "1 hr", subject: "AI" },
    { day: 7, task: "Watch 'How AI Could Save Education' by Sal Khan", link: "https://www.ted.com/talks/sal_khan_how_ai_could_save_not_destroy_education", prompt: "How can AI improve learning ethically?", time: "1 hr", subject: "AI" },
    // Week 2: Machine Learning Basics
    { day: 8, task: "Read Chapter 1 of Python Machine Learning", link: "", prompt: "How do algorithms drive AI decisions?", time: "1.5 hrs", subject: "AI" },
    { day: 9, task: "Start Machine Learning Crash Course (Module 1)", link: "https://developers.google.com/machine-learning/crash-course", prompt: "What ML concept stood out?", time: "1.5 hrs", subject: "AI" },
    { day: 10, task: "Watch 'Neural Networks from Scratch'", link: "https://www.youtube.com/watch?v=Wo5d0c7d3Q4", prompt: "How do neural networks mimic the brain?", time: "1 hr", subject: "AI" },
    { day: 11, task: "Practice Kaggle: Titanic dataset tutorial", link: "https://www.kaggle.com/", prompt: "What challenges did you face?", time: "1.5 hrs", subject: "AI" },
    { day: 12, task: "Read 'Intro to Supervised Learning' article", link: "https://towardsdatascience.com/introduction-to-supervised-learning-2025", prompt: "How does supervised learning work?", time: "1 hr", subject: "AI" },
    { day: 13, task: "Watch 'Deep Learning Foundations' lecture", link: "https://online.stanford.edu/courses/deep-learning-foundations", prompt: "What makes deep learning powerful?", time: "1 hr", subject: "AI" },
    { day: 14, task: "Start CS50 AI with Python (Module 1)", link: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python", prompt: "How does coding deepen AI understanding?", time: "1.5 hrs", subject: "AI" },
    // Week 3: Deep Learning and Advanced Topics
    { day: 15, task: "Read Chapter 1 of Deep Learning by Goodfellow", link: "", prompt: "Why are neural networks key to AI?", time: "1.5 hrs", subject: "AI" },
    { day: 16, task: "Start Deep Learning Specialization (Module 1)", link: "https://www.coursera.org/specializations/deep-learning", prompt: "What architecture intrigued you?", time: "1.5 hrs", subject: "AI" },
    { day: 17, task: "Watch 'AI Explained: Large Language Models'", link: "https://www.youtube.com/@AIExplained", prompt: "How do LLMs power modern AI?", time: "1 hr", subject: "AI" },
    { day: 18, task: "Read 'Scalable LLMs for 2025'", link: "https://arxiv.org/abs/2503.45678", prompt: "How are LLMs optimized?", time: "1 hr", subject: "AI" },
    { day: 19, task: "Practice Hugging Face: Sentiment analysis demo", link: "https://huggingface.co/", prompt: "How accessible are NLP tools?", time: "1 hr", subject: "AI" },
    { day: 20, task: "Watch 'Generative AI in 2025'", link: "https://www.youtube.com/@DeepLearningAI", prompt: "What are generative AI’s applications?", time: "1 hr", subject: "AI" },
    { day: 21, task: "Start Generative AI with LLMs (Module 1)", link: "https://www.deeplearning.ai/courses/generative-ai-with-llms/", prompt: "How do LLMs enable creativity?", time: "1.5 hrs", subject: "AI" },
    // Week 4: Reinforcement Learning and Agentic AI
    { day: 22, task: "Watch 'Reinforcement Learning, by Example'", link: "https://www.youtube.com/watch?v=2pWv7GOvuf0", prompt: "How does RL align with real-world tasks?", time: "1 hr", subject: "AI" },
    { day: 23, task: "Start Reinforcement Learning Specialization (Module 1)", link: "https://www.coursera.org/specializations/reinforcement-learning", prompt: "What RL concept was new to you?", time: "1.5 hrs", subject: "AI" },
    { day: 24, task: "Read 'Advances in Multi-Agent Systems'", link: "https://arxiv.org/abs/2501.12345", prompt: "How do multi-agent systems collaborate?", time: "1 hr", subject: "AI" },
    { day: 25, task: "Watch 'Agentic AI in Action' lecture", link: "https://ocw.mit.edu/courses/agentic-ai-2025/", prompt: "What makes agentic AI unique?", time: "1 hr", subject: "AI" },
    { day: 26, task: "Practice OpenAI Gym: RL tutorial", link: "https://gym.openai.com/", prompt: "What did you learn from RL coding?", time: "1.5 hrs", subject: "AI" },
    { day: 27, task: "Read X post on Agentic AI trends", link: "", prompt: "How is agentic AI evolving?", time: "1 hr", subject: "AI" },
    { day: 28, task: "Watch 'Build a Reinforcement Learning Model'", link: "https://www.youtube.com/watch?v=9gBC9R-msAk", prompt: "How can RL solve complex problems?", time: "1 hr", subject: "AI" },
    // Week 5: AI Applications
    { day: 29, task: "Read 'AI for Climate Action: 2025 Trends'", link: "https://www.technologyreview.com/2025/01/15/1105872/ai-for-climate-action-2025-trends/", prompt: "How can AI address climate issues?", time: "1 hr", subject: "AI" },
    { day: 30, task: "Watch 'AI for a Sustainable Future'", link: "https://www.ted.com/talks/hannah_ritchie_ai_for_a_sustainable_future", prompt: "What sustainability application excites you?", time: "1 hr", subject: "AI" },
    { day: 31, task: "Read Chapter 1 of AI 2041", link: "", prompt: "What future AI application inspires you?", time: "1 hr", subject: "AI" },
    { day: 32, task: "Practice Kaggle: Healthcare AI dataset", link: "https://www.kaggle.com/", prompt: "How can AI improve diagnostics?", time: "1.5 hrs", subject: "AI" },
    { day: 33, task: "Watch 'AI and Healthcare' lecture", link: "https://ocw.mit.edu/courses/ai-and-healthcare-2025/", prompt: "What healthcare AI use stood out?", time: "1 hr", subject: "AI" },
    { day: 34, task: "Read 'AI in Education 2025' article", link: "https://edtechmagazine.com/higher/article/2025/03/10/ai-in-education", prompt: "How can AI personalize learning?", time: "1 hr", subject: "AI" },
    { day: 35, task: "Practice Google Colab: Build a simple ML model", link: "https://colab.research.google.com", prompt: "What did coding teach you?", time: "1.5 hrs", subject: "AI" },
    // Week 6: AI Ethics
    { day: 36, task: "Read UNESCO’s Ethics of AI Recommendation", link: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics", prompt: "How do these principles ensure ethical AI?", time: "1 hr", subject: "AI" },
    { day: 37, task: "Start AI Ethics and Governance (Module 1)", link: "https://www.edx.org/course/ai-ethics-and-governance", prompt: "Why is AI ethics critical?", time: "1.5 hrs", subject: "AI" },
    { day: 38, task: "Watch 'The Ethical Algorithm'", link: "https://www.ted.com/talks/michael_kearns_the_ethical_algorithm", prompt: "How can algorithms be fair?", time: "1 hr", subject: "AI" },
    { day: 39, task: "Read 'Ethical AI Frameworks'", link: "https://arxiv.org/abs/2502.98765", prompt: "How can bias be mitigated in AI?", time: "1 hr", subject: "AI" },
    { day: 40, task: "Engage on X: Reply to @ylecun on AI ethics", link: "", prompt: "What feedback did you get?", time: "1 hr", subject: "AI" },
    { day: 41, task: "Watch 'The Catastrophic Risks of AI'", link: "https://www.youtube.com/watch?v=qe9QSCF-d88", prompt: "How can we balance innovation and safety?", time: "1 hr", subject: "AI" },
    { day: 42, task: "Read 'The AI Regulatory Landscape in 2025'", link: "https://www.theverge.com/2025/02/20/24123456/ai-regulatory-landscape-2025", prompt: "How do regulations shape AI?", time: "1 hr", subject: "AI" },
    // Week 7: AI Industry and Networking
    { day: 43, task: "Research OpenAI blog for latest projects", link: "https://openai.com/blog", prompt: "How does OpenAI drive AI innovation?", time: "1 hr", subject: "AI" },
    { day: 44, task: "Follow @sama, @demishassabis, @drfeifei on X", link: "", prompt: "What industry insights stood out?", time: "45 mins", subject: "AI" },
    { day: 45, task: "Read DeepMind blog on AI breakthroughs", link: "https://deepmind.google/", prompt: "What breakthrough excites you?", time: "1 hr", subject: "AI" },
    { day: 46, task: "Watch Lex Fridman interview with an AI pioneer", link: "https://www.youtube.com/@lexfridman", prompt: "How do these insights shape your expertise?", time: "1.5 hrs", subject: "AI" },
    { day: 47, task: "Engage on X: Share an AI ethics post with #AIForGood", link: "", prompt: "What community feedback did you receive?", time: "1 hr", subject: "AI" },
    { day: 48, task: "Read 'Global AI Regulation Tracker'", link: "https://oecd.ai/en/ai-policy-observatory", prompt: "How do global policies differ?", time: "1 hr", subject: "AI" },
    { day: 49, task: "Join an AI meetup (virtual) on Eventbrite", link: "https://www.eventbrite.com/", prompt: "What networking insights did you gain?", time: "1.5 hrs", subject: "AI" },
    // Week 8: Advanced AI Topics
    { day: 50, task: "Read 'Quantum AI Breakthroughs'", link: "https://www.wired.com/story/quantum-ai-breakthroughs-2025/", prompt: "How does quantum computing enhance AI?", time: "1 hr", subject: "AI" },
    { day: 51, task: "Watch 'Quantum AI Explained'", link: "https://www.youtube.com/@QuantumAIChannel", prompt: "What quantum AI application is feasible?", time: "1 hr", subject: "AI" },
    { day: 52, task: "Start Quantum Machine Learning course (Module 1)", link: "https://qiskit.org/learn/course/introduction-to-quantum-machine-learning", prompt: "How does quantum ML differ?", time: "1.5 hrs", subject: "AI" },
    { day: 53, task: "Read Chapter 1 of The Alignment Problem", link: "", prompt: "How can AI align with human values?", time: "1 hr", subject: "AI" },
    { day: 54, task: "Practice PyTorch: Build a neural network", link: "https://www.youtube.com/watch?v=Jy4wM2X1u2k", prompt: "What did coding teach you?", time: "1.5 hrs", subject: "AI" },
    { day: 55, task: "Read 'AI in Robotics 2025'", link: "https://spectrum.ieee.org/ai-robotics-2025", prompt: "How does AI enhance robotics?", time: "1 hr", subject: "AI" },
    { day: 56, task: "Watch 'AI and Society' lecture", link: "https://ocw.mit.edu/courses/ai-and-society-2025/", prompt: "How does AI impact society?", time: "1 hr", subject: "AI" },
    // Week 9: Hands-On Projects
    { day: 57, task: "Build a chatbot with Hugging Face", link: "https://huggingface.co/", prompt: "What makes chatbots effective?", time: "1.5 hrs", subject: "AI" },
    { day: 58, task: "Watch 'Build a Chatbot with Hugging Face'", link: "https://www.youtube.com/watch?v=8cmn4j62wQ0", prompt: "How did you customize your chatbot?", time: "1 hr", subject: "AI" },
    { day: 59, task: "Practice Kaggle: Image classification project", link: "https://www.kaggle.com/", prompt: "What challenges did you overcome?", time: "1.5 hrs", subject: "AI" },
    { day: 60, task: "Read 'AI for Social Good: 2025 Examples'", link: "https://research.google/blog/ai-for-social-good-2025/", prompt: "How can AI address social issues?", time: "1 hr", subject: "AI" },
    { day: 61, task: "Build a simple AI model in TensorFlow", link: "https://www.tensorflow.org/tutorials", prompt: "What did you learn from this model?", time: "1.5 hrs", subject: "AI" },
    { day: 62, task: "Watch 'How AI Can Amplify Human Creativity'", link: "https://www.ted.com/talks/anousheh_ansari_how_ai_can_amplify_human_creativity", prompt: "How can AI boost creativity?", time: "1 hr", subject: "AI" },
    { day: 63, task: "Read 'AI in Finance 2025'", link: "https://www.forbes.com/sites/ai-finance-2025", prompt: "How does AI transform finance?", time: "1 hr", subject: "AI" },
    // Week 10: Research and Innovation
    { day: 64, task: "Read 'Advances in Generative AI'", link: "https://arxiv.org/abs/2504.12345", prompt: "What new generative AI technique stood out?", time: "1 hr", subject: "AI" },
    { day: 65, task: "Watch 'Generative AI in 2025'", link: "https://www.youtube.com/@DeepLearningAI", prompt: "What future trend excites you?", time: "1 hr", subject: "AI" },
    { day: 66, task: "Practice Google Colab: Generative AI demo", link: "https://colab.research.google.com", prompt: "How did you customize this demo?", time: "1.5 hrs", subject: "AI" },
    { day: 67, task: "Read 'AI for Autonomous Vehicles'", link: "https://www.automotiveworld.com/articles/ai-autonomous-vehicles-2025/", prompt: "How does AI enable self-driving cars?", time: "1 hr", subject: "AI" },
    { day: 68, task: "Watch 'AI in Robotics' lecture", link: "https://online.stanford.edu/courses/ai-robotics-2025", prompt: "What robotics application is promising?", time: "1 hr", subject: "AI" },
    { day: 69, task: "Start AI for Social Good course (Module 1)", link: "https://www.coursera.org/learn/ai-for-social-good", prompt: "How can AI solve global problems?", time: "1.5 hrs", subject: "AI" },
    { day: 70, task: "Read X post on AI startups", link: "", prompt: "What startup idea inspires you?", time: "1 hr", subject: "AI" },
    // Week 11: Ethics and Policy Deep Dive
    { day: 71, task: "Read 'AI Bias Mitigation Strategies'", link: "https://aiethicsjournal.org/2025/bias-mitigation", prompt: "How can bias be reduced?", time: "1 hr", subject: "AI" },
    { day: 72, task: "Watch 'AI Governance in 2025'", link: "https://www.youtube.com/watch?v=AIgovernance2025", prompt: "What governance model is effective?", time: "1 hr", subject: "AI" },
    { day: 73, task: "Start AI Policy course (Module 1)", link: "https://www.edx.org/course/ai-policy-2025", prompt: "How do policies shape AI development?", time: "1.5 hrs", subject: "AI" },
    { day: 74, task: "Read 'EU AI Act 2025 Update'", link: "https://www.technologyreview.com/2025/03/19/1089919/ai-act-update", prompt: "How does the EU AI Act impact innovation?", time: "1 hr", subject: "AI" },
    { day: 75, task: "Engage on X: Discuss AI regulations with #AIForGood", link: "", prompt: "What community insights did you gain?", time: "1 hr", subject: "AI" },
    { day: 76, task: "Watch 'AI and Human Rights'", link: "https://www.ted.com/talks/ai-and-human-rights-2025", prompt: "How can AI uphold human rights?", time: "1 hr", subject: "AI" },
    { day: 77, task: "Read 'AI Safety Frameworks'", link: "https://arxiv.org/abs/2505.67890", prompt: "What safety measures are critical?", time: "1 hr", subject: "AI" },
    // Week 12: Capstone and Networking
    { day: 78, task: "Build an AI ethics case study", link: "", prompt: "What ethical dilemma did you analyze?", time: "1.5 hrs", subject: "AI" },
    { day: 79, task: "Watch 'AI Future Predictions 2025'", link: "https://www.youtube.com/@AIExplained", prompt: "What prediction resonates with you?", time: "1 hr", subject: "AI" },
    { day: 80, task: "Read 'AI in Healthcare 2025'", link: "https://www.nature.com/articles/ai-healthcare-2025", prompt: "How will AI transform healthcare?", time: "1 hr", subject: "AI" },
    { day: 81, task: "Practice Kaggle: NLP project", link: "https://www.kaggle.com/", prompt: "What NLP technique did you master?", time: "1.5 hrs", subject: "AI" },
    { day: 82, task: "Join an AI webinar on Zoom", link: "https://zoom.us/events", prompt: "What new perspective did you gain?", time: "1.5 hrs", subject: "AI" },
    { day: 83, task: "Read 'AI for Climate Solutions'", link: "https://www.climatechangenews.com/2025/ai-solutions", prompt: "How can AI scale climate solutions?", time: "1 hr", subject: "AI" },
    { day: 84, task: "Watch 'AI and Creativity' lecture", link: "https://ocw.mit.edu/courses/ai-creativity-2025/", prompt: "How does AI enhance creative fields?", time: "1 hr", subject: "AI" },
    { day: 85, task: "Create an AI project (e.g., image classifier)", link: "https://www.tensorflow.org/tutorials", prompt: "How does this project showcase your skills?", time: "2 hrs", subject: "AI" },
    { day: 86, task: "Read 'AI Startup Ecosystem 2025'", link: "https://techcrunch.com/2025/ai-startups", prompt: "What startup trend inspires you?", time: "1 hr", subject: "AI" },
    { day: 87, task: "Engage on X: Share your AI project with #AIForGood", link: "", prompt: "What feedback did you receive?", time: "1 hr", subject: "AI" },
    { day: 88, task: "Watch Lex Fridman interview with an AI ethicist", link: "https://www.youtube.com/@lexfridman", prompt: "How does ethics shape AI’s future?", time: "1.5 hrs", subject: "AI" },
    { day: 89, task: "Write a blog post on your AI journey", link: "", prompt: "How has this journey made you an AI expert?", time: "1.5 hrs", subject: "AI" },
    { day: 90, task: "Create a portfolio of AI projects and share on GitHub", link: "https://github.com/", prompt: "How does this portfolio position you as an AI doctor?", time: "2 hrs", subject: "AI" }
];

// Display schedule and handle interactions
document.addEventListener('DOMContentLoaded', () => {
    const scheduleDiv = document.getElementById('schedule-list');
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
    const progressDiv = document.getElementById('stars');
    const updateProgress = () => {
        const completed = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).length;
        progressDiv.innerHTML = '🧠'.repeat(completed);
    };
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
});

// Toggle task details
function toggleDetails(id) {
    const details = document.getElementById(id);
    details.classList.toggle('active');
}

// Text-to-speech function
function readAloud(id) {
    const text = document.getElementById(id).innerText;
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    } else {
        alert('Browser does not support text-to-speech. Use Chrome Read Aloud extension.');
    }
}

// Motivational pop-ups
const tips = ["You’re on track to be an AI doctor!", "Master AI with daily practice!", "Ethics is the heart of AI!"];
window.onload = () => {
    if (!schedule.find(task => task.day === Math.floor((new Date() - new Date('2025-08-28')) / (1000 * 60 * 60 * 24)) + 1)) return;
    alert(tips[Math.floor(Math.random() * tips.length)]);
};
