
const students = [
    {
        id: 1,
        name: "Labhesh Tiwari          ",
        profileImage: "images/pfp.jpg",
        birthDate: new Date(2010, 3, 19),
        bio: "Student | Coder | Sports enthusiast | Learning, laughing, leveling up! 🚀.",
        rollNumber: 20,
        gender: "Male",
        funname: "Baccha",
        friends: ["Priyansh Dusad", "Dev Gupta", "Maulik Agarwal", "Lavin Singh" , "Ronak Soni" ,
             "Akshit Agarwal" , "Saksham Sharma" , "Ayush Kulhari " , "Jatin Choudhary","Aarnav","Yuvraj Sharma",
             "Amaad","Ayaan","Vedant Dadhich","Mrityunjay Kumawat","Rudra Pratap Singh "],
        skills: {
            Looks : 100,
            knowledge: 100,
            humor: 100,
            Creativity: 100,
            Sports: 100,
            // Overall Skill : (knowledge + humor + creativity + sports + looks) / 5
            // Overall :  humor + knowledge + Creativity + Sports + Looks / 5 ,
},
        hobbies: ["👩🏻‍💻Coding", "🏏Cricket","🏸Badminton","🤖AI","🎨Graphic Designing","🎵Music"],
        socialLinks: {
            instagram: "https://instagram.com/fr_labhesh",
            snapchat: "https://snapchat.com/labhesh_tiwari",
            x: "https://x.com/labhesh_tiwari"
        },
        contact: {
            area: "Banipark,Jaipur",
            phone: "+91 8005964259"
        },
        futureVision: "Billionaire?"
    },
    {
        id: 2,
        name: "Priyansh Dusad",
    profileImage: "images/priyansh.png",
        birthDate: new Date(2009, 8, 23),
        bio: "just another topper,friends to everone,loves australia",
        rollNumber: 31,
        gender: "Male",
        funname: "Charas Ganja",
        friends: ["Labhesh Tiwari", "Dev Gupta", "Maulik Agarwal", "Lavin Singh" , "Ronak Soni" ,
            "Akshit Agarwal" , "Saksham Sharma" , "Ayush Kulhari " , "Jatin Choudhary","Aarnav","Yuvraj Sharma","Vedant dadhich"],
        skills: {
            Looks : 9.1,
            knowledge: 9.2,
            humor: 9.9,
            Creativity: 7.9,
            Sports: 9.3,
        },
        hobbies: ["🎫Studying", "🏏Cricket", "🎶Musics "],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/priyanshdusad72",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Vidhyadhar Nagar",
            phone: "+91 98295 44539"
        },
        futureVision: "Leading his Buisness."
    },
    {
        id: 3 ,
        name: "Maulik Agarwal",
        profileImage: "images/m,.png",
        birthDate: new Date(2009, 5, 30),
        bio: "Loves doing art ",
        rollNumber: 24,
        gender: "Male",
        funname: "Pure Rajasthani",
        friends: ["Labhesh Tiwari", "Dev Gupta", "Tanish Jaiswal","Ankita Pal💕" , "Bhavleen Khatri","Priyansh Dusad","Lavin Singh"],
        skills: {
            Looks : 7.9,
            knowledge: 7.8,
            humor: 8.3,
            Creativity: 9.3,
            Sports: 8.8,
        },
        hobbies: ["🎨Painting", "🏏Cricket", ""],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/_maulik_31_",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Murlipura",
            phone: "+91 9876543210"
        },
        futureVision: "Mechanical Engineering"
    },
    {
        id: 4,
        name: "Dev Gupta",
        profileImage: "images/dev gupta.png",
        birthDate: new Date(2009, 10, 23),
        bio: "Wanna Be Designer",
        rollNumber: 11,
        gender: "Male",
        funname: "Kaala Korean👨🏿",
        friends: ["Labhesh Tiwari","Maulik Agarwal","Tanish Jaiswal","Bhavleen Khatri","Priyansh Dusad","Lakshna"],
        skills: {
            Looks : 9,
            knowledge: 8,
            humor: 8,
            Creativity: 10,
            Sports: 10,

        },
        hobbies: ["🎨Painitng", "🏀Basketball", "🖌Designing" , "👧🏻Ladkibaazi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/devsp.idey",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Goner",
            phone: "+91 9653855184"
        },
        futureVision: "Dominating the fashion industry."
    },
    {
        id: 5,
        name: "Lavin Singh",
        profileImage: "images/lavin.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Just Living🌗 , Loves to do Editing",
        rollNumber: 22,
        gender: "Male",
        funname: "Rohit Sharma Ka Beta ,Cringe Editor",
        friends: ["Labhesh Tiwari", "Jatin Choudhary", "Yuvraj Sharma","Priyansh Dusad","Maulik Agarwal","Ronak Soni"],
        skills: {
           Looks : 9,
            knowledge: 9,
            humor: 9,
            Creativity: 7,
            Sports: 9,
        },
        hobbies: ["📽Editing","🏏Cricket", "🎲Rubiks Cube", "🗺Geography","🎵Music"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/lavinrizzin",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Chandpole",
            phone: "+91 "
        },
        futureVision: "Top level Doctor."
    },
                {
        id: 6,
        name: "Ronak Soni",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Wanna be Sigma👿",
        rollNumber: 35,
        gender: "Male",
        funname: "Pinkyyy, Shawty ",
        friends: ["Labhesh Tiwari", "Priyansh Dusad", "Lavin Singh","Akshit Agarwal","Mrityunjay","Maulik Trivedi","Ayush"],
        skills: {
            Looks : 8,
            knowledge: 7,
            humor: 9,
            Creativity: 10,
            Sports: 8,
        },
        hobbies: ["🎥Editing", "⚽Football", "🏸Badminton",""],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/ronzone96",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Vidhyadhar Nagar",
            phone: "+91 9876543210"
        },
        futureVision: "Doing something creative"
    },
    {
        id: 7,
        name: "Akshit Agarwal",
        profileImage: "images/akshit.png",
        birthDate: new Date(2009, 2, 15),
        bio: "",
        rollNumber: 3,
        gender: "Male",
        funname: "Kaalu",
        friends: ["Labhesh Tiwari", "Ayush Kulhari", "Mrityunjay Kumawat","Saksham Sharma","Priyansh Dusad","Vedant Dadhich","Omkar jit singh"],
        skills: {
            Looks : 9,
            knowledge: 9,
            humor: 9,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["🏸Badminton", "🎵Music", "✈Travel"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/akshit_agarwal",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Shastri Nagar",
            phone: "+91 9876543210"
        },
        futureVision: "Buisness Man."
    },
    {
        id: 8,
        name: "Ayush kulhari",
        profileImage: "images/ayush.png",
        birthDate: new Date(2009, 4, 28),
        bio: "I AM JUST A RANDOM GUY WHO PLAYS GAMES ALL DAY....",
        rollNumber: 8,
        gender: "Male",
        funname: "Meetha ",
        friends: ["Labhesh Tiwari","Akshit Agarwal","Saksham Sharma","Mrityunjay Kumawat","Priyansh Dusad","Maulik Trivedi"],
        skills: {
            Looks : 8,
            knowledge: 8,
            humor: 10,
            Creativity: 7,
            Sports: 7.5,
        },
        hobbies: ["🎮Gaming", "⚽Football", "🗾Anime"],
        favoriteSubjects: ["Mathematics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/",
        },
        contact: {
            area: "Shastri Nagar,Jaipur",
            phone: "+91 9588220736"
        },
        futureVision: "PROBABLY GAMING IN MY ROOM."
    },
    {
        id: 9,
        name: "Saksham Sharma",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: " .",
        rollNumber: 36,
        gender: "Male",
        funname: "Chakka,Daulat sir ka beta",
        friends: ["Akshit agarawal ", "Ayush kulhari", "Mrityunjay Kumawat","Maulik trivedi","Labhesh tiwari","Priyansh Dusad"],
        skills: {
            Looks : 8.7,
            knowledge: 7.5,
            humor: 8.3,
            Creativity: 6,
            Sports: 9.2,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Chandpole",
            phone: "+91 9680196149"
        },
        futureVision: "Chandpole m kuch toh buisness sambhal lege."
    },
    {
        id: 10,
        name: "Mrityunjay kumawat",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 29,
        gender: "Male",
        funname: "Bhikshuk,African",
        friends: ["Akshit Agarwal", "Ayush Kulhari", "Saksham sharma","Labhesh Tiwari","Priyansh Dusad","Maulik Trivedi","Ronka Soni"],
        skills: {
            Looks : 8.3,
            knowledge: 9,
            humor: 7.8,
            Creativity: 6,
            Sports: 8,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Sindhi Camp",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 11,
        name: "Vedant Dadhich",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 42,
        gender: "Male",
        funname: "Diva jain,Britisher",
        friends: ["Labhesh Tiwari", "Priyansh Dusad", "Ronak soni"],
        skills: {
            Looks : 9,
            knowledge: 7,
            humor: 7,
            Creativity: 8,
            Sports: 8,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Jhotwara",
            phone: "+91 9876543210"
        },
        futureVision: "."
    },

    {
        id: 12,
        name: "Aarnav Choudhary",
        profileImage: "images/aarnav.png",
        birthDate: new Date(2009, 2, 15),
        bio: "I got enough cash , Baby💸💸.",
        rollNumber: 1,
        gender: "Male",
        funname: "Unevolved, Neanthedral man, Defender m lafander",
        friends: ["Labhesh Tiwari", "Robin Sood"],
        skills: {
            Looks : 7.5,
            knowledge: 7,
            humor: 7,
            Creativity: 7,
            Sports: 8,
        },
        hobbies: ["🏎Driving Cars","🔫Badmosi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/aarnav_0066",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Noida",
            phone: "+91 "
        },
        futureVision: "Chlling in some new cars"
    },

    {
        id: 13,
        name: "Jatin Choudhary",
        profileImage: "images/jatin.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring student a passion for physics.",
        rollNumber: 16,
        gender: "Male",
        funname: "Dahi",
        friends: ["Lavin Singh" ,"Priyansh Dusad", "Labhesh Tiwari",],
        skills: {
            Looks : 8.7,
            knowledge: 9.6,
            humor: 7.6,
            Creativity: 6.0,
            Sports: 8.1,
        },
        hobbies: ["🏫Learning", "➕Maths", "🏏Cricket"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Shastri Nagar",
            phone: "+91 "
        },
        futureVision: "JEE AND NEET🤓🤓."
    },

    {
        id: 14,
        name: "Yuvraj Sharma",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Topperrr.",
        rollNumber: 43,
        gender: "Male",
        funname: "Bjp dal k aadmi",
        friends: ["Priyansh Dusad", "Labhesh Tiwari", "Lavin Singh"],
        skills: {
            Looks : 8.8,
            knowledge: 11,
            humor:9.4 ,
            Creativity: 9.4,
            Sports: 3,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Jhotwara",
            phone: "+91 9876543210"
        },
        futureVision: "Scientist."
    },

    {
        id: 15,
        name: "Ankita Pal",
        profileImage: "images/ankita.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Topper girl",
        rollNumber: 5,
        gender: "Female",
        funname: "Kaala Jadu💀",
        friends: ["Maulik Agarwal",],
        skills: {
            Looks : 7,
            knowledge: 9.5,
            humor: 8,
            Creativity: 8,
            Sports: 8,
        },
        hobbies: ["🎨Painting", "📝Writing", "📚Reading"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/an_nikiiiitaa_a",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Banipark",
            phone: "+91 9876543210"
        },
        futureVision: "A successful doctor"
    },

    {
        id: 16,
        name: "Mohamad Irshad",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 27,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 17,
        name: "Mohamad Fahad",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 26,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 18,
        name: "Mohamad Ayaan",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 25,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 19,
        name: "Omkar Jit Singh",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 30,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 20,
        name: "Rudra Pratap Singh",
        profileImage: "images/rudra.png",
        birthDate: new Date(2008, 6, 15),
        bio: "CHOUDARY SAAB🎖.",
        rollNumber: 34,
        gender: "Male",
        funname: "",
        friends: ["Parnika Singh Negi", "Omkar jit", ""],
        skills: {
            Looks : 8,
            knowledge: 7,
            humor: 8,
            Creativity: 8,
            Sports: 8,
        },
        hobbies: ["Jo bhi usko pasand ho"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/btw_its_rudra007",
            snapchat: "https://snapchat.com/rudra.singh15",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "Army Cantonment hypercity",
            phone: "+91 7760355122"
        },
        futureVision: "uska husband banna."
    },
    {
        id: 21,
        name: "Aryan Raj",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 7,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 22,
        name: "Maulik Trivedi",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 23,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 23,
        name: "Tanish Jaiswal",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 39,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 24,
        name: "Suhan Sharma",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 40,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 25,
        name: "Aditya Sharma",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 2,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id:26,
        name: "Bhavleen Khatri",
        profileImage: "Female.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 9,
        gender: "Female",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 27,
        name: "Keshav Gunidiya",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 19,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 28,
        name: "Amaad Kazmi",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 4,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    
    {
        id: 29,
        name: "Manav Lalwani",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 4,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 30,
        name: "Vatsal Anthwal",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 41,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 31,
        name: "Karthik Soni",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 18,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },

    {
        id: 32,
        name: "Rajan Sharma",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 32,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 33,
        name: "Robin Sood",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 33,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 34,
        name: "Evangeline Sharon",
        profileImage: "Female.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 12,
        gender: "Female",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 35,
        name: "Harsh kumar ",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 13,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 36,
        name: "Soham Sharma",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 37,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 37,
        name: "Arnav Pareek",
        profileImage: "Male.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 6,
        gender: "Male",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 38,
        name: "Izna Akhtar Hashmi",
        profileImage: "Female.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 17,
        gender: "Female",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 39,
        name: "Riddhi Maheshwari",
        profileImage: "Female.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 14,
        gender: "Female",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 40,
        name: "Isha Sharma",
        profileImage: "Female.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 15,
        gender: "Female",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 41,
        name: "Bhavishka khandelwal",
        profileImage: "Female.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 10,
        gender: "Female",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 42,
        name: "Laksna Reddy",
        profileImage: "Female.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 21,
        gender: "Female",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 43,
        name: "Kanishka Saini",
        profileImage: "Female.png",
        birthDate: new Date(2009, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: 17,
        gender: "Female",
        funname: "Red Phoenix",
        friends: ["Jane Smith", "Mike Johnson", "Emma Watson"],
        skills: {
            Looks : 7,
            knowledge: 9,
            humor: 7,
            Creativity: 8,
            Sports: 9,
        },
        hobbies: ["Coding", "Football", "Reading Sci-Fi"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            area: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
];


// Disable Right-Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable Keyboard Shortcuts for DevTools
document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.key === "i" || event.key === "I")) {
        event.preventDefault();
    }
    if (event.key === "F12") {
        event.preventDefault();
    }
});

// Detect if DevTools is Open and Take Action
setInterval(() => {
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        document.body.innerHTML = "<h1>Inspecting is not allowed!</h1>";
    }
}, 1000);

