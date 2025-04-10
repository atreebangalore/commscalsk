//const get_date_url = "https://script.google.com/macros/s/AKfycbyD8FKevDYdA-DbbBgN_7vrLp7ARCjJTS3ODRXCeNFkSz1dYz7OzVKsH5DVlL4LIMyE/exec";
let result = [{}];


const firebaseConfig = {
    apiKey: "AIzaSyDs42fhJf_TYUi0c5X6ilgKXig81nB-K54",
    authDomain: "commscalendar-41636.firebaseapp.com",
    databaseURL: "https://commscalendar-41636-default-rtdb.firebaseio.com",
    projectId: "commscalendar-41636",
    storageBucket: "commscalendar-41636.appspot.com",
    messagingSenderId: "71763795023",
    appId: "1:71763795023:web:4eb24e8e67b7bf974b5e3a"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.my_firebase = firebase;
console.log('db');
loadDB();
// Access the database and use `ref` correctly
//const dbRef = firebase.database().ref("date");

// Example usage: setting data
// dbRef.set({

// }).then(() => {

// }).catch((error) => {
//     console.error("Error writing data: ", error);
// });

function fetch_data() {


    fetch(get_date_url)
        .then(response => response.json())
        .then(data => {
            result = data;

            result.forEach(e => {
               

                var db_ref = firebase.database().ref("posts");
                db_ref.push({
                    date: e.date,
                    category: e.post.category,
                    title: e.post.title,
                    platform: e.post.platform,
                    url: e.post.url,
                    description: e.post.description,
                    mention: e.post.mention,
                    img_url: e.post.img_url,
                    remarks: e.post.remarks,
                    sm: e.post.sm,
                    custom_title: e.post.custom_title
                })
            });
            


        });



}
//fetch_data();
function loadDB(){
    eventArray=[];
let db_ref2 = firebase.database().ref('posts');
db_ref2.get()
    .then(snapshot => {
        if (snapshot.exists()) {

            let db_data = snapshot.val();
            for (let key in db_data) {

                eventArray.push({date: db_data[key].date,
                    post:{
                    description: db_data[key].description,
                    img_url: db_data[key].img_url,
                    mention: db_data[key].mention,
                    platform: db_data[key].platform,
                    remarks: db_data[key].remarks,
                    url:db_data[key].url,
                    title:db_data[key].title,
                    sm:db_data[key].sm,
                    custom_title:db_data[key].custom_title,
                    key_id:key

                }});

            }
            initCalendar();
            add_click_events();


        }
    })
    .catch(error => {
        console.log(error);

    });
}