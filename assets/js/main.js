const app = Vue.createApp({

    created() {
        fetch("//raw.githubusercontent.com/nizamuddinquader/api-fetch-prctice/refs/heads/main/countries.json")
            .then(response => response.json())
            .then(data=>{this.countries=data})
    },
    data() {
        return {
            item:"", countries:[]
        }
    },
    computed:{
        filterdCountry(){
            return this.countries.filter((data)=>data.country.toLowerCase().startsWith(this.item.toLowerCase()));
        }
    }
});

app.mount("#app");
