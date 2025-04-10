console.log("running form")
const tag_mention = document.getElementById("tags");
const tag_input_box = document.querySelector(".tags-input-box");
const tag_tems_container = document.querySelector(".tag-items");
const date_box = document.querySelector(".date_input");
const title_box = document.querySelector(".title");
const platform_box = document.querySelector(".platform");
const category_selector = document.getElementById("category");
const url_box = document.querySelector(".input_link");
const img_url_box = document.querySelector(".input_imgUrl");
const description_box = document.querySelector(".input_desc");
const mention_box = document.querySelector(".input-container");
let mentionsArray = [];
let mentionskeyArray = [];
const remark_box = document.querySelector(".remarks");
const sm_checkbox = document.getElementById("input_checkBox_SM");
const sheet_checkbox = document.getElementById("input_checkBox_sheet");
const custom_title_box = document.querySelector(".custom-title");
const sumbit_btn = document.querySelector(".btn-submit");
const baseUrl = "https://script.google.com/macros/s/AKfycbzQv0oxAnSlRgopSeS_85XQ6eY7cKiCFepklNJUPtmSPsF_FtYpXjvIh7P9iHfZ55Yezg/exec?"


let people_mentioed = [];
let peoples = [
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

const platforms = [
    "The Hindu", "Hindustan Times", "Times of India", "The Indian Express", "The Economic Times",
    "Business Standard", "Financial Express", "Mint", "Deccan Herald", "The Telegraph",
    "India Today", "NDTV", "News18", "Zee News", "The Print", "The Wire", "Scroll.in",
    "The Quint", "Firstpost", "Outlook India", "The Week", "The Sunday Guardian",
    "Down To Earth", "Mongabay India", "Round Glass Sustain", "ATREE Website",
    "The Caravan", "Newslaundry", "Frontline", "Swarajya", "EPW (Economic and Political Weekly)",
    "Moneycontrol", "CNBCTV18", "Business Today", "BW Businessworld",
    "The Ken", "Factor Daily", "TechCircle", "Medianama",
    "Science Reporter", "Current Science", "India Science Wire",
    "Vigyan Prasar", "The Better India", "Youth Ki Awaaz",
    "Dainik Jagran", "Amar Ujala", "Hindu Tamil", "Ananda Bazar Patrika",
    "Eenadu", "Sakshi", "Malayala Manorama", "Mathrubhumi", "Dinamalar",
    "Dinamani", "Vikatan", "Pudhari", "Deshbandhu", "Gaon Connection",
    "Bangalore Mirror", "Mumbai Mirror", "Goa Chronicle", "The New Indian Express","The Times of India"
];

const platfoemlist=document.getElementById('platforms')

platforms.forEach((platform)=>{
    let option=document.createElement('option');
    option.value=platform;
    platfoemlist.append(option)
})

custom_title_box.style.visibility = "hidden";


let is_sm = false;
let is_sheet = true;

let date, title, platform, category, url, img_url, description, remarks, custom_title = "";

my_firebase.database().ref("posts").once
set_mentions(people);

sm_checkbox.addEventListener('change', () => {
    if (sm_checkbox.checked) {
        custom_title_box.style.visibility = "visible";
    } else {
        custom_title_box.style.visibility = "hidden";
    }
});

function set_mentions(peoples) {
    let mentions = '';
    i = 0;
    people.forEach(obj => {

        mentions += `<option value="${obj}"></option>`
        i++;

    })
    tag_mention.innerHTML = mentions;

    // new MultiSelectTag('countries', {
    //     rounded: true,    // default true
    //     shadow: true,
    //           // default false
    //     placeholder: 'Search',  // default Search...
    //     tagColor: {
    //         textColor: '#327b2c',
    //         borderColor: '#bfffbf',
    //         bgColor: '#eaffe6',
    //     },
    //     onChange: function (values) {
    //         people_mentioed = [];
    //         people_mentioed.push(values.map(val => val.label))

    //         console.log(people_mentioed)

    //     },

    //     onSearchKeyUp: function(event, inputElement) {
    //         if (event.key === 'Enter') {
    //             const inputValue = inputElement.value.trim();

    //             // Check if the input value is non-empty and not already in the predefined list
    //             if (inputValue && !this.tags.includes(inputValue)) {
    //                 // Add new tag dynamically
    //                 this.addTag(inputValue); // This method will add the new tag

    //                 // Optionally, you can add this new value directly to your array
    //                 let people_mentioed = [];
    //                 people_mentioed.push(inputValue);
    //                 console.log('New tag added:', inputValue);
    //                 console.log('Updated people_mentioed:', people_mentioed);
    //             }
    //         }
    //     }
    // });
    tag_input_box.addEventListener('keyup', (e) => {
        console.log("keyup found= " + e)
        if (e.key === "Enter" && tag_input_box.value.trim() !== "") {
            let tag_value = tag_input_box.value.trim();
            tag_tems_container.innerHTML = tag_tems_container.innerHTML + `<div class="item item${tag_value.replace(" ", "_")}" id=item${tag_value.replace(" ", "_")}>
                                <div class="">${tag_value}</div>
                                <div class="x_btn x_btn_${tag_value}" data-tag=item${tag_value.replace(" ", "_")}>x</div>
                            </div>`

            mentionsArray.push(tag_value);
            mentionskeyArray.push(`item${tag_value.replace(" ", "_")}`);
            tag_input_box.value = "";

        }
    });
    const tag_container = document.querySelector(".tag-items");



    tag_container.addEventListener('click', (e) => {
        console.log("clicking on tag")
        var item_class = e.target.getAttribute('data-tag');
        console.log(item_class);
        document.getElementById(`${item_class}`).remove();
        let index=mentionskeyArray.indexOf(item_class);
        
        mentionsArray.splice(index,1)

        console.log(mentionsArray)



    })



}

sumbit_btn.addEventListener("click", () => {


    if (isvalid()) {
        sumbit_btn.disabled = true;
        sumbit_btn.style.backgroundColor = "grey";
        sumbit_btn.innerHTML = "sending...";
        let datearray = date_box.value.split("-");
        let year = datearray[0];
        let month = datearray[1];
        let day = datearray[2].replace(/^0+/, "");;
        date = `${day}/${month}/${year}`;

        title = encodeURIComponent( title_box.value.trim());
        platform = encodeURIComponent(platform_box.value.trim());
        
        category = encodeURIComponent(category_selector.value.trim());
        url = encodeURIComponent(url_box.value.trim());
        img_url = encodeURIComponent( img_url_box.value.trim());
        description =encodeURIComponent (description_box.value.trim());
        remarks = encodeURIComponent(remark_box.value.trim());
        custom_title = encodeURIComponent(custom_title_box.value.trim());

        if (is_sm) {
            send_to_firebase();
        }
        if (is_sheet) {
            send_to_sheet();
        }


        loadDB();
       


    }

});

function send_to_firebase() {
    title =  title_box.value.trim()
        platform = platform_box.value.trim()
        
        category = category_selector.value.trim()
        url =url_box.value.trim()
        img_url =  img_url_box.value.trim();
        description =description_box.value.trim();
        remarks = remark_box.value.trim();
        custom_title =(custom_title_box.value.trim());

    console.log("sending to firebase");



    const databaseRef = my_firebase.database().ref("posts");
    console.log("Connected to firebase");

    // Example: Fetching data
    databaseRef.push({
        date: date,
        category: category,
        title: title,
        platform: platform,
        url: url,
        description: description,
        mention: mentionsArray.join(", "),
        img_url: img_url,
        remarks: remarks,
        sm: is_sm,
        custom_title: custom_title
    }).then(() => {
        loadDB();
        showToast("Success"); 
         clearForm();

    }).catch((error) => {
        console.error("Error: ", error);
    });


}
function send_to_sheet() {
    //date,	cat,	title, 	platform,	url,	desc,	mentions,	img_url
    console.log("sending to sheet");
    sumbit_btn.innerHTML = "Sending...";

    var mention = mentionsArray.join(", ");

    console.log("mention= " + mention);
    console.log(mention.split("").map(c => c.charCodeAt(0)));
    // console.log("mention= "+mention);
    var parameters = `date=${date}&&cat=${category}&&title=${title}&&platform=${platform}&&url=${url}&&desc=${description}&&mention=${mention}&&img_url=${img_url}&&remarks=${remarks}`

    console.log("url= " + baseUrl + parameters);
    fetch(baseUrl + parameters).then(response => {
        
      
        return response.text()

    }).then(data => {
        showToast(data.toString()); 
         clearForm();
    })
}

function clearForm() {
    date_box.value = "";
    title_box.value = "";
    platform_box.value = "";
    url_box.value = "";
    img_url_box.value = "";
    description_box.value = "";
    remark_box.value = "";
    custom_title_box.value = "";
    tag_tems_container.innerHTML="";
    mentionsArray=[];

    const selectedItems = document.querySelectorAll('.item-container');
    const checkboxes = document.querySelectorAll('.drawer .input_checkbox');

    // Remove all selected tags
    selectedItems.forEach(item => item.remove());

    // Uncheck all checkboxes in the drawer
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    sumbit_btn.disabled = false;
    sumbit_btn.style.backgroundColor = "";
    sumbit_btn.innerHTML = "Submit";

}

function isvalid() {
    console.log(title_box.value.trim());
    if (title_box.value.trim() === "D++") {
        makeEventsDraggable();
        showToast("Dragging Enabled")
    }


    if (date_box.value.toString().length < 1) {
        date_box.style.border = "1px solid red"
        return false;
    } else {
        date_box.style.border = "";
    }

    if (title_box.value.toString().length < 1) {
        title_box.style.border = "1px solid red"
        return false;
    } else {


        title_box.style.border = "";
    }



    if (category_selector.textContent.toString().length < 1) {
        category_selector.style.border = "1px solid red"
        return false;
    } else {
        category_selector.style.border = "";
    }

    is_sm = sm_checkbox.checked;
    is_sheet = sheet_checkbox.checked;

    if(!is_sm && !is_sheet){
        showToast("choose any sheet/SM");
        sm_checkbox.style.outline="1px solid red";
        sheet_checkbox.style.outline="1px solid red";
        return false;
    }
    sm_checkbox.style.outline="";
    sheet_checkbox.style.outline="";

    if (is_sm) {

        if (custom_title_box.value.toString().length < 1) {
            custom_title_box.style.border = "1px solid red"
            return false;
        }
        else {
            custom_title_box.style.visibility = "visible";
            custom_title_box.style.border = "";
        }
    }

    return true;

}




