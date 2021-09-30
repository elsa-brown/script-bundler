import '../scss/style.scss';

const addDiv = () => {
    const newDiv = document.createElement('div');
    newDiv.className = 'script-bundler-div';
    newDiv.innerHTML = "This element was created with script-bundler";

    document.body.appendChild(newDiv);
}

const init = () => {
    console.log('HELLO SCRIPT BUNDLER');
    
    if (document.readyState !== "loading") {
        addDiv();
    } else {
        document.onreadystatechange = () => {
            if ( document.readyState !== 'loading') {
                addDiv();
            }
        }
    }
}

init();