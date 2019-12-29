// 通常のページの上側のテンプレート（共通部分）
// mainタグから上側
; (_ => {
  document.write(`
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- Material Design Bootstrap ------------------------------ -->
  <!-- Font Awesome, Bootstrap core CSS, Material Design Bootstrap -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.11/css/mdb.min.css" rel="stylesheet">

  <title>ひぶしの部屋</title>
</head>

<body class="blue-grey lighten-5">
  <div class="container white z-depth-1">
    <div class="row">

      <!-- navbar-outer  -->
      <div class="col-lg-3 p-0 pr-lg-3">
        <script src="/hvc-room/global/g-nav.js"></script>
      </div>

      <main class="col-lg-9 mt-4">
  `);
})();