
import axios from "./axios.js";


const getUserInfo=(params)=>{
	axios.get("/userInfo",params).then(res=>{
		console.log(res)
	}).catch(err=>{
		console.log(err)
	});
};

export default{
	getUserInfo
}