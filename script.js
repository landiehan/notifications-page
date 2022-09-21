document
	.querySelector('.js-read-all')
	.addEventListener('click', () => {
		document
			.querySelectorAll('.js-unread-indicator')
			.forEach(unreadIndicator => {
				unreadIndicator.remove();
			});
	});