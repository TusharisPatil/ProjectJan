// JavaScript to toggle dropdown visibility on click
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Find the dropdown content (the <ul> that follows the clicked button)
        const dropdownContent = this.nextElementSibling;

        // Close all other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== dropdownContent) {
                content.style.display = 'none';
            }
        });

        // Toggle visibility of the clicked dropdown content
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});
