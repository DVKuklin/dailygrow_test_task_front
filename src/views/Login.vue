<template>
    <div class="main-form mx-auto form mt-4">
        <div class="form-group">
            <label class="form-label">Логин</label>
            <input type="text" class="form-control" v-model="login">
        </div>
        <div class="form-group">
            <label class="form-label">Пароль</label>
            <input type="password" class="form-control" v-model="password">
        </div>
        <div class="text-danger my-2" v-if="fail_message">
            {{ fail_message }}
        </div>
        <div class="text-success my-2" v-if="success_message">
            {{ success_message }}
        </div>
        <button class="btn btn-primary" @click="loginClick">Войти</button>
    </div>
</template>

<script>
import axios from 'axios';
import {baseUrlApi} from '../services/config.js';

export default {
    data() {
		return {
			login: '',
			password: '',
            fail_message: '',
            success_message: '',
		};
	},
    methods: {
        loginClick() {
            axios
                .post(baseUrlApi+'/login',{
                    "login": this.login,
                    "password": this.password,
                })
                .then(response => { 
                    if (response.data.status=='success') {
                        this.$store.commit('appState/setIsLogged',true);
                        this.success_message = response.data.message;
                        this.fail_message = '';
                        localStorage.setItem('token',response.data.token);
                        this.$store.commit('appState/setIsLogged',true);
                        this.$store.commit('appState/setLogin',response.data.login);
                    } else {
                        this.fail_message=response.data.message;
                        this.success_message = '';
                        this.$store.commit('appState/setIsLogged',false);
                        this.$store.commit('appState/setLogin','');
                    }
                    // console.log(response.data);
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        this.$store.commit('appState/setIsLogged',false);
                        localStorage.removeItem('token');
                    }
                    // console.log(error.response);
                });
        }
    }
}
</script>

<style lang="less" scoped>
    .form{
        max-width: 800px;
    }

</style>