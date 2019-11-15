const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
    const computedstyle = getComputedStyle(progressBar)
    const width = parseFloat(computedstyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
}, 5)