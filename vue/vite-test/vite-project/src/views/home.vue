<template>
    <div class="hello_block">
        <img src="../assets/img/hello_man.png" alt="" class="hello_block_img">
        <div class="hello_block_text">THE BRAND <br>
            <span class="medium_text">OF LUXERIOUS <span class="pink_text">FASHION</span></span></div>
    </div>
    <div class="offers">
        <div class="offers_wrap">
            <div class="offers_wrap_img"><div class="offers_wrap_img_text">30% OFF
                <br><span class="pink_text" style="font-size: 24px">FOR WOMEN</span></div><img src="../assets/img/woman.png" alt="" class="offers_wrap_img_img"></div>
            <div class="offers_wrap_img"><div class="offers_wrap_img_text">HOT DEAL
                <br><span class="pink_text" style="font-size: 24px">FOR MEN</span></div><img src="../assets/img/men.png" alt="" class="offers_wrap_img_img"></div>
            <div class="offers_wrap_img"><div class="offers_wrap_img_text">NEW ARRIVALS
                <br><span class="pink_text" style="font-size: 24px">FOR KIDS</span></div><img src="../assets/img/kids.png" alt="" class="offers_wrap_img_img"></div>
            <div class="offers_wrap_img"><div class="offers_wrap_img_text">LUXIROUS & TRENDY
                <br><span class="pink_text" style="font-size: 24px">ACCESORIES</span></div><img src="../assets/img/accesories.png" alt="" class="offers_wrap_img_img"></div>
        </div>
    </div>
</template>

<style>
.hello_block{
    width: 100vw;
    max-height: 2160px;
    background-color: #F1E4E6;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hello_block_img{
    width: 50%;
}
.hello_block_text{
    border-left: solid;
    border-width: 12px;
    border-color: #F16D7F;
    padding-left: 16px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    font-size: 3rem;
    line-height: 32px;

    color: #222222;
}
.medium_text{
    font-size: 2rem;
}
.pink_text{
    color: #F16D7F;
}
.offers{
    width: 100vw;
    display: flex;
    justify-content: center;
    
}
.offers_wrap{
    margin: 0 16px;
    max-width: 1140px;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 5%;
    column-gap: 3%;
    grid-auto-rows: auto;
    margin-top: 3%;
    margin-bottom: 5%;
}
.offers_wrap_img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
}
.offers_wrap_img_text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    z-index: 1;
    color: #FFFFFF;
}
.offers_wrap_img_img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.offers_wrap_img:nth-child(4) {
  grid-column: 1 / -1;
}
.offers_wrap_img::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(33, 22, 22, 0.7);
  pointer-events: none;
}
</style>