
var BestSellers=JSON.parse(localStorage.getItem("BestSellers"))||[];
var BonelessCuts=JSON.parse(localStorage.getItem("BonelessCuts"))||[];
var Blog=JSON.parse(localStorage.getItem("Blog"))||[];
console.log("BestSellers",BestSellers);
    _bestSell(BestSellers);
    _bonelessCuts(BonelessCuts);
    _blog(Blog);


    function  _bestSell(BestSellers){



        BestSellers.map(function(e,index,array){
    var main= document.createElement("div");
    main.setAttribute("class","main");
    var img=document.createElement("img");
    
    img.setAttribute("src",e.imgUrl);
    img.setAttribute("class","image");
    var name=document.createElement("h4");
    name.innerText=e.name;
    var des=document.createElement("p");
    des.setAttribute("class","des");
    des.innerText=e.des;
    var wgt=document.createElement("div");
    wgt.setAttribute("class","wgt");
    var net_tag=document.createElement("h6");
    net_tag.innerText=e.net_tag;

    var net=document.createElement("h6");
        net.innerText=e.net;
        var n_gm=document.createElement("h6");
        n_gm.innerText=e.unit;

    var gross_tag=document.createElement("h6");
    gross_tag.innerText=e.gross_tag;
    var gross=document.createElement("h6");
    gross.innerText=e.gross;
    var g_gm=document.createElement("h6");
    g_gm.innerText=e.unit;

    var hold=document.createElement("div");
    hold.setAttribute("class","hold");
    var pri=document.createElement("div");
    pri.setAttribute("class","pri");
    var price_tag=document.createElement("h5");
    price_tag.innerText=e.price_tag;
    var cuurency=document.createElement("h5");
    cuurency.innerText=e.cuurency;
    var price=document.createElement("h5");
    price.innerText=e.price;
    var strikePrice=document.createElement("strike");
    strikePrice.innerText=e.strikePrice;


    var btndiv=document.createElement("div");
    btndiv.setAttribute("class","btndiv");
   var  addCart=document.createElement("button");
   addCart.setAttribute("class","addcartbtn");
   addCart.innerHTML="Add to Cart";
   addCart.addEventListener("click", function () {
    addToCart(e);
});

    wgt.append(net_tag,net,n_gm,gross_tag,gross,g_gm);
    pri.append(price_tag,cuurency,price,strikePrice,addCart);
    // btndiv.append(addCart)
    
    main.append(img,name,des,wgt,pri);
    document.querySelector("#container").append(main);
})

    }


    //bonelesscut

    function  _bonelessCuts(BonelessCuts){



        BonelessCuts.map(function(e,index,array){
    var main= document.createElement("div");
    main.setAttribute("class","main");
    var img=document.createElement("img");
    
    img.setAttribute("src",e.imgUrl);
    img.setAttribute("class","image");
    var name=document.createElement("h4");
    name.innerText=e.name;
    var des=document.createElement("p");
    des.setAttribute("class","des");
    des.innerText=e.des;
    var wgt=document.createElement("div");
    wgt.setAttribute("class","wgt");
    var net_tag=document.createElement("h6");
    net_tag.innerText=e.net_tag;

    var net=document.createElement("h6");
        net.innerText=e.net;
        var n_gm=document.createElement("h6");
        n_gm.innerText=e.unit;

    var gross_tag=document.createElement("h6");
    gross_tag.innerText=e.gross_tag;
    var gross=document.createElement("h6");
    gross.innerText=e.gross;
    var g_gm=document.createElement("h6");
    g_gm.innerText=e.unit;

    var hold=document.createElement("div");
    hold.setAttribute("class","hold");
    var pri=document.createElement("div");
    pri.setAttribute("class","pri");
    var price_tag=document.createElement("h5");
    price_tag.innerText=e.price_tag;
    var cuurency=document.createElement("h5");
    cuurency.innerText=e.cuurency;
    var price=document.createElement("h5");
    price.innerText=e.price;
    var strikePrice=document.createElement("strike");
    strikePrice.innerText=e.strikePrice;


    var btndiv=document.createElement("div");
    btndiv.setAttribute("class","btndiv");
   var  addCart=document.createElement("button");
   addCart.setAttribute("class","addcartbtn");
   addCart.innerHTML="Add to Cart";
   addCart.addEventListener("click", function () {
    addToCart(e);
});

    wgt.append(net_tag,net,n_gm,gross_tag,gross,g_gm);
    pri.append(price_tag,cuurency,price,strikePrice,addCart);
    // btndiv.append(addCart)
    
    main.append(img,name,des,wgt,pri);
    document.querySelector("#bonelessCuts").append(main);
})

    }

    //Blog
    function  _blog(Blog){



        Blog.map(function(e,index,array){
    var main= document.createElement("div");
    main.setAttribute("class","b_main");
    var img=document.createElement("img");
    
    img.setAttribute("src",e.imgUrl);
    img.setAttribute("class","b_image");
    var name=document.createElement("h4");
    name.setAttribute("id","b_name");
    name.innerText=e.name;
    main.append(img,name);
    document.querySelector("#blog").append(main);
})

    }

    
    
   function addToCart(e){
    e.quant=1
    cardArr.push(e)
   localStorage.setItem("cardArr", JSON.stringify(cardArr));
    display(cardArr);
    subto();
    addE()
   console.log(cardArr)

  };