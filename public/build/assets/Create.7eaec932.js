import{u,r,R as e,H as E,d as b}from"./app.93238259.js";import{L as f}from"./Account.7f6ed1df.js";import{S as N}from"./sweetalert2.all.23299df9.js";function g(){const{errors:t,permissions:n}=u().props,[l,m]=r.exports.useState(""),[c,o]=r.exports.useState([]),i=a=>{let s=c;s.push(a.target.value),o(s)},d=async a=>{a.preventDefault(),b.Inertia.post("/account/roles",{name:l,permissions:c},{onSuccess:()=>{N.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(E,null,e.createElement("title",null,"Create Roles - Catering Aisyah")),e.createElement(f,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shield-alt"})," Add New Role")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:d},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Role Name"),e.createElement("input",{type:"text",className:"form-control",value:l,onChange:a=>m(a.target.value),placeholder:"Enter Role Name"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("hr",null),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"fw-bold"},"Permissions"),e.createElement("br",null),n.map((a,s)=>e.createElement("div",{className:"form-check form-check-inline",key:s},e.createElement("input",{className:"form-check-input",type:"checkbox",value:a.name,onChange:i,id:`check-${a.id}`}),e.createElement("label",{className:"form-check-label",htmlFor:`check-${a.id}`},a.name))),t.permissions&&e.createElement("div",{className:"alert alert-danger mt-2"},t.permissions)),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{g as default};
