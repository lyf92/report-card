/**
 * Created by lyf on 17-3-16.
 */
$.ajax({
    type: "POST",
    url: "/login",
    data: JSON.stringify({
        "cardID":cardID
    }),
    dataType: "json",
    contentType: "application/json",
    success: function(response) {
        window.location.href=response.url;
    },
    error:function(response){
        console.log("err");
    }
});