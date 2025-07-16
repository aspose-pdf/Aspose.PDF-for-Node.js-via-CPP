import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Add page number to a PDF-file and save the "ResultAddPageNum.pdf"*/
const json = AsposePdfModule.AsposePdfAddPageNum(pdf_file, "ResultAddPageNum.pdf");
console.log("AsposePdfAddPageNum => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
