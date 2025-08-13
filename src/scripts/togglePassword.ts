
export function initTogglePassword(): void {
    const toggleButtons = document.querySelectorAll<HTMLButtonElement>('.toggle-password');

    toggleButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            if (!targetId) return;

            const input = document.getElementById(targetId) as HTMLInputElement;
            if (!input) return;

            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';

          
            btn.innerHTML = isPassword 
                ? "<i class='bx bxs-lock-open-alt '></i>" 
                : "<i class='bx bxs-lock-alt'></i>";
        });
    });
}
