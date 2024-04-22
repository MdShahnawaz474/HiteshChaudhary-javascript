fetch ("https://api.github.com/users/MdShahnawaz474").then((response)=>{
    return response.json()

}).then((data)=>{
    console.log(data);
}).then