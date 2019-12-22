; (_ => {
    document.write(`
<style>
    @media screen and (min-width: 992px) {
    #g-nav {
        font-size: 80%;
    }
    }
    /* 再帰的にスタイリングしたいため、スタイルシートを使用 */
    #g-nav ul {
    list-style: none;
    padding-left: 1rem;
    }
</style>

<nav class="navbar navbar-expand-lg navbar-light flex-lg-column">
    <a href="/hvc-room/" class="navbar-brand m-0">
    ひぶしの部屋
    </a>
    <button class="navbar-toggler" data-target="#g-nav" data-toggle="collapse" aria-controls="g-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div id="g-nav" class="collapse navbar-collapse">
    <div class="d-flex justify-content-ce
    nter">
        <ul class="mt-3 p-0">
        <li>
            ミニツール
        </li>
        <ul>
            <li>
            <a href="/hvc-room/miniTools/msTime/index.html" class="text-wrap">ミリ秒時計</a>
            </li>
        </ul>
        </ul>
    </div>
    </div>
</nav>
`);
})();