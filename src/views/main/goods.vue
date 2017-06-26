<template>
	<div class="order">
		<ul>  
            <li v-for="(item,index) in items">  
                <h2 @click="showToggle(index)">{{item.name}}</h2>  
                <ul  v-show="itemsState[index]" @click.stop>  
                    <li v-for="subItem in item.subItems">  
                        <h3>{{subItem.name}}</h3>  
                    </li>  
                </ul>  
            </li>  
        </ul> 
	</div>
</template>
<script>
	export default {
		name:'order',
		data () { 
			return {
	            items:[  
	                {  
	                    name:'家用电器',  
	                    isSubShow:false,  
	                    subItems:[  
	                        {  
	                            name:'笔记本电脑'  
	                        },  
	                        {  
	                            name:'台式电脑'  
	                        },  
	                        {  
	                            name:'电视机'  
	                        }  
	                    ]  
	                },  
	                {  
	                    name:'服装',  
	                    isSubShow:false,  
	                    subItems:[  
	                        {  
	                            name:'男士服装'  
	                        },  
	                        {  
	                            name:'女士服装'  
	                        },  
	                        {  
	                            name:'青年服装'  
	                        }  
	                    ]  
	                }  
	            ],
	            itemsState:[]
            }  
        },  
        methods:{  
            showToggle:function(i){  
                this.items[i].isSubShow = !this.items[i].isSubShow ;
                var states=this.itemsState; 
             	this.$set(states,i,!states[i]); 
             	for(var a in this.itemsState){ 
                 	if(a!=i){ 
                    	this.$set(states,a,false); 
                	} 
             	} 
            }  
        }  
	}
</script>
<style lang="less" scoped>
	*{  
        padding: 0;  
        margin: 0;  
        font-size: 14px;  
    } 
    .order{
        ul{
            width: 200px;  
            height: auto;
            li{
                list-style-type: none;
                h2{
                    background: green;  
                    border: 1px solid #fff;  
                    color: #fff;  
                    height: 30px;  
                    line-height: 30px;  
                    text-indent: 24px; 
                }
                ul{
                    li{
                        h3{
                            background: #999;  
                            height: 24px;  
                            line-height: 24px;  
                            border: 1px solid #fff;  
                            text-indent: 50px;  
                        }
                    }
                }
            }
        }
    }
</style>