function showSection(section) {
    // Add 'contact' to the sections array
    const sections = ['home', 'experience', 'projects', 'contact'];

    // Hide all sections
    sections.forEach(sec => {
        document.getElementById(sec + '-section').style.display = 'none';
    });

    // Show the selected section
    document.getElementById(section + '-section').style.display = 'block';

    // Remove 'active' class from all tabs
    sections.forEach(sec => {
        document.getElementById(sec + '-tab').classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    document.getElementById(section + '-tab').classList.add('active');
}

// On window load, show the home section by default
window.onload = function() {
    showSection('home');
};

