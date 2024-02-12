"use client";

import React from "react";
import Navbar from "@/components/Navbar";

export default function Page() {
    const mainDiv = "h-full space-y-2 mt-8 flex flex-col justify-around lg:px-32 sm: px-6"
    const headerCn = "font-bold text-center text-gray-200 text-2xl mb-8"
    const listCn = "space-y-2"

    if(navigator.language.startsWith("tr")) {
        return (
            <div className={mainDiv}>
                <h2 className={headerCn}>Ürün Odaklı Mühendisin Özellikleri</h2>
                <ol className={listCn}>
                    <li>1. Ürün odaklı mühendisler, çalıştıkları ürüne gerçekten ilgi duyan ve ürün üzerindeki kararların
                        nasıl verildiğini merak eden mühendislerdir.
                    </li>
                    <li>2. İş yapış şekilleri, planlama şekilleri ve önceliklendirme şekilleri ürün odaklı mühendislik
                        prensiplerine dayanır.
                    </li>
                    <li>3. Ürünün gelişiminde rol almayı sever ve ürünü bir üst seviyeye taşımak
                        için çaba gösterirler.
                    </li>
                    <li>4. Ürün yöneticileriyle yakın çalışarak ürünün kullanıcılarına ne gibi
                        faydalar sağlayabileceğini analiz ederler.
                    </li>
                    <li>5. Meraklıdırlar ve her şeyin arkasındaki nedeni sorgularlar, ürünün nedenini ve kullanıcılara ne
                        gibi değerler sunabileceğini anlamak için çaba harcarlar.
                    </li>
                    <li>6. Diğer disiplinlerle iletişimde kalmayı severler ve kullanıcı arayüzü tasarımcıları, kullanıcı
                        deneyimi tasarımcıları, satışçılar, pazarlamacılar ve proje yöneticileri gibi farklı
                        departmanlarla etkileşim içinde olurlar.
                    </li>
                    <li>7. Ürün özelliklerini değerlendirirken mühendislik bakış açısını kullanır ve özelliklerin müşteriye
                        olan potansiyel etkisini dikkate alır.
                    </li>
                    <li>8. Uç durumlarla karşılaştıklarında dengeleyici çözümler bulma yeteneklerine sahiptirler ve
                        kullanıcıların ihtiyaçlarına uygun özellikler geliştirirler.
                    </li>
                    <li>9. Ürünün erken aşamalarında bile özellikleri test etme ve geri bildirim almak için yaratıcı yollar
                        bulurlar.
                    </li>
                    <li>10. Geliştirdikleri özelliklerin kullanıcılar tarafından nasıl karşılandığını sürekli olarak izler
                        ve geri bildirimlere dayanarak ürünü sürekli olarak iyileştirme çabası içindedirler.
                    </li>
                    <li>11. Ürün özelliklerini geliştirirken nedenlerini sorgular ve alternatif fikirler üretirler,
                        önerilerde bulunurlar ve bu önerilerin faydalı olup olmadığını değerlendirirler.
                    </li>
                    <li>12. Ürün yöneticisiyle güçlü bir bağ kurarlar ve ürünün vizyonunu ve stratejisini anlamak için yakın
                        işbirliği yaparlar.
                    </li>
                    <li>13. Kullanıcı araştırmalarına ve müşteri desteğine aktif olarak katılırlar ve bu bilgileri ürün
                        geliştirme sürecinde kullanırlar.
                    </li>
                    <li>14. Ürün özelliklerini belirleme konusunda pazarı ve rekabet ortamını anlamak için metrikler ve geri
                        bildirimlere güçlü bir vurgu yaparlar.
                    </li>
                </ol>
                <Navbar />
            </div>
        )
    } else {
        return (
            <div className={mainDiv}>
                <h2 className={headerCn}>Characteristics of Product-Minded Engineers</h2>
                <ol className={listCn}>
                    <li>1. Product-minded engineers are engineers who are genuinely interested in the product they work on
                        and curious about how decisions regarding the product are made.
                    </li>
                    <li>2. Their work methods, planning approaches, and prioritization methods are based on product-minded
                        engineering principles.
                    </li>
                    <li>3. Product-minded engineers enjoy playing a role in the development of the product and strive to
                        elevate the product to the next level.
                    </li>
                    <li>4. They work closely with product managers to analyze how the product can benefit its users.</li>
                    <li>5. They are curious and question the reasons behind everything, putting effort into understanding
                        the purpose of the product and what value it can offer to users.
                    </li>
                    <li>6. They enjoy staying in communication with other disciplines and interact with different
                        departments such as user interface designers, user experience designers, salespeople, marketers,
                        and project managers.
                    </li>
                    <li>7. When evaluating product features, they use an engineering perspective and consider the potential
                        impact of features on customers.
                    </li>
                    <li>8. They have the ability to find balancing solutions when faced with extreme cases and develop
                        features that meet the needs of users.
                    </li>
                    <li>9. Even in the early stages of the product, they find creative ways to test features and gather
                        feedback.
                    </li>
                    <li>10. They continuously monitor how users respond to the features they develop and strive to
                        constantly improve the product based on feedback.
                    </li>
                    <li>11. They question the reasons behind developing product features, generate alternative ideas, make
                        suggestions, and evaluate whether these suggestions are beneficial.
                    </li>
                    <li>12. They establish a strong connection with the product manager and collaborate closely to
                        understand the vision and strategy of the product.
                    </li>
                    <li>13. They actively participate in user research and customer support and use this information in the
                        product development process.
                    </li>
                    <li>14. They emphasize metrics and feedback to understand the market and competitive environment when
                        determining product features.
                    </li>
                </ol>
                <Navbar />
            </div>
        )
    }
}
