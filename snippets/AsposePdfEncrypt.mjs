import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Encrypt a PDF-file with passwords "user" and "owner", and save the "ResultEncrypt.pdf"*/
const json = AsposePdfModule.AsposePdfEncrypt(pdf_file, "user", "owner", AsposePdfModule.Permissions.PrintDocument, AsposePdfModule.CryptoAlgorithm.RC4x40, "ResultEncrypt.pdf");
console.log("AsposePdfEncrypt => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
