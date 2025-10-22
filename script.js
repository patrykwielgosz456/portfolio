const fn = () => {
    console.log('nasluchiwanie gotowe');
    document.getElementById("navBrochureDownload").addEventListener("click", () => {
        console.log('test')
    })
}

(() => {
    fn();
})()
