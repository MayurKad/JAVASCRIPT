 // singleton help to construtor
  const tinderUser = new Object() // non singleton value
  const tinderuser = {}

  tinderUser.id = "124abc"
  tinderUser.name = "Baki hanma"
  tinderUser.isLoggin = false

  console.log(tinderUser);
  console.log(tinderuser);

// this is a object in object method

  const regulaUser = {
    email: "bakihanma@google.vm",
    fullName:{
        Username:{
            firstname: "Baki",
            lastname: "hanma"
        }
    }
  }

  console.log(regulaUser.fullName);

  obj1 = {1: "a", 2: "b"}
  obj2 = {3: "c", 4: "d"}

  const obj3 = Object.assign({}, obj1, obj2) // assign function
  const obj4 = {...obj1, ...obj2} //spread function new version

  console.log(obj3);

  // array object value

  const user = [
    {
        id: "1245",
        gmail: "B@google.vm"
    }
  ]

// this key function is use to find the key which is have it give the string output we can print values

  console.log(Object.keys(tinderUser)); 
  console.log(Object.values(tinderUser));
  console.log(Object.entries(tinderUser));
  console.log(tinderUser.hasOwnProperty("name"));
  console.log(user);