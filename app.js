
const fs=require('fs');

///////////////task1//////////////////////////////////
const person={
    fname:'ahmed',
    lname:'hossam',
    age:20,
    city:'alex',

};
//change obj to json
const personjson=JSON.stringify(person)
//store in file 
fs.writeFileSync('data.json',personjson)
//read file(json)
 const data=fs.readFileSync('data.json').toString()
//console.log(data)
//convert to obj
const dataobj=JSON.parse(data);
//console.log(dataobj)
//update data
dataobj.fname='adel';
dataobj.lname='ahmed';
dataobj.age=40;
dataobj.city='cairo';
//convert obj to json
const updatedataobjtojson=JSON.stringify(dataobj)
//console.log( updatedataobjtojson);
//store in file 
fs.writeFileSync('updatedata.json',updatedataobjtojson)
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const yargs = require ("yargs")
const data1=require('./data1')
 yargs.command({
  command : "add",
   describe : "to add  new person",
  builder: {
   id: {
        describe: "this is the personID",
         demandOption: true,
             type: "string",
          },
        fname : {
    describe: "this is the first name in add command",
     demandOption: true,
         type: "string",
      },
      lname : {
       describe: "this is the last name in add command",
       demandOption: true,
       type: "string",
    },
      age : {
        describe: "Age",
        demandOption: true,
             type: "string",
          },
          city: {
            describe: "City",
             demandOption: true,
                 type: "string",
              },
            },
      handler:(x)=> {
data1.addperson(x.id , x.fname , x.lname , x.age , x.city)
  //data1.addPerson(x.id , x.fname , x.lname , x.age , x.city )
  }
 })
 yargs.command({
    command : "delete",
     describe : "to delete person",
    builder: {
     id: {
          describe: "this is the personID",
           demandOption: true,
               type: "string",
            },
        },
        handler:(x)=> {
            data1.deletePerson(x.id)
        }
        })
        yargs.command({
            command : "list",
            describe : "to list fname & lname & city for all",
          
           
               handler:()=> {
                data1.listdata()
            }  
        })
        yargs.command({
            command : "read",
             describe : "to read data",
            builder: {
             id: {
                  describe: "this is the personID",
                   demandOption: true,
                       type: "string",
                    },
                },
                handler:(x)=> {
                    data1.readData(x.id)
                }
                })


 yargs.parse()

 

    