$(function(){
  //文字色変化をクリックで青に変更
  $("#change-color").click(function(){
    $("#target").css("color","blue");
  });

  //文字内容変化をクリックで文字内容が変更される
  $("#change-text").click(function(){
    $("#target").text("Hello!");
  });

  //フェードアウトをクリックで文字が徐々に消える
  $("#fade-out").click(function(){
    $("#target").fadeOut(3000);
  });

  //フェードインをクリックで文字が浮かび上がる
  $("#fade-in").click(function(){
    $("#target").fadeIn(3000);
  });
});