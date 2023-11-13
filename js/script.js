const { createApp } = Vue; 

const app = createApp({
    data() {
        return {
            title: "This is my first title",
            imgVueSrc: "img/cat.jpg"
        }
    },
    methods(){

    }
}); 

app.mount("#app");

