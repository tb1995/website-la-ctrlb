function formSubmission(name, email, message) {

    let data = {
        to: "tb1995@gmail.com",
        subject: "A form was submitted on the CtrlB website",
        message : `Name: ` + name + `\nEmail: `+ email + `\nMessage : ` + message
        }

        console.log(data)

    fetch("https://extraordinary-malabi-4bc6b4.netlify.app/.netlify/functions/api/send_email", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
        }).then(res => {
        console.log("Request complete! response:", res);
        });

}


fetch("https://extraordinary-malabi-4bc6b4.netlify.app/.netlify/functions/api/send_email", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(data)
}).then(res => {
  console.log("Request complete! response:", res);
});