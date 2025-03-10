// Toggle user menu (side menu) when clicking on the user icon
function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    userMenu.style.display = (userMenu.style.display === 'block') ? 'none' : 'block';
  }
  
  // Tab functionality for the weather page
  document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-target')).classList.add('active');
      });
    });
  });
  
  // Handle file upload in the Research tab (if used)
  function handleUpload() {
    const fileInput = document.getElementById('fileUpload');
    const uploadStatus = document.getElementById('uploadStatus');
    if (fileInput && fileInput.files.length > 0) {
      uploadStatus.innerText = "File uploaded: " + fileInput.files[0].name;
    } else if (uploadStatus) {
      uploadStatus.innerText = "No file selected.";
    }
  }
  
  
  function toggleAddResource() {
    const form = document.getElementById('addResourceForm');
    form.style.display = (form.style.display === 'block') ? 'none' : 'block';
  }
  
  