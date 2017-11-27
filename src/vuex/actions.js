import { Toast } from 'mint-ui';
import axios from 'axios'
export default {
    login({commit},params){
        axios.get('/dy/users/login.do',{params}).then((res)=>{
            console.log(res)
            if(res.data.username){
                console.log(res.data)
                commit("changeUserInfo",res.data)
            }else{
                Toast({
                    message: '登录失败',
                    iconClass: 'icon icon-success'
                });
            }
        })
    }
}



