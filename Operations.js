const fs=require("fs")

const readData =()=>{
    try{
       const dataJson=fs.readFileSync("Data.json")
       return JSON.parse(dataJson)
    }
    catch{
        return []
    }
}
const writeData=(Data)=>{
     fs.writeFileSync("Data.json", JSON.stringify(Data))
}
const addPerson = (id,fname,lname,age) => {
    const Data = readData();

    const duplicatedData = Data.filter( obj => {
        return obj.id == id;
    })

    if(duplicatedData.length == 0) {
        Data.push({id,fname,lname,age});
        writeData(Data);
    }
    else
        console.log("Duplicated Data,This ID already exists");
}
const deletePerson = id => {
    const Data = readData();

    const updatedData = Data.filter( obj => {
        return obj.id != id;
    })

    writeData(updatedData);
}

const getPerson = id => {
    const data = readData();

    const person = data.find( obj => {
        return obj.id == id;
    })

    if(person)
        console.log(person);
    else
        console.log("This ID not found,person does not exist");

}

const listMembers = _ => {
    const data = readData();

    data.forEach( obj => {
        console.log(obj.id, obj.fname, obj.lname);
    });
}

module.exports = {
    addPerson,
    deletePerson,
    getPerson,
    listMembers
}