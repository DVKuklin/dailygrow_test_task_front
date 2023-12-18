<template>
    <h3 class="text-center pt-4">Аналитика</h3>
    <div class="table-container">
        <table class="table">
        <tr>
            <th>Название канала</th>
            <th>Заявки</th>
            <th>Конверсия в продажи</th>
            <th>Продажи</th>
            <th>Выручка</th>
            <th>Средний чек</th>
            <th>Прибыль</th>
        </tr>
        <tr v-for="(item, i) in table" :key="i">
            <td>{{ item.dailygrow }}</td>
            <td>{{ item.requests }}</td>
            <td>{{ item.conversion_to_sales }}%</td>
            <td>{{ item.sales }}</td>
            <td>{{ item.total_sum }}</td>
            <td>{{ item.average_check }}</td>
            <td>{{ item.profit }}</td>
        </tr>
    </table>
    </div>

</template>

<script>
import axios from 'axios';
import {baseUrlApi} from '../services/config.js';

export default {
    data() {
		return {
			table: [],
		};
	},
    created() {

        axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');
        axios
            .get(baseUrlApi+'/b24/get-analytics')
            .then(response => { 
                if (response.data.status=='success') {
                    this.table = response.data.data;
                }
                // console.log(response);
            })
            .catch(error => {
                if (error.response.status === 401) {
                  this.$router.push('/');
                }
            });
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.table-container {
    max-width: 100%;
    overflow-x:auto;
}
</style>