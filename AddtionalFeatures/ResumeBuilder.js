// Function to add more skill input fields
document.addEventListener('DOMContentLoaded', function() {
    const addSkillButton = document.querySelector('.addSkillButton');
    const skillsContainer = document.getElementById('skillsContainer');

    addSkillButton.addEventListener('click', function() {
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.classList.add('skillInput');
        newInput.required = true;
        skillsContainer.insertBefore(newInput, addSkillButton);
    });
});

// Function to preview and generate the resume
function previewResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const skillsInputs = document.querySelectorAll('.skillInput');
    const skills = [];
    skillsInputs.forEach(input => {
        if (input.value.trim() !== '') {
            skills.push(input.value.trim());
        }
    });

    // Preview content
    const previewContent = document.getElementById('previewContent');
    previewContent.innerHTML = `
        <img src="path_to_default_image" alt="Profile Picture">
        <h3>${fullName}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>Summary: ${summary}</p>
        <p>Skills: ${skills.join(', ')}</p>
    `;

    // Display preview section
    const previewSection = document.getElementById('preview');
    previewSection.style.display = 'block';

    // Generate and display download link
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.style.display = 'block';
    downloadLink.href = generateResumePDF(fullName, email, phone, address, summary, skills);
}

// Function to generate PDF resume (placeholder function)
function generateResumePDF(fullName, email, phone, address, summary, skills) {
    // Placeholder function to generate PDF or return a download link
    // In a real application, this would involve a more complex PDF generation process
    // For demonstration purposes, return a placeholder link
    return 'path_to_generated_pdf';
}
