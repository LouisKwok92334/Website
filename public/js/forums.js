let urlParams = new URLSearchParams(window.location.search);
let urlID = urlParams.get("id");
const publish = document.querySelector('.Forums-Publish')
const articleForm = document.querySelector('.Create-Article')
const successMessage = document.querySelector(".error");
const articleListData = document.querySelector('.Forums-Article-Data')

publish.addEventListener('click', function() {
    articleForm.classList.remove('Display')
})

async function articleList() {
    const res = await fetch('/getArticle');
    const articles = await res.json();
    articleListData.innerHTML = ""
        
    for (let i = 0; i < articles.length; i++) {
        articleListData.innerHTML += /*html*/ `
        <a href="forums.html?id=${articles[i].id}">
            <div class="Forums-Article-Display">
                <div class="Forums-Article">
                    <div class="Forums-Post-Data">
                        <img class="Forums-User-Icon" src="../images/四景.jpeg">
                        <div class="Forums-User-Data">
                            <div class="Forums-User-Name">VTC學生</div>
                            <div class="Forums-User-Contact">${articles[i].article_name}</div>
                        </div>
                    </div>
                    <div class="Forums-Article-Date">${articles[i].created_at.substr(0,10)}</div>
                </div>
            </div>
        </a>
        `
    };
}

async function articleContact() {
    if (urlID === null) {
        articleList();
    } else {
        const res = await fetch('/getArticle');
        const articles = await res.json();
        const articleContact = articles.find(c => c.id.toString() === urlID)
        publish.classList.add('Display')
        articleListData.innerHTML = ""
            articleListData.innerHTML += /*html*/ `
            <div class="Forums-Article-Display">
                <div class="Forums-Article">
                    <div class="Forums-Post-Data">
                        <img class="Forums-User-Icon" src="../images/四景.jpeg">
                        <div class="Forums-User-Data">
                            <div class="Forums-User-Name">VTC學生</div>
                            <div class="Forums-User-Contact">${articleContact.article_name}</div>
                        </div>
                    </div>
                    <div class="Forums-Article-Date">${articleContact.created_at.substr(0,10)}</div>
                </div>
                <div class="Forums-Article-Content">
                    <div>${articleContact.description}</div>
                </div>
            </div>
        `
    }
}

articleContact();