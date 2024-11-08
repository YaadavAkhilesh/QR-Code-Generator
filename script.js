document.getElementById("qrcode").style.display = "none";

function generateQRCode() {
    const qrText = document.getElementById("qrText").value;
    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    if (!qrText.trim()) {
        alert("Please enter text or URL to generate a QR code.");
        qrContainer.style.display = "none";
        return;
    }

    qrContainer.style.display = "flex";

    new QRCode(qrContainer, {
        text: qrText,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function downloadQRCode() {
    const qrContainer = document.getElementById("qrcode").querySelector("img");
    if (qrContainer) {
        const qrImageURL = qrContainer.src;
        const link = document.createElement("a");
        link.href = qrImageURL;
        link.download = "qrcode.png";
        link.click();
    } else {
        alert("Please generate a QR code first.");
    }
}

function toggleTheme() {
    document.body.classList.toggle("neon-theme");
}
