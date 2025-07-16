const AsposePdf = require('asposepdfnodejs');
const pdf_encrypt_file = 'ResultEncrypt.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Decrypt a PDF-file with password is "owner" and save the "ResultDecrypt.pdf"*/
    const json = AsposePdfModule.AsposePdfDecrypt(pdf_encrypt_file, "owner", "ResultDecrypt.pdf");
    console.log("AsposePdfDecrypt => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});