const { createApp } = Vue;

createApp({
    data(){
        return {
            
            randomEmail : []

        }
    },
    methods : {

    },
    mounted() {

        for(let i = 0; i < 10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {

                let newEmail = res.data.response;
                this.randomEmail.push(newEmail);

            })
        }
        console.log(this.randomEmail)

    }
}).mount('#app')