import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Make booklet from a PDF-file and save the "ResultMakeBooklet.pdf"*/
const json = AsposePdfModule.AsposePdfMakeBooklet(pdf_file, "ResultMakeBooklet.pdf");
console.log("AsposePdfMakeBooklet => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
