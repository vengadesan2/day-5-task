
// for the given JSON itertion over all for loop ( for of ,for in loop)
// for loop with array
let a=[1,2,3,4,5,6,7,8,]
for( var i=0; i<a.length; i++ ){
    console.log(a[i]);
}

// for  in loop 
  let item ={ 
    names: "john", 
    age : 23,
    phone: 1234567
  }
  for( var value in item){
    console.log(item[value]);
  }

  // for  of loop
   let  arr=[ "apple", "orange","mongo","pineapple"]
   for(var element of arr){
    console.log(element);
   }


// RESUME DATA IN JSON FORMAT
var resume={
            "name":"vengadesan",
            "email":"vengadesanguna@24.com",
            "educaion":{
            "Degree": "BE",
            "colleges":"roever engineering college",
            "brench":"EEE",
            CGP:8.10,
            "12th":{
                "school": "govt hss school perambalur",
               "12%": 60,   
                mark:363,
                 } ,
            "10th":{
                "school": " A.D.W. high school perambalur",
                mark:346,
                "10%":70
            },
             "skills":" goood communication & quick leaner",
             "indenship": "the galwin technology for internship with 15 in day",
             "project":"small size house hold portable bio gas in TNSC Project",
             "call":6380929688, 
            }
           
           }

           console.log(resume);

