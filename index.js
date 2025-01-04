document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const artForm = document.getElementById('art-form');
    const scienceForm = document.getElementById('science-form');
    const artResult = document.getElementById('art-result');
    const scienceResult = document.getElementById('science-result');

    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(`${tabName}-content`).classList.add('active');
        });
    });

    // Art form submission
    artForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const score = parseInt(document.getElementById('art-score').value);
        if (score < 50) {
            const scienceCourses = ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English'];
            const suggestedCourse = scienceCourses[Math.floor(Math.random() * scienceCourses.length)];
            artResult.textContent = `Your score is below 50. We suggest trying a science course: ${suggestedCourse}`;
        } else {
            artResult.textContent = `Great job! Your score of ${score} shows strength in Art courses.`;
        }
    });

    // Science form submission
    scienceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const score = parseInt(document.getElementById('science-score').value);
        if (score < 50) {
            const artCourses = ['Law', 'Government', 'Commerce', 'Christian Religious Knowledge', 'Literature'];
            const suggestedCourse = artCourses[Math.floor(Math.random() * artCourses.length)];
            scienceResult.textContent = `Your score is below 50. We suggest trying an art course: ${suggestedCourse}`;
        } else {
            scienceResult.textContent = `Great job! Your score of ${score} shows strength in Science courses.`;
        }
    });
});

