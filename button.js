

const button = document.getElementById('download-resume');
button.addEventListener('click', () => {
    const url = 'resume.pdf'; // replace with your resume file URL
    const filename = 'My Resume.pdf'; // replace with your desired file name
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
});