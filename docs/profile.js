document.addEventListener("DOMContentLoaded", function () {
  // Fetch user details from your backend or storage
  const userDetails = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    // Add more user details as needed
  };

  const profileSection = document.querySelector(".profile-section");

  // Populate the profile section with user details
  function populateProfile() {
    profileSection.innerHTML = `
      <h2>Hello, ${userDetails.username}!</h2>
      <p>Email: ${userDetails.email}</p>
      <!-- Display other user information here -->
    `;
  }

  // Call the function to populate the profile section
  populateProfile();
});
