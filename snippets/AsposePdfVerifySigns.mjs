import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Verify the validity of digital signatures in a PDF-file*/
const json = AsposePdfModule.AsposePdfVerifySigns(pdf_file);
/*json.signs - array of signs: { signName: <string>, signStatus: <string {"VALID"|"INVALID"|"INACTIVE"}> }*/
console.log("AsposePdfVerifySigns => signs: %O", json.errorCode == 0 ? json.signs : json.errorText);
