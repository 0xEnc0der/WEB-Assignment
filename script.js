document.getElementById('profileForm').addEventListener('submit', function(e) {
    // Prevent the page from actually refreshing
    e.preventDefault();

    // Capture values from the inputs
    const name = document.getElementById('inputName').value;
    const photo = document.getElementById('inputPhoto').value;
    const edu = document.getElementById('inputEdu').value;
    const contact = document.getElementById('inputContact').value;
    const bio = document.getElementById('inputBio').value;

    // Update the Profile Display section
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayEdu').innerText = edu;
    document.getElementById('displayContact').innerText = contact;
    document.getElementById('displayBio').innerText = bio;

    // Update photo if a URL was provided
    if (photo) {
        document.getElementById('displayPhoto').src = photo;
    }

    // Show success feedback
    const msg = document.getElementById('successMessage');
    msg.classList.remove('hidden');
    
    setTimeout(() => {
        msg.classList.add('hidden');
    }, 3000);
});

// Clear the display when the form is reset
document.getElementById('profileForm').addEventListener('reset', function() {
    document.getElementById('displayName').innerText = "Your Name";
    document.getElementById('displayBio').innerText = "Your professional bio will appear here...";
    document.getElementById('displayPhoto').src = "https://via.placeholder.com/150";
});
