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
}

function submitForm() {

    let result = {
        merchant: document.getElementById("merchant").value,
        date: document.getElementById("date").value,
        total: document.getElementById("total").value,
        currency: document.getElementById("currency").value
    };

    localStorage.setItem("receipt_data", JSON.stringify(result));

    document.getElementById("status").innerText = "Receipt data saved successfully!";

  
    document.getElementById("merchant").value = "";
    document.getElementById("date").value = "";
    document.getElementById("total").value = "";
    document.getElementById("currency").value = "";

    
    document.getElementById("receipt").value = "";
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
}

function submitForm() {
    let result = {
        merchant: document.getElementById("merchant").value,
        date: document.getElementById("date").value,
        total: document.getElementById("total").value,
        currency: document.getElementById("currency").value
    };

    localStorage.setItem("receipt_data", JSON.stringify(result));

    alert("Saved locally!");
}
