document.querySelectorAll('.accordion-title').forEach((item) => {
	item.addEventListener('click', (event) => {
		//handle click
		const accordianCollapse = item.nextElementSibling;
		if (!item.classList.contains('open')) {
			accordianCollapse.style.display = 'block';
			let contentHeight = accordianCollapse.clientHeight;

			setTimeout(() => {
				accordianCollapse.style.height = `${contentHeight}px`;
				accordianCollapse.style.display = '';
			}, 1);

			accordianCollapse.classList = 'accordion-collapse collapsing';
			setTimeout(() => {
				accordianCollapse.classList = 'accordion-collapse collapse open';
			}, 300);
		} else {
			accordianCollapse.classList = 'accordion-collapse collapsing';

			setTimeout(() => {
				accordianCollapse.style.height = '0px';
			}, 1);

			setTimeout(() => {
				accordianCollapse.classList = 'accordion-collapse collapse';
				accordianCollapse.style.height = '';
			}, 300);
		}

		item.classList.toggle('open');
	});
});
