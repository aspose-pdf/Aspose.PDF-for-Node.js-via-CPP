import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Set number a page to split*/
const pageToSplit = 1;
/*Split to two PDF-files and save the "ResultSplit1.pdf", "ResultSplit2.pdf"*/
const json = AsposePdfModule.AsposePdfSplit2Files(pdf_file, pageToSplit, "ResultSplit1.pdf", "ResultSplit2.pdf");
console.log("AsposePdfSplit2Files => %O", json.errorCode == 0 ? [json.fileNameResult1, json.fileNameResult2] : json.errorText);
