document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons
    const resetButton = document.querySelector(".btn-reset");
    const addProductButton = document.querySelector(".btn-add-product");

    // Add click event listeners to the buttons
    resetButton.addEventListener("click", function () {
        // Reset form values to their defaults
        document.getElementById("productNumber").value = "";
        document.getElementById("productName").value = "";
        document.getElementById("unitPrice").value = "0.00";
        document.getElementById("quantityInStock").value = "0";
        document.getElementById("supplier").selectedIndex = 0;
        document.getElementById("dateSupplied").value = "";
    });

    addProductButton.addEventListener("click", function () {
        // Perform form validation here
        const productNumber = document.getElementById("productNumber").value;
        const productName = document.getElementById("productName").value;
        const unitPrice = parseFloat(document.getElementById("unitPrice").value);
        const quantityInStock = parseInt(document.getElementById("quantityInStock").value);
        const supplier = document.getElementById("supplier").value;
        const dateSupplied = document.getElementById("dateSupplied").value;

        // Check if any of the required fields are empty
        if (!productNumber || !productName || isNaN(unitPrice) || isNaN(quantityInStock) || !supplier || !dateSupplied) {
            alert("Please fill in all required fields.");
            return; // Prevent form submission
        }

        // Add your code to submit the form data to the server here
        // Replace the following alert with your submission logic
        alert("Form submitted successfully!");
    });
});