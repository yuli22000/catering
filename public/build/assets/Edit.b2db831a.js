import{u as m,r,R as e,H as i,d as o}from"./app.93238259.js";import{L as u}from"./Account.7f6ed1df.js";import{S as d}from"./sweetalert2.all.23299df9.js";function v(){const{errors:n,transaction:t}=m().props,[s,c]=r.exports.useState(t.status_shiping);r.exports.useState(t.status);const l=async a=>{a.preventDefault(),o.Inertia.post(`/account/transactions/${t.id}`,{status_shiping:s,_method:"PUT"},{onSuccess:()=>{d.fire({title:"Success!",text:"Pesanan berhasil di update!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(i,null,e.createElement("title",null,"Edit Pesanan - Catering Aisyah")),e.createElement(u,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Edit Pesanan")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:l},e.createElement("div",{className:"mb-3"},e.createElement("select",{className:"form-select",value:s,onChange:a=>c(a.target.value)},e.createElement("option",{value:""},"-- Select Pesanan --"),e.createElement("option",{value:t.menunggu,key:t.id},"Menunggu"),e.createElement("option",{value:t.diterima,key:t.id},"Diterima"),e.createElement("option",{value:t.diterima,key:t.id},"Delivery"),e.createElement("option",{value:t.cancel,key:t.id},"Cancel"))),n.name&&e.createElement("div",{className:"alert alert-danger"},n.name),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Update"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{v as default};