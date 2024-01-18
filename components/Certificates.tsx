import React from "react";
import userData from "@/constants/data";
import {PiCertificateFill} from "react-icons/pi";

export default function Certificates() {
    return (
        <section className="bg-gray-900 py-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-row max-w-6xl mx-auto place-content-center lg:place-content-start">
                    <PiCertificateFill size={64} color={"white"} className={"self-center me-6"} />
                    <h1 className="text-4xl lg:text-8xl font-bold self-center pb-4">
                        Certificates
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:mt-10 gap-y-12">
                {userData.certificates.map((certificate: Certificate, idx) => (
                        <CertificateCard certificate={certificate} key={certificate.certificateLink} />
                ))}
            </div>
        </section>
    );
}

interface Certificate {
    title: string;
    institute: string;
    year: string;
    certificateLink: string;
}

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard = (certificate: CertificateCardProps) => {
    return (
        <div className="github-repo">
            <h1 className="font-semibold text-xl text-gray-200">
                {certificate.certificate.title}
            </h1>
            <p className="text-base font-normal my-2 text-gray-500">
                {certificate.certificate.institute}
            </p>
            <p className="text-base font-normal my-2 text-gray-500">
                {certificate.certificate.year}
            </p>
            <a
                href={certificate.certificate.certificateLink}
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
            >
                <p>View Certification </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                    &rarr;
                </div>
            </a>
        </div>
    );
};
