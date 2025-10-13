        // // Array & Object in js
        // // 1. Array
        // // Cara 1. Array Literal
        // let students = ["John", "Jane", "Jim", "Peter"];
        // let john = ['John', 20, true, [90, 85, 88]];

        // // Cara 2. New Array Constructor
        // let employees = new Array("John", "Jim", "Jane", "Peter")

        // // Menampilkan semua element Array
        // console.log(students);
        // // Menampilkan salah satu index ke - 2
        // console.log(students[2]);
        // john[2] = false;
        // console.log(john);
        // // Menampilkan index terakhir
        // console.log(students[students.length - 1]);
        // // Array method
        // let array = [1, 2, 3, "hello", true, false]
        // // 1. toString()
        // console.log(array.toString());
        // // 2. join()
        // console.log(array.join(" - "));
        // console.log(array.join(" "))
        // // 3. pop()
        // array.pop();
        // // 4. push()
        // array.push("Data baru eaaa:3");
        // console.log(array);
        // // 5. shift()
        // array.shift();
        // console.log(array);
        // // 6. unshift()
        // array.unshift("number 1 said : I will survive");
        // console.log(array);
        // // 7. splice()
        // array.splice(3, 0, 4);
        // console.log(array); 
        // array.splice(4, 1, "Hello World")
        // console.log(array);
        // // 8. slice() - ambil elemen array dan simpan ke array baru
        // let newArray = array.slice(1,4);
        // console.log(newArray);
        // // 9. concat() - menggabungkan dua array
        // let concatArray = array.concat(newArray);
        // console.log(concatArray);
        // let num1 = [1,2,3]
        // let num2 = [4,5,6]
        // let num3 = [7,8,9]
        // console.log(num1.concat(num2, num3));


        // // 2. Object
        let john = {
            fullName: "John Doe",
            Age: 50,
            Gender: "Male",
            isMarried: true,
            Hobbies: ["reading", "travelling", "swimming"],
            address:{
                street : "arnold mononutu",
                city : "minut",
                province : "sulawesi utara",
            },
            sayHello: function() {
                console.log("Hello, my name is " + this.fullName);
            },
        }

        // menampilkan semua object
        console.log(john);  
        
        // cara mengakses elemen dalam object 
        // cara 1. dot notation
        console.log(john.fullName);
        console.log(john.address.province);
        john.sayHello();

        // Cara 2. bracket notation
        console.log(john["Age"]);
        console.log(john["Hobbies"][2]);
        console.log(john["address"]["city"]);
        console.log(john["sayHello"]());

        john.job = "Rebahan di rumah" // menambah property
        delete john.isMarried   // menghapus property
        console.log(john);
