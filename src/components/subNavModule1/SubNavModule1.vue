<template>
    <div class="sub-nav-container">
        <ul>
            <li><a href="#">种类1</a></li>
            <li><a href="#">种类2</a></li>
            <li><a href="#">种类3</a></li>
            <li><a href="#">种类4</a></li>
            <li><a href="#">种类5</a></li>
            <li><a href="#">种类6</a></li>
            <div class="nav-box"></div>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
}
/* 删除 body 样式 */
.sub-nav-container {
    position: absolute;
    top: 60px; /* 在顶部导航下方 */
    width: 100%;
    height: 45px;
    left: 0px;
    background: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    z-index: 999;
}

ul {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;
    position: relative;
}

ul .nav-box {
    position: absolute;
    bottom: 0;
    left: 0;
    /* 如果导航栏就六个导航，那么每个导航的宽度都是整个导航的六分之一 */
    width: calc((100% / 6)*1);
    height: 10px;
    border-radius: 2px;
    transition: .5s;
}

ul li {
    width: 100%;
    text-align: center;
}

ul li a {
    color: rgb(70, 100, 180);
    font: 100 30px '优设标题黑';
    display: block;
    width: 100%;
    height: 100%;
    line-height: 70px;
}

ul li:nth-child(1):hover~.nav-box {
    left: calc(100% / 6 *0);
    background-color: rgb(250, 190, 250);
}

ul li:nth-child(2):hover~.nav-box {
    left: calc(100% / 6 *1);
    background-color: red;
}

ul li:nth-child(3):hover~.nav-box {
    left: calc(100% / 6 *2);
    background-color: #d18df8;
}

ul li:nth-child(4):hover~.nav-box {
    left: calc(100% / 6 *3);
    background-color: #ffb1b1;
}

ul li:nth-child(5):hover~.nav-box {
    left: calc(100% / 6 *4);
    background-color: #8da1f8;
}

ul li:nth-child(6):hover~.nav-box {
    left: calc(100% / 6 *5);
    background-color: #7df88e;
}
</style>