// 通常のページのテンプレート（共通部分）
// mainタグから下側
; (_ => {
  console.log(`
当スクリプトにより発生する下記エラーについて
A parser - blocking, cross site(i.e.different eTLD + 1) script, <URL>, is invoked via document.write. The network request for this script MAY be blocked by the browser in this or a future page load due to poor network connectivity. If blocked in this page load, it will be confirmed in a subsequent console message. See <URL> for more details.

内容：document.write()で開いたjsファイルは、回線が低速・不安定な時に実行されない可能性がある
原因：document.write()で他のjsファイルを開く
対処：下記サイトによると、よほど低速でないと影響を受けないため、黙認とする
参考：https://did2memo.net/2016/11/26/a-parser-blocking-cross-origin-script-is-invoked-via-document-write/
  `);
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
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.11/js/mdb.min.js"></script>
</body>
</html>
  `);
})();