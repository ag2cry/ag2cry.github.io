<template>
  <div class="header">
    <img src="../assets/image/29367214_m.jpg"/>
    <h1>Shio's room</h1>
  </div>
</template>

<script>

export default defineComponent({
});
</script>

<style>
.header {
  background-color: beige;
  position: relative;  /* 基準位置とする */
}

.header::before {
  content: "";         /* 疑似要素に必須 */
  width: 100%;         /* 幅いっぱい */
  height: 100%;        /* 高さいっぱい */
  display: block;      /* 高さを指定するためにブロック要素にする */
  background: linear-gradient(rgba(255,255,255,0) 0, #fff 80%); /* 徐々に透明にする */
  position: absolute;  /*  */
  top: 0;
  left: 0;
}

.header img {
  min-width: 960px;
}

.header h1 {
  position: absolute;  /*重ねたい子要素にabsolute*/
  top: 12%;
  left: 13%;
  -ms-transform: translate(-50%,-50%);      /*ベンダープレフィックス*/
  -webkit-transform: translate(-50%,-50%);  /*ベンダープレフィックス*/
  transform: translate(-50%,-50%);          /*センター寄せの修正*/
  color: #fff;
  margin: 0!important;                      /*文字がずれている場合や*/
  padding: 0!important;                     /*文字が折り返される場合*/
  font-family: fantasy;
  font-size: 48px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
}
</style>