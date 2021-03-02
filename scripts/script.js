$( document ).ready(function() {
    //console.log( "ready" );
    $.get("http://localhost:3000/posts/",function(data){
        console.log(data);
        for(i=0; i<data.length; i++){
            console.log(data[i]["id"],["first_name"],["last_name"],["email"],["gender"]);
            $("#tab").append("<tr><td>"+data[i]["id"]+"</td><td>"+data[i]["first_name"]+"</td><td>"+data[i]["last_name"]+"</td><td>"+data[i]["email"]+"</td><td>"+data[i]["gender"]+"</tr></td>");
          }
          

    });
    

});