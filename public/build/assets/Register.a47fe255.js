import{u as N,r as s,R as e,H as g,L as v,d as b}from"./app.93238259.js";function w(){const{errors:t}=N().props,[l,o]=s.exports.useState(""),[r,i]=s.exports.useState(""),[m,d]=s.exports.useState(""),[n,u]=s.exports.useState(""),[c,p]=s.exports.useState(""),E=async a=>{a.preventDefault(),b.Inertia.post("/register",{name:l,email:r,number:m,password:n,password_confirmation:c})};return e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement("title",null,"Register Account - Catering Aisyah")),e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-6 mt-80"},e.createElement("div",{className:"text-center mb-4"},e.createElement("img",{src:"/assets/images/logo.png",width:"60"}),e.createElement("h4",null,e.createElement("strong",null,"CATERING")," AISYAH")),e.createElement("div",{className:"card border-0 rounded-3 shadow-sm border-top-success"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"text-center"},e.createElement("h6",{className:"fw-bold"},"REGISTER ACCOUNT"),e.createElement("hr",null)),e.createElement("form",{onSubmit:E},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Full Name"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-user"})),e.createElement("input",{type:"text",className:"form-control",value:l,onChange:a=>o(a.target.value),placeholder:"Full Name"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name)),e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Number"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-user"})),e.createElement("input",{type:"number",className:"form-control",value:m,onChange:a=>d(a.target.value),placeholder:"Number Whatsapp"})),t.number&&e.createElement("div",{className:"alert alert-danger"},t.number)),e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Email Address"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-envelope"})),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>i(a.target.value),placeholder:"Email Address"})),t.email&&e.createElement("div",{className:"alert alert-danger"},t.email))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Password"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-lock"})),e.createElement("input",{type:"password",className:"form-control",value:n,onChange:a=>u(a.target.value),placeholder:"Password"})),t.password&&e.createElement("div",{className:"alert alert-danger"},t.password)),e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Password Confirmation"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-lock"})),e.createElement("input",{type:"password",className:"form-control",value:c,onChange:a=>p(a.target.value),placeholder:"Password Confirmation"})))),e.createElement("button",{className:"btn btn-success shadow-sm rounded-sm px-4 w-100",type:"submit"},"REGISTER")))),e.createElement("div",{className:"register text-center mt-3"},"Have an account? ",e.createElement(v,{href:"/login"},"Login!"))))))}export{w as default};
