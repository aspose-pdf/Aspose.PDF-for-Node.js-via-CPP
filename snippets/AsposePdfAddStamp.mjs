import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
const stamp_file = 'Aspose.jpg';
/*Add stamp to a PDF-file and save the "ResultAddStamp.pdf"*/
const json = AsposePdfModule.AsposePdfAddStamp(pdf_file, stamp_file, 0, 5, 5, 40, 40, AsposePdfModule.Rotation.on270, 0.5, "ResultAddStamp.pdf");
console.log("AsposePdfAddStamp => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
