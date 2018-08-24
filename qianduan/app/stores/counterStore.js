export default{
	namespaced : true,
	state : {
		a : 1000
	},
	mutations : {
		add(state,{a}){
			state.a += a;
		}
	},
	actions : {
		//异步 获取服务器数据
		async addServer({commit}){
			const {a} = await fetch("/api/api").then(data => data.json());
			commit("add" , {a});
		}

	}
}