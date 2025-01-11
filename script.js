document.getElementById('download-resume').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'uploads/resume.pdf';
    link.download = 'resume.pdf'; // The name of the downloaded file
    link.click();
});
