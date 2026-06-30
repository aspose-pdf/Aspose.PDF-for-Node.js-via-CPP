import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Key PKCS7*/
const test_pfx_file = 'sign.pfx';
/*Signature appearance*/
const sign_img_file = 'sign.png';
/*Sign a PDF-file with detached digital signatures and save the "ResultSignPKCS7Detached.pdf"*/
const json = AsposePdfModule.AsposePdfSignPKCS7Detached(pdf_file, 1, test_pfx_file, "Pa$$w0rd2023", 100, 100, 200, 100, "Reason", "Contact", "Location", 1, sign_img_file, "ResultSignPKCS7Detached.pdf");
console.log("AsposePdfSignPKCS7Detached => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
