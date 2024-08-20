const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => tab.addEventListener('click', () => tabCliked(tab))); 
const tabCliked = (tab) => {
    const contents = document.querySelectorAll('.content')
    contents.forEach(content => content.classList.remove('show'))
    const contentid = tab.getAttribute('content-id')
    console.Log(content-Id);

}