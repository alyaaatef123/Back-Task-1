const yargs= require("yargs")
const operations = require("./Operations")

yargs.command({
    command:"add",
    describe:"Add A Person At The Database",
    builder:{
        id:{
            describe:"Unique ID",
            demandOption:true,
            type:"number"
        },
        fname:{
            describe:"First Name",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"Last Name",
            demandOption:false,
            type:"string"
        },
        age:{
            describe:"Age",
            demandOption:true,
            type:"number"
        }
    },
    handler: (x)=>{
        operations.addPerson(x.id , x.fname , x.lname , x.age)
    }
})
console.log(yargs.argv)

yargs.command({
    command:"delete",
    describe:"Delete A Person From The Database",
    builder:{
        id:{
            describe:"Unique ID",
            demandOption:true,
            type:"number"
        }
    },
    handler : (x)=> {
        operations.deletePerson(x.id)
     }
})
yargs.command({
    command: "get",
    describe: "Get the person data from database",
    builder: {
        id : {
            describe: "Unique ID",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) => {
        operations.getPerson(x.id);
    }
})

yargs.command({
    command: "list",
    describe: "List all persons from database",
    handler: ()=> {
        operations.listMembers();
    }
})

yargs.parse();