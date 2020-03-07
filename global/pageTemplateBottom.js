// 通常のページのテンプレート（共通部分）
// mainタグから下側
; (_ => {
  document.write(`
      </main>

    </div>
  </div>

  <!-- My Script ------------------------------ -->
  <script>
    // titleをh1の内容と同じにする
    document.title = document.getElementsByTagName("h1")[0].textContent;
  </script>

  <!-- Material Design Bootstrap ------------------------------ -->
  <!-- JQuery, Bootstrap tooltips, Bootstrap core JavaScript, MDB core JavaScript -->
</body>
</html>
  `);

  // MD Bootstrapに必要なCDN
  const mdbootstrapJsCdns = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.11/js/mdb.min.js"
  ]

  // CDNを有効化する
  for (const iterator of mdbootstrapJsCdns) {
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("src", iterator);
    document.body.appendChild(scriptElement);
  }

})();