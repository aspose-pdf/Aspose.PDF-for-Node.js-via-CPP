import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Rotate PDF-pages and save the "ResultRotation.pdf"*/
const json = AsposePdfModule.AsposePdfRotateAllPages(pdf_file, AsposePdfModule.Rotation.on270, "ResultRotation.pdf");
console.log("AsposePdfRotateAllPages => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
