async function uploadReceipt() {
    let fileInput = document.getElementById("receipt");
    let file = fileInput.files[0];

    if (!file) {
        alert("Please upload a receipt image first.");
        return;
    }

    let formData = new FormData();
    formData.append("receipt", file);

    document.getElementById("status").innerText = "AI is extracting receipt data...";

    try {
        let res = await fetch("/extract", {
            method: "POST",
            body: formData
        });

        let data = await res.json();

        document.getElementById("merchant").value = data.merchant_name || "";
        document.getElementById("date").value = data.date || "";
        document.getElementById("total").value = data.total_amount || "";
        document.getElementById("currency").value = data.currency || "";

        document.getElementById("status").innerText = "Extraction completed successfully!";
    } catch (error) {
        console.error(error);
        document.getElementById("status").innerText = "Error extracting receipt data.";
    }
}


function submitForm() {
    let result = {
        merchant: document.getElementById("merchant").value,
        date: document.getElementById("date").value,
        total: document.getElementById("total").value,
        currency: document.getElementById("currency").value
    };

    localStorage.setItem("receipt_data", JSON.stringify(result));

    document.getElementById("status").innerText = "Receipt data saved locally!";
    alert("Saved locally!");

    // clear form
    document.getElementById("merchant").value = "";
    document.getElementById("date").value = "";
    document.getElementById("total").value = "";
    document.getElementById("currency").value = "";
    document.getElementById("receipt").value = "";
}
