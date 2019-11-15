<template>
    <div class="city" ref="city">
        <div class="cityContainer" >
             <div class="city-list" ref="cityList">
            
            <div class="city-list-item" v-for="(item,index) in cityList" :key="index">
                <div class="city-title">{{item.index}}</div>
                <div class="city-name">
                    <v-touch tag="div" class="city-name-item" v-for="child in item.list" 
                    :key="child.id" @tap="handleCityTo(child)">
                        {{child.nm}}</v-touch>
                </div>
            </div>

        </div>
        <div class="city-list-index">
            <v-touch tag="div" class="index-item" v-for="(item,index) in cityList" 
            :key="item.id" @tap="handleTo(index)">{{item.index}}</v-touch>
        </div>
        </div>
       
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name:'City',
    created(){
        // this.$store.dispatch("city/handleAsyncGetCity");
        if(!(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotCity"))){
            this.$store.dispatch("city/handleAsyncGetCity");
        }
    },
    computed:{
        ...mapState({
            cityList:state=>state.city.cityList,
            hotCity:state=>state.city.hotCity,
            
        })
    },
    methods:{
        handleTo(index){
            
            let t = this.$refs.cityList.querySelectorAll(".city-title")[index].offsetTop
            console.log(t)

            this.$refs.city.scrollTop = t
        },
        handleCityTo(child){
            this.$router.push("/alcohol")
            this.$store.commit("city/handleUpdateCity",child)
        }
    }
    
  }
</script>

<style lang="scss">
    .city{
        height: 100%;
        overflow: auto;
        .cityContainer{
            height: 100%
        }
    }
    .city-list{
        width: 100%;
         background: rgb(228, 224, 224);
         overflow: auto;
        .city-list-item{
            width: 100%;
            display: flex;
            flex-direction: column;
            .city-title{
                width:100%;
                height: .3rem;
                align-items: center;
                display: flex;
                font-size: .14rem;
                border-bottom: 1px solid #fcfcfc;
            }
            .city-name{
                background: #fcfcfc;
                display: flex;
                width: 100%;
                font-size: .14rem;
                padding-left: .1rem;
                flex-direction: column;
                // box-sizing: border-box;
            }
            .city-name-item{
                width: 100%;
                height: .4rem;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #f1f1f1;
            }
        }
       
    }
     .city-list-index{
            position: fixed;
            height: 100%;
            width:.2rem;
            right:0;
            top:0;
            background: rgb(228, 224, 224);
            font-size: .12rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .index-item{
                padding:  .05rem 0;
                justify-content: center;
                display: flex;
            }
        }
</style>