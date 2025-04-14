const prev_icon = document.querySelector(".prev");
const next_icon = document.querySelector(".next");
const month_year = document.querySelector(".month-year");
const calendar_conatiner = document.querySelector(".calendar-conatiner");
const close_form_btn = document.querySelector(".fa-xmark");
const form_add_bnt = document.querySelector(".add-btn");
const go_today_btn = document.querySelector(".btn-go-today");
const dateInput = document.querySelector(".goto");
const search_icon = document.querySelector(".search-icon");
const view_icon = document.querySelectorAll(".fa-view");
let prev_next_loaded = false;
const popup_container = document.querySelector(".popup-container");
const btn_cancel = document.querySelector(".btn-cancel");
const btn_delete = document.querySelector(".btn-del");



const form_body = document.querySelector(".add-new");
let isloaded = false;

dateInput.disabled = true;


let draggedEvent = null;


let people = [
    "Kamaljit S Bawa", "Atul Joshi", "Balaram", "Amita Baviskar", "Pheroza J. Godrej", "R Prabhakar",
    "Amrik S. Gill", "KN Ganeshaiah", "R. Uma Shankar", "Nithin Kamath", "Aravind N.A.", "Anushree Jadav",
    "G. Ravikanth", "Deepthi R Shastry", "Anuja Malhotra", "Nobin Raja", "Milind Bunyan", "Abi Tamim Vanak",
    "Asmita Sengupta", "T. Ganesh", "Eklabya Sharma", "Priyadarsanan Dharma Rajan", "Saloni Bhatia",
    "Manan Bhan", "Priyanka Jamwal", "R. Ganesan", "Rajkamal Goswami", "Sarala Khaling", "Seshadri K. S.",
    "Sharachchandra Lele", "Shrinivas Badiger", "Siddappa Setty R.", "Siddhartha Krishnan",
    "M Soubadra Devy", "Gita Sen", "Ravi Venkatesan", "Sandeep Singhal", "Darshan Shankar",
    "Rahul Matthan", "Rohini Nilekani", "Vamsidhar Pothula", "Anita Arjundas", "Navroz K. Dubash",
    "NC Narayanan", "Paul Robbins", "Robin L Chazdon", "Ruth de Fries", "Sudhir Chella Rajan",
    "Tamara Ticktin", "Upmanu Lall", "VijayRaghavan", "Raj Khoshoo", "Ranjit Barthakur",
    "S.V. Ranganath", "Manasi Tata", "Shruti Shibulal", "Manoj Kumar", "Abhijit Dey",
    "Anirban Roy", "Anjan Katna", "Abhisikta Roy", "Amritha Yadav", "Amruta Pradhan", "Aneesh C.R",
    "Anoop N.R", "Anuja Anil Date", "Arjun Kannan", "Biswa Bhusana Mahapatra", "Chetan Misher",
    "Chitra Lakhera", "Deeke Doma Tamang", "Femi E Benny", "Iravatee Majgaonkar", "Jintu S Vijayan",
    "Jyoti Nair", "Kadambari Deshpande", "Kesang Bhutia", "Lakshmikantha N.R", "Madhushri Mudke",
    "Nabasmita Malakar", "Nipu Kumar Das", "Nita Shashidharan", "Prachi Kardam", "Priya Ranganathan",
    "Ramya Ravi", "Rashmi Kulranjan", "Rashmi Mahajan", "Roshni Kutty", "Sahiti Sanaka", "Sarika",
    "Shruti Samanta", "Sminu T V", "Sneha Shahi", "Sri Ranjni T S", "Sumita Bhattacharyya",
    "Yogesh M Bangal", "K. D. Singh", "K.R. Shivanna", "Mahesh Rangarajan", "Romulus Earl Whitaker",
    "Ricky Kej", "Sandesh Kadur", "Aakansha Gupta", "Abhijeet Kulkarni", "Aditya Ganesh",
    "Aditya Pradhan", "Anamika Menon", "Ananda Siddhartha", "ATREE", "Anushka Gurung",
    "Anushree Jadhav", "Avantika Thapa", "Chetan Toliya", "Chethana Casiker", "Chinta Sidharthan",
    "Dipanwita Dutta", "Divya Srinivasan", "Gautam Aredath", "Gowri UN", "Hymavathi P", "Irfan Shakeer",
    "Ishwaryalakshmi M", "Jagdish Kumar B", "Jaya Peter", "Kailash BR", "Kedaravindan Bhaskar",
    "Keerthana R", "Kimbhegowda", "Kishore Sharma", "Lakshmi Raveendran", "Mathivanan M",
    "Madegowda.C", "Maneeja Murali", "Maria Antony P", "Monika K", "Monsoon Jyoti Gogoi",
    "Mujeeb Rahman", "Namrata Tiwari", "Sudha Iyer", "Namratha Murali", "Nilanjan Mukherjee",
    "Niranjana C", "Nivedita A", "Pallavi Varma Patil", "Pavan Kumar Thunga", "Pema Yangden Lepcha",
    "Pradeep Satpute", "Prathama S Gavai", "Prathamesh S Amberkar", "Rakesh", "Ranjith AP",
    "Reema Anand", "Sanjana Nair", "Saravanan A", "Seena N. Karimbumkara", "Shruti Mokashi",
    "Sreekuttan V N", "Sriram Ravichandran", "Sunil GM", "Sunita Pradhan", "Surya Narayanan",
    "Thalavaipandi S", "Thamizhazhagan S", "Thanigaivel Annamalai", "Vardhini Suresh",
    "Venkat Ramanujam", "Madhavi Latha", "Ankila Hiremath", "Bejoy K Thomas", "Durba Biswas",
    "Ghazala Shahabuddin", "Gladwin Joseph", "Jagdish Krishnaswamy", "Joydeep Bhattacharjee",
    "Kiran Asher", "Veena Srinivasan", "Rinzi Lama", "Teerath Rawat", "Obaiah B", "Tanvi Agrawal",
    "Thangsuanlian Naulak", "Harisha RP", "Jojo T.D", "Usha H", "Indrani Ravi", "Sujata Seshan",
    "Parvathy Sundar", "S. Natesh", "Sahanashree R", "Prasanna N S", "Sachin Tiwale",
    "Ujjvala Krishna", "Sailendra Dewan", "Anubhav Shori"
];
form_body.style.visibility = "hidden";







