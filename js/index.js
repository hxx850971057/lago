//点击切换三个界面 以及下面div变化
Vue.component('tab-position',
    {
    data(){
        return {
        datalist:[],
        num : 15
        }
    },
    created(){
        fetch('./data.json').then((res)=>res.json()).then((res)=>{
            this.datalist=res.data;
        })
    },
    methods :{
        morecont:function(){
            this.num+=15;
        },
        imgsrc:function(dat){
            return "https://www.lgstatic.com/"+dat
        }
    },
    template:`<div class="post">
                <a href="javascript:;" v-for="jsdata in datalist.slice(0,num)">
                <div>
                    <img :src="imgsrc(jsdata.companyLogo)" alt="">
                    <div class="postcont">
                        <h2>{{jsdata.companyName}}</h2>
                        <p>{{jsdata.positionName}}<span>[{{jsdata.city}}]</span></p>
                        <i>{{jsdata.createTime}}</i>
                    </div>
                </div>
                <i>{{jsdata.salary}}</i>
                </a>
                <div class="more"  @click='morecont'>
                    <span>加载更多</span>
                </div>
                <div class="webtype">
                    <p>©2020 lagou.com, all right reserved</p>
                    <p><span>移动版</span><b>·</b><span>电脑版</span><b>·</b><span>回顶部</span></p>
                </div>
                </div> `
            
    
    })
           
 Vue.component('tab-search', {
    template: `<div class="serch">
                    <div>全国<span></span></div>
                    <input type="text" name="">
                    <button><span></span></button>
                </div> `
 })
 Vue.component('tab-my', {
    template:`<div class="means">
                <a href="#">
                    登录/注册
                </a>
                <div>
                    <a href="#">投递</a>
                    <a href="#">面试</a>
                    <a href="#">邀约</a>
                    <a href="#">收藏</a>
                </div>
            </div>`
       })
let vm = new Vue({
    el:"#app",
    data:{
        clickchange:false,
        colorchange:"colorchange",
        current: 'position',
        currentIndex:0,
        tabs: [{ id: 'position', txt: '职位' }, { id: 'search', txt: '搜索' }, { id: 'my', txt: '我的' }]
    },
    methods: {
      handleClick(item,index) {
        this.current = item;
        console.log(index);
        this.currentIndex = index;
        //点击按钮后 将字体颜色 背景图标位置更改
       
      }
    },
    computed: {
      getCurrent() {
        return 'tab-' + this.current;
      }
    }
})