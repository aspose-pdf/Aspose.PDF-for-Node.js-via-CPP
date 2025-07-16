import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Convert a PDF-file to Doc and save the "ResultPDFtoDoc.doc"*/
const json = AsposePdfModule.AsposePdfToDoc(pdf_file, "ResultPDFtoDoc.doc");
console.log("AsposePdfToDoc => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
