$( document ).ready(function() {
    //console.log( "ready" );
    $.get("http://localhost:3000/posts/",function(data){
        console.log(data);
        for(i=0; i<data.length; i++){
            (data[i]["id"],["first_name"],["last_name"],["email"],["gender"]);
            $("#tab").append("<tr><td>"+data[i]["id"]+"</td><td>"+data[i]["first_name"]+"</td><td>"+data[i]["last_name"]+"</td><td>"+data[i]["email"]+"</td><td>"+data[i]["gender"]+"</td><td>"+ "<button type='button' class='btn btn-default'> X" +
            "<span class='glyphicon glyphicon-remove' />"+"</tr></td>" );
          }
          $('button').click(function () {
           $("#emp").remove();
        });
        });
});
