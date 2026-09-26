document.addEventListener('DOMContentLoaded', () => {
    if (!window.bootstrap) return;

    const modalMarkup = `
        <div class="modal fade content-modal" id="contentModal" tabindex="-1" aria-labelledby="contentModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <img class="content-modal-image" data-content-image src="" alt="">
                    <div class="modal-body">
                        <div class="content-modal-technique-label" hidden>ALPINE ASCENTS · SKILL GUIDE</div>
                        <h2 id="contentModalTitle" data-content-title></h2>
                        <p data-content-description></p>
                    </div>
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalMarkup);

    const modalElement = document.getElementById('contentModal');
    const modal = new bootstrap.Modal(modalElement);
    const title = modalElement.querySelector('[data-content-title]');
    const description = modalElement.querySelector('[data-content-description]');
    const image = modalElement.querySelector('[data-content-image]');

    document.querySelectorAll('a[href="#"]').forEach(trigger => {
        if (trigger.closest('.footer, .main-nav, .navbar, .read-story')) return;

        trigger.addEventListener('click', event => {
            event.preventDefault();
            const content = trigger.closest('[class*="card"], [class*="content"], [class*="box"]') || trigger.parentElement;
            const isTechnique = content.classList.contains('tech-card');
            modalElement.classList.toggle('technique-modal', isTechnique);
            title.textContent = content.querySelector('h1, h2, h3, h4, h5')?.textContent.trim() || trigger.textContent.trim();
            description.textContent = [...content.querySelectorAll('p')]
                .map(paragraph => paragraph.textContent.trim())
                .join(' ') || 'More details about this mountain experience are coming soon.';

            const source = content.querySelector('img');
            image.src = source?.src || '';
            image.alt = source?.alt || title.textContent;
            image.hidden = !source;
            modalElement.querySelector('.content-modal-technique-label').hidden = !isTechnique;
            modal.show();
        });
    });
});
