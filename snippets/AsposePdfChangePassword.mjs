import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_encrypt_file = 'ResultEncrypt.pdf';
/*Change passwords of the PDF-file from "owner" to "newowner" and save the "ResultPdfChangePassword.pdf"*/
const json = AsposePdfModule.AsposePdfChangePassword(pdf_encrypt_file, "owner", "newuser", "newowner", "ResultPdfChangePassword.pdf");
console.log("AsposePdfChangePassword => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
