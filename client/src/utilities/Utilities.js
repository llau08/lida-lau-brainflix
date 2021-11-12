function formatTimestamp(timestamp){
   return Intl.DateTimeFormat('en-US',{
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(timestamp);
}

 const apiURL = "http://localhost:8080/";

 export {formatTimestamp, apiURL};