function btnSubmit(callback) {
    let btn = document.getElementById('btnsubmit');
    let btns = document.getElementById('btnsubmitsvg');
    btns.classList.add('hidden');
    btn.classList.add('loading', 'disabled');
    callback().then(() => {
        btn.classList.remove('loading', 'disabled');
        btns.classList.remove('hidden');
    });
    
}