//const get_date_url = "https://script.google.com/macros/s/AKfycbyD8FKevDYdA-DbbBgN_7vrLp7ARCjJTS3ODRXCeNFkSz1dYz7OzVKsH5DVlL4LIMyE/exec";





let today_d = new Date();
let month = today_d.getMonth();
let year = today_d.getFullYear();
const monthsArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let dayArray = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];
let eventArray = [{}];

let shimmer = "";

for (let i = 0; i < 10; i++) {
    shimmer += `<div class="shimmer-wrapper">
    <div class="shimmer"></div>
  </div>`;
}
calendar_conatiner.innerHTML = shimmer;



//fetch_data();



function fetch_data() {
    showToast("Refreshing...");
    fetch(get_date_url)
        .then(response => response.json())
        .then(data => {
            eventArray = data;
            initCalendar();
            add_click_events();


        })




}

function initCalendar() {
    let c_date="";


    let month_txt = monthsArray[month];
    console.log("initilaizing caledar for " + month_txt);

    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let first_day = new Date(year, month, 1).getDay();

    let today_day = new Date().getDate();
    let today_month = new Date().getMonth();
    let today_year = new Date().getFullYear();

    

    let days = "";

    for (let i = 1; i <= daysInMonth; i++) {


        dayArray = dayArray.concat(dayArray[i - 1]);
        console.log(month.length)

        if(month<9){
             c_date = `${i}/0${month + 1}/${year}`;
        }else{
            c_date = `${i}/${month + 1}/${year}`;
        }
        

        //var title=range_values[i][2];

        let c_event = "";
        let c_link = "";
        
         
        eventArray.forEach(obj => {
             console.log('cur= '+c_date+" || "+obj.date);
             if (obj.date && typeof obj.date === 'string') {
                let dateSplit = obj.date.split("/");
                let day=dateSplit[0];
                let month=dateSplit[1];
                let year=dateSplit[2]
                
             }
            
            if (obj.date === c_date) { 

                console.log(c_date)
                console.log(eventArray)

                if (obj.post.url.length > 1) {
                    c_link = `<a href="${obj.post.url}" target="_blank">
                                 <i class="fas fa-solid fa-eye fa-edit" data-itemid="view_${obj.post.key_id}"></i>
                                 </a>`
                }else{
                    c_link="";
                }
                // console.log('found');
                c_event += ` <div class="event" draggable="true" data-event-id="uniqueEventId${obj.post.custom_title}">
                                <div class="event-title">${obj.post.custom_title}</div>
                                <div class="event-desc">${obj.post.title}.</div>
                                <div class=item-options> 
                                <i class="fas fa-edit edit-icon" data-itemid=${obj.post.key_id}></i>
                                <i class="fas fa-trash delete-icon" data-itemid=${obj.post.key_id}></i>

                                ${c_link}
                                </div>
                            </div>`
            }
        });

        if (today_day === i && today_month === month && today_year === year) {


            days += `<div class="dates">
                <div class="day">
                    <div class="day-left active">
                        <div class="day-title">${dayArray[first_day + i - 1]}</div>
                        <div class="date-title">${i}</div>
                    </div>
                    <div class="day-right">
                        <div class="events" data-event-id=${i}/${month + 1}/${year}>
                            ${c_event}

                        </div>
                    </div>
                </div>
            </div>`
        } else {


            days += `<div class="dates">
                <div class="day">
                    <div class="day-left">
                        <div class="day-title">${dayArray[first_day + i - 1]}</div>
                        <div class="date-title">${i}</div>
                    </div>
                    <div class="day-right">
                        <div class="events" data-event-id=${i}/${month + 1}/${year}>
                             ${c_event}

                        </div>
                    </div>
                </div>
            </div>`

        }
        //  makeEventsDraggable();



    }


    calendar_conatiner.innerHTML = days;
    month_year.innerHTML = `${month_txt} ${year}`;

    // const scrollPosition = window.scrollY + targetRect.top - (window.innerHeight - targetRect.height);

    let active_day = document.querySelectorAll(".active");
    if (active_day.length > 0 && !isloaded) {
        document.querySelectorAll(".day-title")[today_d.getDate()].scrollIntoView({ behavior: "smooth", block: "end" });
    }
    isloaded = true;




}
function handle_static_element_events() {

    prev_next_loaded = true;
    prev_icon.addEventListener("click", () => {
        let eventloaded = true;
        console.log("prev_btn_clicked")
        console.log(month)
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        loadDB();

    });

    next_icon.addEventListener("click", () => {
        console.log("next_btn_clicked")
        console.log(month)
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }

        loadDB();

    });

    go_today_btn.addEventListener("click", () => {
        let td = new Date();
        month = td.getMonth();
        year = td.getFullYear();
        isloaded = false;

        initCalendar();
    });

    close_form_btn.addEventListener("click", () => {
        form_body.style.visibility = "hidden";
        custom_title_box.style.visibility = "hidden";

    });
    form_add_bnt.addEventListener("click", () => {
        form_body.style.visibility = "visible";

    });

    dateInput.disabled = false;
    dateInput.addEventListener("input", (e) => {

        dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");

        if (dateInput.value.length === 2) {
            dateInput.value += "/";
        }

        if (dateInput.value.length > 7) {
            dateInput.value = dateInput.value.slice(0, 7);
        }
        if (e.inputType === "deleteContentBackward") {
            if (dateInput.value.length === 3) {
                dateInput.value = dateInput.value.slice(0, 2);
            }
        }
    });

    search_icon.addEventListener("click", () => {
        let input_date = dateInput.value;
        if (input_date.length > 6) {
            let d = input_date.split("/");
            let m = d[0];
            if (m > 0 && m < 13) {
                month = m - 1;
                year = d[1];
                loadDB();
            } else {
                showToast("Invalid Date");
            }
        } else {
            showToast("Invalid date format");
        }
        dateInput.value = "";
    });
}

