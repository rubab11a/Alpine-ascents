document.addEventListener('DOMContentLoaded', () => {
    const modalElement = document.getElementById('storyModal');
    if (!modalElement || !window.bootstrap) return;

    const modal = new bootstrap.Modal(modalElement);
    const title = modalElement.querySelector('[data-modal-title]');
    const category = modalElement.querySelector('[data-modal-category]');
    const image = modalElement.querySelector('[data-modal-image]');
    const description = modalElement.querySelector('[data-modal-description]');

    document.querySelectorAll('.read-story, .featured-btn').forEach(trigger => {
        trigger.addEventListener('click', event => {
            event.preventDefault();
            const container = trigger.closest('.story-card') || trigger.closest('.featured-content');
            const imageContainer = trigger.closest('.featured-box') || container;

            title.textContent = container.querySelector('h2, h3')?.textContent.trim() || 'Mountain Story';
            category.textContent = container.querySelector('.story-category, .section-tag')?.textContent.trim() || 'STORY';
            description.textContent = [...container.querySelectorAll('p')]
                .map(paragraph => paragraph.textContent.trim())
                .join(' ');

            const source = imageContainer.querySelector('img');
            image.src = source?.src || '';
            image.alt = source?.alt || title.textContent;
            modal.show();
        });
    });
});
