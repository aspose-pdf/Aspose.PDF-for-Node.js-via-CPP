import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Merge two PDF-files and save the "ResultMerge.pdf"*/
const json = AsposePdfModule.AsposePdfMerge2Files(pdf_file, pdf_file, "ResultMerge.pdf");
console.log("AsposePdfMerge2Files => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
