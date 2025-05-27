import React, { useContext, useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';


const WebinarCertificate = ({ name, courseTitle, date, certificateUrl }) => {

    
    
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  
  //to convert rgba to hex
  const hexToRgb = (hex) => {
  const sanitized = hex.replace('#', '');
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return rgb(r / 255, g / 255, b / 255);
};


  const generateCertificate = async (downloadMode = false) => {
    
    try {
      const existingPdfBytes = await fetch(certificateUrl).then(res => res.arrayBuffer());
      
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      const nameX = 350;
      const nameY = 330;
      const courseX = 360;
      const courseY = 275;
      const dateX = 380;
      const dateY = 220;

      firstPage.drawText(name, {
        x: nameX,
        y: nameY,
        size: 24,
        font,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(`"${courseTitle}"`, {
        x: courseX,
        y: courseY,
        size: 13,
        font,
        color: hexToRgb('#7232A1'),
      });

      firstPage.drawText(date, {
        x: dateX,
        y: dateY,
        size: 18,
        font,
        color: hexToRgb('#7232A1'),
      });

      const pdfBytes = await pdfDoc.save();

      if (downloadMode) {
        download(pdfBytes, `${name}_certificate.pdf`, 'application/pdf');
      } else {
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPreviewUrl(url);
        setIsFullscreen(true);
      }
    } catch (error) {
      console.error('Error generating certificate:', error);
    }
  };



  
  return (
    <div className='flex flex-col h-auto gap-2 w-100'>
      <div className="space-x-4">
        <button
          onClick={() => generateCertificate(false)}
          className="w-auto px-2 text-white bg-purple-600 rounded h-40px hover:bg-purple-700"
        >
          Preview
        </button>
        <button
          onClick={() => generateCertificate(true)}
          className="w-auto px-2 text-white bg-green-600 rounded h-40px hover:bg-green-700"
        >
          Download
        </button>
      </div>

      {isFullscreen && previewUrl && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black">
          <div className="absolute z-50 flex flex-col gap-3 left-5 top-50vh">
            <button
              onClick={() => setIsFullscreen(false)}
              className="w-auto px-2 text-white bg-red-600 rounded h-40px hover:bg-red-700"
            >
              Close Preview
            </button>

            
            <button
            onClick={() => generateCertificate(true)}
            className="w-auto px-2 text-white rounded bg-crossLightPurple h-40px hover:bg-crossDarkPurple"
            >
            Download Certificate
            </button>
            
          </div>
          
          <iframe
            src={previewUrl}
            title="Fullscreen Certificate Preview"
            className="w-full h-full"
            frameBorder="0"
          />
          
        </div>
      )}
    </div>
  );
};

export default WebinarCertificate;
