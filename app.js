// Function for AI-Powered Outfit Suggestion
async function getOutfitSuggestion() {
  // Placeholder for AI suggestion logic (can be enhanced with actual AI integration)
  const res = await fetch('https://fashion-backend-ajqp.onrender.com', { method: 'GET' });
  const data = await res.json();

  if (data.suggestions && data.suggestions.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.suggestions.length);
    document.getElementById("outfit-suggestion").textContent = "Suggested Outfit: " + data.suggestions[randomIndex];
  } else {
    document.getElementById("outfit-suggestion").textContent = "No suggestions available.";
  }
}

// Wardrobe Management: Add item to wardrobe
function addWardrobeItem() {
  const itemName = document.getElementById("item-name").value;
  const itemFile = document.getElementById("upload-item").files[0];

  if (!itemName || !itemFile) {
      alert("Please enter a name and upload an item.");
      return;
  }

  const formData = new FormData();
  formData.append("name", itemName);
  formData.append("image", itemFile);

  // Send POST request to backend to add the item to the wardrobe
  fetch("/api/wardrobe", {'https://fashion-backend-ajqp.onrender.com'
      method: "POST",
      body: formData,
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          const imgSrc = URL.createObjectURL(itemFile);
          const wardrobeList = document.getElementById("wardrobe-list");

          // Create new wardrobe item element
          const newItem = document.createElement("div");
          newItem.classList.add("wardrobe-item");
          newItem.innerHTML = `
              <img src="${imgSrc}" alt="${itemName}" style="max-width: 100px; height: auto;">
              <p>${itemName}</p>
          `;
          wardrobeList.appendChild(newItem);
      } else {
          alert("Failed to add item: " + data.error);
      }
  })
  .catch(error => {
      console.error("Error adding item:", error);
      alert("An error occurred while adding the item.");
  });

  document.getElementById("item-name").value = ""; // Reset item name input
  document.getElementById("upload-item").value = ""; // Reset file input
}


    // Send the data to the backend
    const res = await fetch('https://fashion-backend-ajqp.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: itemName, imageUrl: imgSrc }),
    });

    const data = await res.json();

    if (data.message === "Wardrobe item added successfully") {
      const wardrobeList = document.getElementById("wardrobe-list");

      // Create new wardrobe item element
      const newItem = document.createElement("div");
      newItem.classList.add("wardrobe-item");
      newItem.innerHTML = `
        <img src="${imgSrc}" alt="${itemName}" style="max-width: 100px; height: auto;">
        <p>${itemName}</p>
      `;

      wardrobeList.appendChild(newItem);
    } else {
      alert("Error adding wardrobe item.");
    }
  
{
  reader.readAsDataURL(itemFile);
  document.getElementById("item-name").value = ""; // Reset item name input
  document.getElementById("upload-item").value = ""; // Reset file input
}

// Outfit Planner: Add outfit to calendar
async function planOutfit() {
  const plannerDate = document.getElementById("planner-date").value;
  const outfitDetails = "Casual white tee and denim"; // Replace with real outfit logic

  if (!plannerDate) {
    alert("Please select a date for your outfit.");
    return;
  }

  // Send the planned outfit to the backend
  const res = await fetch('https://fashion-backend-ajqp.onrender.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date: plannerDate, outfit: outfitDetails }),
  });

  const data = await res.json();

  if (data.message === "Outfit planned successfully") {
    const outfitList = document.getElementById("outfit-list");
    const plannedOutfitItem = document.createElement("li");
    plannedOutfitItem.textContent = `Outfit for ${plannerDate}: ${outfitDetails}`;
    outfitList.appendChild(plannedOutfitItem);

    document.getElementById("planner-date").value = ""; // Reset date input
  } else {
    alert("Error planning outfit.");
  }
}

// Profile Update: Update profile
async function updateProfile() {
  const profileName = document.getElementById("profile-name").value;
  const profileImage = document.getElementById("profile-image").files[0];

  if (!profileName || !profileImage) {
    alert("Please enter a name and upload a profile picture.");
    return;
  }

  const reader = new FileReader();
  reader.onload = async function (e) {
    const imgSrc = e.target.result;

    // Send profile update data to backend
    const res = await fetch('https://fashion-backend-ajqp.onrender.com', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: profileName, imageUrl: imgSrc }),
    });

    const data = await res.json();

    if (data.message === "Profile updated successfully") {
      alert("Profile updated successfully!");
      document.getElementById("profile-name").value = ""; // Reset input
      document.getElementById("profile-image").value = ""; // Reset file input
    } else {
      alert("Error updating profile.");
    }
  };

  reader.readAsDataURL(profileImage);
}
  
// Virtual 3D Wardrobe Preview: Simulated 3D model load
function load3DModel() {
  const modelContainer = document.getElementById("3d-model-container");

  // Clear existing content if any
  modelContainer.innerHTML = "";

  // Placeholder for actual 3D model integration
  const modelPreview = document.createElement("div");
  modelPreview.innerHTML = "<p>3D Wardrobe Model Loading...</p>";
  modelContainer.appendChild(modelPreview);

  // Simulate model loading (replace this with actual 3D model rendering logic)
  setTimeout(() => {
    modelPreview.innerHTML = "<p>3D Model Ready: Wardrobe Preview</p>";
  }, 2000);
}

  
  