// Prevent Text Selection via CSS
document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    `;
    document.head.appendChild(style);
});

let currentSortOrder = 'id'; // Initial sort order

function toggleSort() {
    const sortButton = document.getElementById('sortButton');
    
    // Cycle through sort orders: id → rollNumber → none
    if (currentSortOrder === 'id') {
        currentSortOrder = 'rollNumber';
        sortButton.textContent = 'Sort by Roll Number';
    } else if (currentSortOrder === 'rollNumber') {
        currentSortOrder = 'none';
        sortButton.textContent = 'Reset Sort';
    } else {
        currentSortOrder = 'id';
        sortButton.textContent = 'Sort by ID';
    }

    applySort();
}

function applySort() {
    let sortedStudents = [...students];

    if (currentSortOrder === 'id') {
        sortedStudents.sort((a, b) => a.id - b.id); // Sort by ID
    } else if (currentSortOrder === 'rollNumber') {
        sortedStudents.sort((a, b) => a.rollNumber - b.rollNumber); // Sort by Roll Number
    } else {
        // Reset to original order (no sorting)
        sortedStudents = students;
    }

    renderStudents(sortedStudents);
}

// Update the search functionality to respect sorting
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = students.filter(student => 
        student.name.toLowerCase().includes(searchTerm)
    );
    applySort(filtered);
});

// Initial render
renderStudents(students);
