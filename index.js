document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');

    // Tab switching functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Submit button functionality
    submitBtn.addEventListener('click', () => {
        const artScore = parseInt(document.getElementById('art-score').value) || 0;
        const scienceScore = parseInt(document.getElementById('science-score').value) || 0;

        let suggestion = '';

        if (artScore > scienceScore) {
            if (scienceScore < 50) {
                suggestion = 'Based on your scores, we suggest you consider art-related courses. Some options include:';
                suggestion += '<ul>';
                suggestion += '<li>Law</li>';
                suggestion += '<li>Government</li>';
                suggestion += '<li>Commerce</li>';
                suggestion += '<li>Christian Religious Knowledge (CRK)</li>';
                suggestion += '<li>History</li>';
                suggestion += '<li>Literature</li>';
                suggestion += '</ul>';
            } else {
                suggestion = 'You have good scores in both art and science, but you show a stronger inclination towards art. Consider exploring art-related fields while keeping your science options open.';
            }
        } else if (scienceScore > artScore) {
            if (artScore < 50) {
                suggestion = 'Based on your scores, we suggest you consider science-related courses. Some options include:';
                suggestion += '<ul>';
                suggestion += '<li>Physics</li>';
                suggestion += '<li>Chemistry</li>';
                suggestion += '<li>Biology</li>';
                suggestion += '<li>Mathematics</li>';
                suggestion += '<li>Computer Science</li>';
                suggestion += '<li>Engineering</li>';
                suggestion += '</ul>';
            } else {
                suggestion = 'You have good scores in both science and art, but you show a stronger inclination towards science. Consider exploring science-related fields while keeping your art options open.';
            }
        } else {
            suggestion = 'Your scores in art and science are equal. You have the flexibility to choose from a wide range of courses in both fields. Consider your personal interests and career goals when making your decision.';
        }

        resultDiv.innerHTML = `
            <h3>Results:</h3>
            <p>Art Score: ${artScore}</p>
            <p>Science Score: ${scienceScore}</p>
            <p>${suggestion}</p>
        `;
    });
});

