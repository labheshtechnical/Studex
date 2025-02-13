const students = [
    {
        id: 1,
        name: "Labhesh Tiwari          ",
        profileImage: "images/pfp.jpg",
        birthDate: new Date(2010, 3, 19),
        bio: "Student 📚 | Coder 💻 | Sports enthusiast ⚽🏏 | Learning, laughing, leveling up! 🚀.",
        rollNumber: "21",
        gender: "Male",
        funname: "Baccha",
        friends: ["Priyansh Dusad", "Dev Gupta", "Maulik Agarwal", "Lavin Singh" , "Ronak Soni" ,
             "Akshit Agarwal" , "Saksham Sharma" , "Ayush Kulhari " , "Jatin Choudhary","Aarnav","Yuvraj Sharma",
             "Amaad","Ayaan","Vedant Dadhich","Mrityunjay Kumawat"],
        skills: {
            Looks : 10,
            knowledge: 10,
            humor: 10,
            Creativity: 10,
            Sports: 10,
        },
        hobbies: ["👩🏻‍💻Coding", "⚽Football", "🏏Cricket","🏸Badminton","🤖AI",""],
        socialLinks: {
            instagram: "https://instagram.com/fr_labhesh",
            snapchat: "https://snapchat.com/labhesh_tiwari",
            x: "https://x.com/labhesh_tiwari"
        },
        contact: {
            email: "labheshtiwari@example.com",
            phone: "+91 8005964259"
        },
        futureVision: "Billionaire?"
    },
    {
        id: 2,
        name: "Priyansh Dusad",
    profileImage: "dev gupta.png",
        birthDate: new Date(2009, 8, 23),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "31",
        gender: "Male",
        funname: "Charas Ganja",
        friends: ["Labhesh Tiwari", "Dev Gupta", "Maulik Agarwal", "Lavin Singh" , "Ronak Soni" ,
            "Akshit Agarwal" , "Saksham Sharma" , "Ayush Kulhari " , "Jatin Choudhary","Aarnav","Yuvraj Sharma"],
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 3 ,
        name: "Maulik Agarwal",
        profileImage: "dev gupta.png",
        birthDate: new Date(2009, 5, 30),
        bio: "",
        rollNumber: "10A-23",
        gender: "Male",
        funname: "Pure Rajasthani",
        friends: ["Labhesh Tiwari", "Dev Gupta", "Tanish Jaiswal","Ankita Pal💕" , "Bhavleen Khatri","Priyansh Dusad","Lavin Singh"],
        skills: {
            Looks : 7.5,
            knowledge: 8,
            humor: 9,
            Creativity: 9,
            Sports: 8.5,
        },
        hobbies: ["🎨Painting", "🏏Cricket", ""],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/_maulik_31_",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 4,
        name: "Dev Gupta",
        profileImage: "images/dev gupta.png",
        birthDate: new Date(2009, 10, 23),
        bio: "Wanna Be Designer",
        rollNumber: "11",
        gender: "Male",
        funname: "Slave👨🏿",
        friends: ["Labhesh Tiwari","Maulik Agarwal","Tanish Jaiswal","Bhavleen Khatri","Priyansh Dusad","Lakshna"],
        skills: {
            Looks : 8.5,
            knowledge: 9,
            humor: 9,
            Creativity: 11,
            Sports: 10,

        },
        hobbies: ["🎨Painitng", "🏀Basketball", "🖌Designing"],
        favoriteSubjects: ["Mathematics", "Physics", "Computer Science"],
        socialLinks: {
            instagram: "https://instagram.com/johndoe",
            snapchat: "https://snapchat.com/johndoe",
            x: "https://x.com/johndoe"
        },
        contact: {
            email: "johndoe@example.com",
            phone: "+91 9653855184"
        },
        futureVision: "Dominating the fashion industry."
    },
    {
        id: 5,
        name: "Lavin Singh",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
                {
        id: 6,
        name: "Ronak Soni",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 7,
        name: "Akshit Agarwal",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 8,
        name: "Ayush kulhari",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 9,
        name: "Saksham Sharma",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 10,
        name: "Mrityunjay kumawat",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 11,
        name: "Vedant Dadhich",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },

    {
        id: 12,
        name: "Aarnav Choudhary",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },

    {
        id: 13,
        name: "Jatin Choudhary",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },

    {
        id: 14,
        name: "Yuvraj Sharma",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },

    {
        id: 15,
        name: "Ankita Pal",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },

    {
        id: 16,
        name: "Mohamad Irshad",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 17,
        name: "Mohamad Fahad",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 18,
        name: "Mohamad Ayaan",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 19,
        name: "Omkar Jit Singh",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 20,
        name: "Rudra Pratap Singh",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 21,
        name: "Aryan Raj",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 22,
        name: "Maulik Trivedi",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 23,
        name: "Tanish Jaiswal",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 24,
        name: "Suhan Sharma",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 25,
        name: "Aditya Sharma",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id:26,
        name: "Bhavleen Khatri",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 27,
        name: "Keshav Gunidiya",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 28,
        name: "Amaad Kazmi",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 30,
        name: "Vatsal Anthwal",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },
    {
        id: 31,
        name: "Karthik Soni",
        profileImage: "dev gupta.png",
        birthDate: new Date(2008, 2, 15),
        bio: "Aspiring engineer with a passion for physics and coding.",
        rollNumber: "10A-23",
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
            email: "johndoe@example.com",
            phone: "+91 9876543210"
        },
        futureVision: "Leading a tech startup revolutionizing renewable energy solutions."
    },

];
