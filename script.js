document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartButtons = document.querySelectorAll(".btn-primary");

    cartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productCard = this.closest(".deal-card");
            const productName = productCard.querySelector("a").innerText;
            const productPrice = productCard.querySelector("p").innerText.match(/\$(\d+)/)[1];
            const productImage = productCard.querySelector("img").src;

            const product = {
                name: productName,
                price: parseInt(productPrice),
                image: productImage
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Hozzáadva a kosárhoz: " + productName);
        });
    });
});
