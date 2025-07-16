import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
const image_file = 'Aspose.jpg';
/*Add an image to end a PDF-file and save the "ResultImage.pdf"*/
const json = AsposePdfModule.AsposePdfAddImage(pdf_file, image_file, "ResultAddImage.pdf");
console.log("AsposePdfAddImage => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
