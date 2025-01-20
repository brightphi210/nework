document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const artForm = document.getElementById('art-form');
    const scienceForm = document.getElementById('science-form');
    const artResult = document.getElementById('art-result');
    const scienceResult = document.getElementById('science-result');

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    // Art form submission
    artForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const score = parseInt(document.getElementById('art-score').value);
        if (score < 50) {
            const scienceCourses = ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English'];
            const recommendation = scienceCourses[Math.floor(Math.random() * scienceCourses.length)];
            artResult.textContent = `Your score is below 50. We recommend trying a science course: ${recommendation}`;
        } else {
            const artCourses = ['Fine Arts', 'Law', 'Mass Communication', 'Theatre Arts', 'International Relations'];
            const recommendation = artCourses[Math.floor(Math.random() * artCourses.length)];
            artResult.textContent = `Great job! Your score of ${score} shows strength in art subjects. You could consider pursuing a university course like ${recommendation}.`;
        }
    });

    // Science form submission
    scienceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const score = parseInt(document.getElementById('science-score').value);
        if (score < 50) {
            const artCourses = ['Law', 'Government', 'Commerce', 'Christian Religious Knowledge'];
            const recommendation = artCourses[Math.floor(Math.random() * artCourses.length)];
            scienceResult.textContent = `Your score is below 50. We recommend trying an art course: ${recommendation}`;
        } else {
            const scienceCourses = ['Engineering', 'Medicine', 'Pharmacy', 'Computer Science', 'Biotechnology'];
            const recommendation = scienceCourses[Math.floor(Math.random() * scienceCourses.length)];
            scienceResult.textContent = `Great job! Your score of ${score} shows strength in science subjects. You could consider pursuing a university course like ${recommendation}.`;
        }
    });
});
