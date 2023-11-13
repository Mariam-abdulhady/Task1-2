//to add person
const { log } = require('console')
const fs=require('fs')
const addperson=(id,fname,lname,age,city)=>{
    const  allData = loadData()
    const duplicatedData=allData.filter((obj)=>{
    return obj.id==id
    })
    if(duplicatedData.length==0){
    allData.push({
      id:id,
      fname:fname,
      lname:lname,
      age:age,
      city:city,
    } )
    saveAllData(allData) 
}
    else{
        console.log(" DUPLICATED DATA")
    }
}
const loadData = () => {

    try {
        const dataJson = fs.readFileSync('data2.json').toString()
        return JSON.parse(dataJson)
    } catch {
        return []
    }
}
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify (allData)
    fs.writeFileSync ('data2.json' , saveAllDataJson )
 }
 ///////////////
 const deletePerson = (id) => {
    const allData = loadData()

    const datatokeep = allData.filter ((obj) => {
      return obj.id !== id
    })

     saveAllData(datatokeep)
}
///////////// to list fname & lname & city for all
   const listdata=(id) =>{
    const allData = loadData()
    allData.forEach((obj)=>{
     console.log(obj.fname,obj.lname,obj.city)

    })
   }
   /// to read all data for only the 5th person
 
   const readData = (id) => {
    const allData = loadData()

     const  itemNeeded = allData.find((obj) => {
       return  obj.id == id 
     })
   
     if (itemNeeded){
    console.log(itemNeeded)
     }else {
       console.log("id needed not found")
     }
 }
   

module.exports={
    addperson,
    deletePerson,
    listdata,
    readData
}