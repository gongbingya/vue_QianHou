const export = require("express");
const app = express();

app.get("/api",(req,res)=>{
	res.json({"a" : 200});
});

app.listen(3000);