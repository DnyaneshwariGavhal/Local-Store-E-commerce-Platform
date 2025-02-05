let card = document.querySelector(".trend");
let mainpage = document.querySelector(".main");
let blogs = document.querySelector(".trends");
let card2 = document.querySelector(".trend2");
let leter=document.querySelector(".letter");
let footer=document.querySelector(".footer-container");
let aboutus=document.querySelector(".about");
let btn1=document.querySelector(".btn");
let connect=document.querySelector(".contact");
let crt=document.querySelector(".cart");
function shops() {
    mainpage.style.display = "none";
    card.style.display="block";
    card2.style.display="block";
    blogs.style.display="none";
    aboutus.style.display="none";
    crt.style.display="none";
}
function blog() {
    card.style.display = "none";
    card2.style.display = "none";
    mainpage.style.display = "none";
    blogs.style.display="block";
    aboutus.style.display="none";
    crt.style.display="none";
}
function home(){
    mainpage.style.display = "flex";
    card.style.display="block";
    card2.style.display="block";
    blogs.style.display="block";
    aboutus.style.display="none";
}
function about(){
    mainpage.style.display = "none";
    card.style.display="none";
    card2.style.display="none";
    blogs.style.display="none";
    aboutus.style.display="block";
}
function contact()
{  mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    mainpage.style.display = "none";
    blogs.style.display="none";
    connect.style.display="block";

}

function show(img){
    let newImg=document.getElementById(newimg);
    console.log(img);
    newimg.src=img.src;
 document.querySelector(".cart").style.display="flex";
 mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    mainpage.style.displray = "none";
    blogs.style.display="none";
    connect.style.display="none";
}
function addtocart(){
    alert("Added to cart")
    location.reload();
}
    const addedItems = [];

    function addToCart(event) {
        event.preventDefault();

        // Get the image source of the clicked item
        const itemImage = event.target.closest('.crd, .crd2').querySelector('img').src;
        
        // Add the image source to the added items list
        addedItems.push(itemImage);

        // Increase the cart count
        const cartCountElement = document.getElementById('cart-count');
        let cartCount = parseInt(cartCountElement.textContent) || 0;
        cartCount++;
        cartCountElement.textContent = cartCount;

        // Optionally, show a notification
        alert('Item added to cart');
    }

    function showCartImage() {
        if (addedItems.length > 0) {
            // Display the first added item image
            const firstItemImage = addedItems[0];
            const cartImageContainer = document.getElementById('cart-image-container');
            const cartImage = document.getElementById('cart-image');
            cartImage.src = firstItemImage;
            cartImageContainer.style.display = 'block';
        } else {
            alert('No items in the cart');
        }
    }

    // Attach event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });