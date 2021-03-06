function userSettings() {

	document.querySelector('.user-settings__icon').addEventListener ('click', function (e) {
		document.querySelector('.user-settings__menu').classList.toggle('open');
		this.parentNode.classList.toggle('open');
	});

	document.getElementById('checkbox1').addEventListener ('click', function (e) {
		const notes = [...(document.getElementsByClassName('note'))];
		if(e.target.checked) {
			notes.forEach(i => {
				i.classList.remove('hidden');
			});
		} else {
			notes.forEach(i => {
				i.classList.add('hidden');
			});
		}
	});

	document.getElementById('checkbox2').addEventListener ('click', function (e) {
		const letters = [...(document.getElementsByClassName('sound'))];
		if(e.target.checked) {
			letters.forEach(i => {
				i.classList.remove('hidden');
			});
		} else {
			letters.forEach(i => {
				i.classList.add('hidden');
			});
		}
	})
}

export { userSettings }
