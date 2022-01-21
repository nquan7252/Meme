let express=require('express');
let path=require('path');
let app=express();
const port=process.env.PORT||3000;
app.use(express.static(path.join(__dirname, "build")));
app.get('/',(req,res)=>{
 res.sendFile(path.resolve(__dirname, "build", "index.html"));
})
app.listen(port, () => console.log(`Server listening on port ${port}`));
