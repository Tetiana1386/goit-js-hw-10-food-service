const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    };

const inputEl = document.querySelector('#theme-switch-toggle');

inputEl.addEventListener('change', onChangeInput);

function onChangeInput(event) {
    if (event.target.checked) {
         onChangeDarkTheme();
    } else {
         onChangeLightTheme();
    }
}

function onChangeDarkTheme() {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    inputEl.checked = true;
}

function onChangeLightTheme() {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    inputEl.checked = false;
}

function onGetcurrentTheme() {
    const retentionTheme = localStorage.getItem('theme');
    if (retentionTheme === Theme.LIGHT || retentionTheme === null) {
        onChangeLightTheme();
        return;
    }
    if (retentionTheme === Theme.DARK) {
        onChangeDarkTheme();
        return;
    }
}
onGetcurrentTheme();