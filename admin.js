// Tab Switching Logic
const menuItems = document.querySelectorAll('.admin-menu li');
const tabContents = document.querySelectorAll('.tab-content');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class
        menuItems.forEach(i => i.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked
        item.classList.add('active');
        const tabId = item.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Theme Color Change Logic
document.getElementById('saveSettings')?.addEventListener('click', () => {
    const selectedColor = document.getElementById('themeColorPicker').value;
    alert('Theme color updated to: ' + selectedColor);
    // এখানে পরবর্তীতে localStorage বা Firebase এ সেভ করা হবে
    document.documentElement.style.setProperty('--primary-color', selectedColor);
});