function add_click_events() {

    if (!prev_next_loaded) {
        handle_static_element_events();
    }


    const event_titles = document.querySelectorAll(".event-title");
    event_titles.forEach(event_title => {
        event_title.addEventListener("click", () => {

            let post_name = event_title.innerHTML;
            console.log(post_name);
            console.log(eventArray);
            let postWithTitle = eventArray.find(p => p.post && p.post.custom_title === post_name);
            console.log(postWithTitle);
            let postUrl = postWithTitle.post.url;
            console.log(postUrl);
            if (postUrl.includes("http")) {
                window.open(postUrl, '_blank');
            } else {
                showToast("No Url Found");
            }
        });

    });


    const edit_icons = document.querySelectorAll(".edit-icon");
    edit_icons.forEach(edit_icon => {
        edit_icon.addEventListener("click", () => {
            let item_id = edit_icon.getAttribute("data-itemid");

            console.log("ready to edit: " + item_id);

        })
    });


    const delete_icons = document.querySelectorAll(".fa-trash");
    delete_icons.forEach(delete_icon => {
        delete_icon.addEventListener("click", () => {

            let item_id = delete_icon.getAttribute("data-itemid");
            console.log("delete " + item_id);
            show_delete_cnf_popup(item_id);

        });

    });

    // date_27.forEach(date=>{
    //     date.addEventListener("click",()=>{
    //         console.log(date.innerHTML)
    //         if(date.innerHTML==="27"){
    //            let rf= firebase.database().ref("posts")
    //             rf.forEach(key=>{
    //                 if(rf[key].date==="27/10/2024"){
    //                     rf.push({
    //                         date: "27/10/2024",
    //                         category: "e.post.category",
    //                         title: "e.post.title",
    //                         platform: "e.post.platform",
    //                         url: "e.post.url",
    //                         description: "e.post.description",
    //                         mention: "e.post.mention",
    //                         img_url: "e.post.img_url",
    //                         remarks: "e.post.remarks",
    //                         sm: "e.post.sm",
    //                         custom_title: "e.post.custom_title"
    //                     })
    //                 }

    //             })


    //         }
    //     })

    // })

    // makeEventsDraggable();


}
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.classList.add("show");

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

