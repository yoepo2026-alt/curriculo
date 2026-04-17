'use client';

import { useState } from 'react';

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  pdfUrl?: string;
}

export interface CertificationsProps {
  title?: string;
  certifications: Certification[];
}

export default function Certifications({
  title = "Certificações",
  certifications
}: CertificationsProps) {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-slate-700 to-slate-600">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-600 p-6 rounded-lg border border-slate-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              {/* Ícone de certificado */}
              <div className="inline-block p-3 bg-blue-900 rounded-lg mb-4 group-hover:bg-blue-800 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a.5.5 0 00-.788 0l-.783 1.098A.5.5 0 019.35 4H8a.5.5 0 100 1h1.35a.5.5 0 00.476-.341l.783-1.098zM12.359 8.5L11 6.118l1.362-1.914A.5.5 0 0113 4h1.5a.5.5 0 01.447.276l1.414 2.121a.5.5 0 00.852-.526l-1.414-2.121A1.5 1.5 0 0014.5 3H13a1.5 1.5 0 00-1.359.768L10.277 5.882l-1.362-1.914A.5.5 0 008 3H6.5a.5.5 0 00-.447.276l-1.414 2.121a.5.5 0 00.852.526l1.414-2.121A1.5 1.5 0 006.5 4H8a1.5 1.5 0 001.359.768l1.362 1.914-1.362 1.914A.5.5 0 008 9H6.5a.5.5 0 00-.447.276l-1.414 2.121a.5.5 0 00.852.526l1.414-2.121A1.5 1.5 0 006.5 11H8a1.5 1.5 0 001.359.768l1.362 1.914 1.362-1.914A.5.5 0 0113 11h1.5a.5.5 0 00.447-.276l1.414-2.121a.5.5 0 00-.852-.526l-1.414 2.121A1.5 1.5 0 0014.5 10H13a1.5 1.5 0 00-1.359-.768z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {cert.name}
              </h3>

              <p className="text-blue-300 font-semibold text-sm mb-3">
                {cert.issuer}
              </p>

              <p className="text-slate-300 text-sm mb-4">
                {cert.date}
              </p>

              <div className="flex gap-2">
                {cert.pdfUrl && (
                  <button
                    onClick={() => setSelectedPdf(cert.pdfUrl || null)}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    PDF
                  </button>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 border-2 border-blue-400 text-blue-300 hover:bg-blue-900/40 text-sm font-semibold rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l4 4m0 0l-4-4m4 4V2" />
                    </svg>
                    Credencial
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para visualizar PDF */}
      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="bg-slate-700 w-screen h-screen flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do modal */}
            <div className="flex items-center justify-between p-4 border-b border-slate-600 bg-slate-800">
              <h3 className="text-lg font-bold text-white">
                Certificado
              </h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto bg-slate-700">
              <iframe
                src={selectedPdf}
                className="w-full h-full"
                title="Certificado PDF"
              />
            </div>

            {/* Footer com download */}
            <div className="p-4 border-t border-slate-600 flex gap-2 bg-slate-800">
              <a
                href={selectedPdf}
                download
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
              <button
                onClick={() => setSelectedPdf(null)}
                className="flex-1 px-4 py-2 border-2 border-slate-500 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>);}
