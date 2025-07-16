import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
const stamp_file = 'Aspose.jpg';
/*Add stamp to a PDF-file page #1 and save the "ResultAddStampPages.pdf"*/
const json = AsposePdfModule.AsposePdfAddStampPages(pdf_file, stamp_file, 0, 15, 15, 50, 50, AsposePdfModule.Rotation.on90, 0.7, 1, "ResultAddStampPages.pdf");
console.log("AsposePdfAddStampPages => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
