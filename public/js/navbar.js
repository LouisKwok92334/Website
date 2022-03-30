window.addEventListener('scroll',function(){
    if (window.scrollY > 50) {
        document.querySelector('.Title-Icon').classList.add('mini');
    } else {
        document.querySelector('.Title-Icon').classList.remove('mini');
    };
},false);

const herder = document.querySelector("header");
const bottom = document.querySelector("footer");

function setHeader() {
    herder.innerHTML += /*html*/ `
    <div class="Title">
        <div class="Title-Introduce">
            <a href="./index.html">
                <img class="Title-Icon" src="../images/title2.png">
            </a>
                <ul class="Title-Menu">
                    <li>
                        <a href="./index.html">最新消息</a>
                    </li>
                    <li>
                        <a href="./character.html">角色設定</a>
                    </li>
                    <li>
                        <a href="./strategy.html">遊戲攻略</a>
                    </li>
                    <li>
                        <a href="./forums.html">討論區</a>
                    </li>
                    <li>
                        <a href="./download.html">遊戲下載</a>
                    </li>
                    <li>
                        <a href="./contact.html">聯絡我們</a>
                    </li>
                </ul>
        </div>
        <div class="Title-Login">
            <div class="Title-Login-Message"></div>
            <div class="Title-Login-Icon">
                <img src="https://gamelet.online/clients/assets/v1/img/none_login_photo.png">
            </div>
        </div>
    </div>
    `
}
function setFooter() {
    bottom.innerHTML += /*html*/ `
    <div class="Bottom">
        <div class="Bottom-Introduce">
            <img src="../images/Xiaoyuan.png">
            <div class="Bottom-button">
                <div>
                    <a href="./index.html">最新消息</a>
                </div>
                <div>
                    <a href="./character.html">角色設定</a>
                </div>
            </div>
            <div class="Bottom-button">
                <div>
                    <a href="./strategy.html">遊戲攻略</a>
                </div>
                <div>
                    <a href="./forums.html">討論區</a>
                </div>
            </div>
            <div class="Bottom-button">
                <div>
                    <a href="./download.html">遊戲下載</a>
                </div>
                <div>
                    <a href="./contact.html">聯絡我們</a>
                </div>
            </div>
        </div>
        <div class="Bottom-Regulations">© 2022 Xiaoyuan’ Adventures All rights reserved.</div>
    </div>
    `
}

setHeader();
setFooter();