function show_delete_cnf_popup(item_id) {
    console.log("showing popup")
    popup_container.style.visibility = "visible";

    btn_delete.addEventListener("click",()=>{
        delete_item(item_id);
    });
    btn_delete.removeEventListener("click",()=>{})

    btn_cancel.addEventListener("click",()=>{
        popup_container.style.visibility = "hidden";
    });
    btn_cancel.removeEventListener("click",()=>{})


    
    


}
function delete_item(itemid) {
    let item = firebase.database().ref(`posts/${itemid}`);
    item.remove()
        .then(() => {
            popup_container.style.visibility = "hidden";
            loadDB();
            showToast("Item removed")
        }).catch(error => {
            showToast(error);
        })
}

function makeEventsDraggable() {
    console.log("dragging");
    let selected = null;
    const event_containers = document.querySelectorAll(".events");  // Assuming "events" is a class name for draggable events
    const day_right = document.querySelectorAll(".day-right");      // Assuming "day-right" is a class name for drop zones

    // Add dragstart listener to each draggable event
    event_containers.forEach(event => {
        event.setAttribute("draggable", "true"); // Make the event draggable if it's not already
        event.addEventListener("dragstart", (e) => {
            selected = e.target; // Set the selected element
        });
    });

    // Add dragover and drop listeners to each drop zone
    day_right.forEach(dr => {
        dr.addEventListener("dragover", (e) => {
            e.preventDefault(); // Allow dropping
        });

        dr.addEventListener("drop", (e) => {
            e.preventDefault(); // Prevent default behavior
            if (selected) {
                if (selected && e.target.classList.contains("events")) {
                    e.target.appendChild(selected);
                    let selected_title = selected.querySelector(".event-title").innerHTML;
                    let target_date = e.target.getAttribute("data-event-id");

                    console.log("droppped");




                    update_db(selected_title, target_date);
                    const editIcon = selected.querySelector(".edit-icon");
                    if (editIcon) {
                        editIcon.setAttribute("data-itemid", target_date);
                    }
                    selected = null;


                }
            }
        });
    });

    event_containers.forEach(event => {
        event.setAttribute("draggable", "true"); // Make the event draggable
        event.addEventListener("dragstart", (e) => {
            selected = e.target; // Set the selected element
            console.log("Dragging started on desktop");
        });

        // Mobile drag (touchstart) listener
        //     event.addEventListener("touchstart", (e) => {
        //         const touch = e.touches[0];
        //         selected = e.target; // Set the selected element
        //         selected.style.position = "absolute";
        //         selected.style.zIndex = "1000";
        //         selected.offsetX = touch.clientX - selected.getBoundingClientRect().left;
        //         selected.offsetY = touch.clientY - selected.getBoundingClientRect().top;
        //         console.log("Dragging started on mobile");
        //     });

        //     // Move the selected element on touchmove
        //     event.addEventListener("touchmove", (e) => {
        //         if (!selected) return;
        //         e.preventDefault(); // Prevent scrolling while dragging

        //         const touch = e.touches[0];
        //         selected.style.left = `${touch.clientX - selected.offsetX}px`;
        //         selected.style.top = `${touch.clientY - selected.offsetY}px`;
        //     });

        //     // Drop functionality for mobile using touchend
        //     event.addEventListener("touchend", (e) => {
        //         if (!selected) return;

        //         const touch = e.changedTouches[0];
        //         selected.style.position = "";
        //         selected.style.zIndex = "";

        //         // Identify the drop target using elementFromPoint
        //         const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY).closest(".day-right");

        //         if (dropTarget) {
        //             dropTarget.appendChild(selected); // Append selected to the drop target
        //             let selected_title = selected.querySelector(".event-title").innerHTML;
        //             let target_date = dropTarget.getAttribute("data-event-id");

        //            // update_db(selected_title, target_date);
        //             console.log("Dropped on mobile");
        //         }

        //         selected = null; // Reset the selected element
        //     });
    });

};





firebase.database().ref("posts").on("value", snapshot => {
    const dbd = snapshot.val();
    if (dbd) {


        console.log(dbd);
    } else {
        console.log("No data found in 'posts' path.");
    }
}, error => {
    console.error("Error reading data:", error);
});

function update_db(selected_title, target_date) {
    console.log("writng db");
    var ref_db = firebase.database().ref("posts");

    ref_db.get().then(snapshot => {
        let data = snapshot.val();
        for (key in data) {
            if (data[key].custom_title === selected_title) {
                let original_data = data[key];

                let targetdatesplit=target_date.split('/');
                let targetsplit_m=targetdatesplit[1];
                if (targetsplit_m < 10 ) {
                    original_data.date = `${targetdatesplit[0]}/0${targetdatesplit[1]}/${targetdatesplit[2]}`
                }else{
                    original_data.date = target_date;
                }
                    

                
                

                ref_db.push(original_data).then(
                    () => {
                        return ref_db.child(key).remove();
                    }
                )
                    .then(() => {

                    }).catch(error => {
                        console.log(error)

                    });
                //initCalendar();
                // add_click_events();
                return;



                //ref_db.push(data[key].val())
            }


        }

    })



}