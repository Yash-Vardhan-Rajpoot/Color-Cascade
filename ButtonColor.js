const buttons = document.querySelectorAll(".button");
const body = document.body;

// Add ripple effect to buttons
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Color change functionality
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        const color = event.target.id;
        const colors = {
            purple: '#9b59b6',
            red: '#e74c3c',
            green: '#2ecc71',
            blue: '#3498db',
            orange: '#f39c12',
            white: '#ffffff'
        };
        
        body.style.backgroundColor = colors[color];
        
        // Update button styles based on background color
        buttons.forEach(btn => {
            if (btn.id === color) {
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => btn.style.transform = '', 200);
            }
        });
    });
});