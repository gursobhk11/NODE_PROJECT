const express=require('express');
 const router=express.Router();  
   
   
   
   router.get("/", (req, res) =>{
    res.send("This is the home page!");
});

router.get("/abpout",(req, res)=>{
    res.send("This is the home page!");

});


module.exports = router;