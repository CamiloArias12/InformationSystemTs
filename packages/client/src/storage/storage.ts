

function setId(id:string){
   localStorage.setItem("id",id)

}

function getId(){
   return localStorage.getItem("id")
}


export {setId ,getId}
