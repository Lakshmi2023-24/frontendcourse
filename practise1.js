let coursename = "javascript";
function practisescope(){

    let topic = "variables";
    console.log("coursename:", topic);
}
if(true){

    let details = "exploring scopes";
    console.log(details);
}
practisescope();