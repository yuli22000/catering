import{R as e,L as a}from"./app.93238259.js";import{f as r}from"./FormatPrice.72b07cf2.js";function l({product:t}){return e.createElement(e.Fragment,null,e.createElement("div",{class:"product-card"},e.createElement(a,{href:`/products/${t.slug}`},t.product_images.length>0?e.createElement("img",{src:t.product_images[0].image,style:{height:"200px"},className:"w-100 rounded-top p-1"}):e.createElement("img",{src:"/assets/images/image.png",className:"w-100 rounded-top p-1"})),e.createElement("div",{class:"product-card-body"},e.createElement("h5",{class:"product-name"},e.createElement("a",{href:""},t.title)),e.createElement("div",null,e.createElement("hr",null),e.createElement("span",{class:"selling-price"},"Rp. ",r(t.product_sizes[0].price))))))}export{l as C};
