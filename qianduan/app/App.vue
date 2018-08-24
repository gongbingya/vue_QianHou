<template>
	<div>
		<h1>hello</h1>
		<h2>{{$store.state.counterStore.a}}</h2>
		<button @click="add">按我加一</button>
		<button @click="addServer">按我加服务器的数据</button>
		<hr/>
		<Haha :a="$store.state.counterStore.a"></Haha>
	</div>
</template>

<script>
	import Haha from "./components/Haha.vue";
	export default{
		methods : {
			add(){
				this.$store.commit("counterStore/add",{"a" : 1})
			},
			addServer(){
				this.$store.dispatch("counterStore/addServer");
			}
		},
		components:{
			Haha
		}
	}
</script>