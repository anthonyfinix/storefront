const User = require("./modal");
module.exports = async (userId)=>{
    try{
        let user = await User.deleteOne({ _id: userId });
        return { message: "user delete", result: user };
      }catch(e){
        return { error: e.message };
      }
}