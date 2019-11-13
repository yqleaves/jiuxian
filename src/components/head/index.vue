<template>
    <div class="head">
            <router-link to="/city" tag="i"></router-link>
            <div class="search">
                <b></b>
                <span>硬核11.11 壕掷千万补贴</span>
            </div>
        </div>
</template>

<style lang="scss">
    
/* header */
.head{
    height: .4rem;
    width: 100%;
    display: flex;
    background: rgba(255,0,0,.6);
    position: fixed;     
    top: 0;
    z-index: 2;
    justify-content: space-around;
    align-items: center;
}
.head i{
    width: .57rem;
    height: .27rem;
    background: url(https://m.jiuxian.com/mjava_statics/images/home/jx-sprite.png) no-repeat;
    background-size: 2rem .73rem;
    border-radius: 3px;
    background-position: 0 0;
}
.head .search{
    width: 2.9rem;
    height: .27rem;
    border-radius: 3px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 .1rem;
}
.head .search b{
    background: url(https://mlist.jiuxian.com/mjava_statics/images/search/searchIcon.png) no-repeat;
    background-size: 1.2rem .4rem;
    cursor: pointer;
    width:.12rem;
    height: .12rem;
    display: flex;
    background-position: -.41rem -.18rem;
    margin-right: .2rem;
}
.head .search span{
    font-size: .12rem;
    color: #666;
    width: 1.5rem;
}

</style>