const P=[
["Pearl Drop Earrings","Jewellery",350,"assets/new-earrings.jpg"],
["Matte Nail Polish Set (6 pcs)","Beauty",1200,"assets/new-nails.jpg"],
["Designer Saree","Sari",2800,"assets/new-sari.jpg"],
["Rayon Kurta Set","Kurta",1650,"assets/new-kurta.jpg"],
["Makeup Combo Set","Beauty",2450,"assets/new-makeup.jpg"],
["Ladies Heel Sandals","Shoes",1980,"assets/new-shoes.jpg"],
["Casual Sandals","Sandals",1250,"assets/new-sandals.jpg"]];
let cart=[];const grid=document.getElementById("products");
function money(n){return"Rs. "+n.toLocaleString("en-IN")}
function render(list=P){grid.innerHTML=list.map((p,i)=>`<article class="product"><div class="heart">♡</div><img src="${p[3]}" alt="${p[0]}"><div class="product-body"><h3>${p[0]}</h3><p>${money(p[2])}</p><div class="stars">★★★★★ <small>(${i+7})</small></div><button class="add" onclick="add(${i})">🛒 Add to Cart</button></div></article>`).join("")}
function add(i){cart.push(P[i]);document.getElementById("cartQty").textContent=`(${cart.length})`;drawCart();openCart()}
function drawCart(){let box=document.getElementById("cartList");if(!cart.length){box.innerHTML='<p style="padding:30px;text-align:center;color:#777">Your cart is empty ♡</p>';document.getElementById("total").textContent="Rs. 0";return}let total=cart.reduce((s,p)=>s+p[2],0);box.innerHTML=cart.map((p,i)=>`<div class="cart-row"><img src="${p[3]}"><div><h4>${p[0]}</h4><small>${money(p[2])}</small></div><button onclick="removeItem(${i})">×</button></div>`).join("");document.getElementById("total").textContent=money(total)}
function removeItem(i){cart.splice(i,1);document.getElementById("cartQty").textContent=`(${cart.length})`;drawCart()}
function openCart(){document.getElementById("drawer").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("drawer").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
document.getElementById("openCart").onclick=openCart;document.getElementById("closeCart").onclick=closeCart;document.getElementById("overlay").onclick=closeCart;
document.getElementById("order").onclick=()=>{if(!cart.length)return alert("Your cart is empty.");let lines=cart.map(p=>`• ${p[0]} — ${money(p[2])}`).join("%0A");let total=cart.reduce((s,p)=>s+p[2],0);window.open("https://wa.me/9779801322132?text="+`Hello Dibyanshi Online Store!%0A%0AI would like to order:%0A${lines}%0A%0ATotal: ${money(total)}%0APlease confirm availability and delivery.`,"_blank")};
document.querySelectorAll(".round-cats button").forEach(b=>b.onclick=()=>{let c=b.dataset.cat;render(P.filter(p=>p[1]===c));document.getElementById("shop").scrollIntoView({behavior:"smooth"})});
document.getElementById("search").oninput=e=>{let q=e.target.value.toLowerCase();render(P.filter(p=>(p[0]+" "+p[1]).toLowerCase().includes(q)))};
render();drawCart();
