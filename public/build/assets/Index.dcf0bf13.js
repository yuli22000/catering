import{u as s,R as e,H as n,L as d}from"./app.93238259.js";import{L as o}from"./Web.6349ffc7.js";import{D as i}from"./Delete.6746869c.js";import{f as m}from"./FormatPrice.72b07cf2.js";import"./Header.009aff90.js";import"./sweetalert2.all.23299df9.js";function p(){const{dataCarts:r,carts:a,countQty:l,totalPrice:E}=s().props;return e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement("title",null,"Carts - Catering Aisyah ")),e.createElement(o,null,e.createElement("div",{className:"container mt-80 mb-5"},e.createElement("div",{className:"fade-in"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8"},a.length>0?e.createElement("div",{className:"row mb-2"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"card border-0 shadow-sm rounded-3 mb-3"},e.createElement("div",{className:"card-body"},a.map((t,c)=>e.createElement("div",{key:c},e.createElement("div",{className:"row g-0"},e.createElement("div",{className:"col-md-4 col-4"},e.createElement("img",{src:t.product_image,className:"img-fluid rounded-3"})),e.createElement("div",{className:"col-md-8 col-8"},e.createElement("div",{className:"card-body"},e.createElement("h4",{className:"card-title"},t.product.title),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12 col-12"},e.createElement("div",null,"Qty : ",e.createElement("strong",null,t.qty)),e.createElement("div",{className:"mt-3"},"Size : ",e.createElement("strong",null,t.size)),e.createElement("div",{className:"mt-3"},"Mix menu : ",e.createElement("strong",null,t.name))),e.createElement("div",{className:"col-md-12 col-12 text-end"},e.createElement(i,{URL:"/carts",id:t.id}))),e.createElement("hr",null),e.createElement("h5",null,"Rp. ",m(t.price))))),e.createElement("hr",null))))))):e.createElement("div",{className:"card border-0 rounded-3 shadow-sm mt-4 mb-4"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"col-sm-12 empty-cart-cls text-center"},e.createElement("img",{src:"/assets/images/shopping-cart.png",width:"150",height:"150",className:"img-fluid mb-4 mr-3"}),e.createElement("h6",null,e.createElement("strong",null,"Shopping Carts is Empty \u{1F601}"))))),e.createElement("div",{className:"row mb-5"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"card border-0 rounded-3 shadow-sm"},e.createElement("div",{className:"card-body"},e.createElement("h6",{className:"mb-0"},"Total Orders : ",e.createElement("strong",null,"Rp. ",m(r.price))),e.createElement("h6",{className:"mb-0"},"Quantity : ",e.createElement("strong",null," ",l.qty))))),e.createElement("div",{className:"col-md-12 mt-4"},l.qty>=5?e.createElement(d,{href:"/checkouts",className:"btn btn-success btn-md border-0 shadow rounded-3 w-100"}," DELIVERY ",e.createElement("i",{className:"fa fa-long-arrow-alt-right"})):e.createElement("button",{className:"btn btn-success btn-md border-0 shadow rounded-3 w-100",disabled:!0},"Next Payment ",e.createElement("i",{className:"fa fa-long-arrow-alt-right"}))))))))))}export{p as default};