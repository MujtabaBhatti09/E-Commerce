import { libre } from "@/src/app/layout"
import Link from "next/link"

// Terms and Conditions Page Data
export const termsAndConditions = [
    {
        title: "These Terms and Conditions May Change",
        content: <div className="">
            <p className="text-sm leading-6 whitespace-break-spaces">We reserve the right to update or modify these terms and conditions at any time without prior notice.  Your use of shop.company.com and shop.beetle.com.sg following any such change constitutes your agreement to follow and be bound by the terms and conditions as changed. For this reason, we encourage you to review these terms and conditions whenever you use this website.</p>
        </div>
    },
    {
        title: "Limitations of Liability",
        content: <div className="space-y-2">
            <p className="text-sm leading-6 whitespace-break-spaces">The Company Pte Ltd shall not assume any responsibility, and shall not be liable for, any damages to, or viruses that may infect, your computer, telecommunication equipment, or other property caused by or arising from your access to, use of, or browsing this website or your downloading of any materials, from this website. IN NO EVENT WILL THE COMPANY PRIVATE LIMITED NOR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS, AFFILIATES, AGENTS, SUCCESSORS, ASSIGNS, RETAIL PARTNERS NOR ANY PARTY INVOLVED IN THE CREATION, PRODUCTION OR TRANSMISSION OF THIS WEB SITE BE LIABLE TO ANY PARTY FOR ANY INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, THOSE RESULTING FROM LOST PROFITS, LOST DATA OR BUSINESS INTERRUPTION) ARISING OUT OF THE USE, INABILITY TO USE, OR THE RESULTS OF USE OF THIS WEB SITE, ANY WEB SITES LINKED TO THIS WEB SITE, OR THE MATERIALS, INFORMATION OR SERVICES CONTAINED AT ANY OR ALL SUCH SITES, WHETHER BASED ON WARRANTY, CONTRACT, TORT OR ANY OTHER LEGAL THEORY AND WHETHER OR NOT ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS OF LIABILITY DO NOT APPLY TO THE EXTENT PROHIBITED BY LAW. PLEASE REFER TO YOUR LOCAL LAWS FOR ANY SUCH PROHIBITIONS.</p>
            <p className="text-sm leading-6 whitespace-break-spaces">IN THE EVENT OF ANY PROBLEM WITH THIS WEBSITE OR ANY CONTENT, YOU AGREE THAT YOUR SOLE REMEDY IS TO CEASE USING THIS WEBSITE. IN THE EVENT OF ANY PROBLEM WITH THE PRODUCTS OR SERVICES THAT YOU HAVE PURCHASED ON OR THROUGH THIS WEB SITE, YOU AGREE THAT YOUR REMEDY, IF ANY, IS FROM THE MANUFACTURER OF SUCH PRODUCTS OR SUPPLIER OF SUCH SERVICES, IN ACCORDANCE WITH SUCH MANUFACTURER’S OR SUPPLIER’S WARRANTY, OR TO SEEK A RETURN AND REFUND FOR SUCH PRODUCT OR SERVICES IN ACCORDANCE WITH THE RETURNS AND REFUNDS POLICIES POSTED ON THIS WEB SITE. This site may include inaccuracies, mistakes or typographical errors. CharlesKeith.com does not warrant that the content will be uninterrupted or error free.</p>
        </div>
    },
    {
        title: "Copyright and Trademark",
        content: <div className="">
            <p className="text-sm leading-6 whitespace-break-spaces">Unless otherwise indicated, material on this website, including but not limited to texts, images, illustrations, software, audio clips, video clips, animation files, is subject to the copyright and trademark rights of The Company Private Limited. Consequently, the material on this website may not be copied, reproduced, modified, posted, transmitted, distributed, in whole or in part in any form whatsoever, without the prior written consent of The Company Private Limited. All rights reserved.</p>
        </div>
    },
    {
        title: "Products, Content and Specifications",
        content: <div className="">
            <p className="text-sm leading-6 whitespace-break-spaces">All features, content, specifications, products and prices of products and services described or depicted on this website are subject to change at any time without notice.  Certain weights, measures and similar descriptions are approximate and are provided for convenience purposes only.  We make all reasonable efforts to accurately display the attributes of our products, including the applicable colors; however, the actual color you see will depend on your computer system and we cannot guarantee that your computer will accurately display such colors.  The inclusion of any products or services in this website at a particular time does not imply or warrant that these products or services will be available at any time.  It is your responsibility to ascertain and obey all applicable local, state and international laws in regard to the possession, use and sale of any item purchased from this website. By placing an order, you represent that the products ordered will be used only in a lawful manner.</p>
        </div>
    },
    {
        title: "Shipping Limitations",
        content: <div className="">
            <p className="text-sm leading-6 whitespace-break-spaces">When an order is placed, it will be shipped to an address designated by the purchaser as long as that shipping address is compliant with the shipping restrictions contained on this website.  All purchases from this website are made pursuant to a shipment contract.  As a result, risk of loss and title for items purchased from this website pass to you upon delivery of the items to the carrier.  You are responsible for filing any claims with carriers for damaged and/or lost shipments.</p>
        </div>
    },
    {
        title: "Duties and Taxes",
        content: <div className="">
            <p className="text-sm leading-6 whitespace-break-spaces">You are responsible for duties and taxes outside Singapore. All items entering a foreign country are subject to customs inspection and assessment of the duties and taxes in accordance with that country’s national laws.</p>
        </div>
    },
    {
        title: "Your Account",
        content: <div className="">
            <p className="text-sm leading-6 whitespace-break-spaces">You are responsible for maintaining the confidentiality of your account and password information, and you agree to accept responsibility for all activities that occur under your account and password.  This website and The Company Pte Ltd reserves the right to refuse service, terminate accounts remove or edit content or cancel orders.</p>
            <p className="text-sm leading-6 whitespace-break-spaces">By placing an order, you warrant that you are over 18 years of age, and that you are providing shop.company.com or shop.beetle.com.sg with accurate, truthful information and that you have the authority to place the order.</p>
        </div>
    },
    {
        title: "Exchange and Refund Policy (Singapore Outlets Only)",
        content: <div className="">
            <p className="text-sm leading-6 whitespace-break-spaces">New, unused full-price merchandise purchased at store retail store may be exchange at any boutique with an original receipt within 7 days of purchase. After 7 days, the merchandise may not be exchanged.</p>
            <p className="text-sm leading-6 whitespace-break-spaces">We offer a no-refund policy on all merchandises, however, for merchandise qualifying for an exchange, item may be exchange for store credits which may be used at our Singapore outlets only.</p>
            <p className="text-sm leading-6 whitespace-break-spaces">Merchandise on sale may not be exchanged or returned. All merchandise must be returned in sellable condition, otherwise, an exchange would not be allowed.</p>
            <p className="text-sm leading-6 whitespace-break-spaces">We reserve the right to reject any form of exchange without the original receipt.</p>
        </div>
    },
    {
        title: "Exchange and Refund Policy (Online Shop)",
        content: <div className="">
            <p className="text-sm leading-6 whitespace-break-spaces">
                Electronic Communications
                <br />
                When you visit this website and/or send email to us, you consent to receive electronic communications from us. You agree that all agreements, notices, disclosures and other communications that we sent you electronically satisfy any legal requirement that such communications be in writing
            </p>
            <p className="text-sm leading-6 whitespace-break-spaces">
                Electronic Communications
                <br />
                The Company Private Limited makes no representative or warranty regarding the good working order or condition of this website, its suitability for use, or that its use will be uninterrupted or error-free. All information or material provided in this website to you â€œas isâ€ and without warranties of any kind, expressed or implied, including without limitation, warranties or conditions of merchantability, fitness, quality, durability or suitability for any particular purpose, or non-infringement.
            </p>
        </div>
    }
]

// Return and Exchange Policy Page Data
const returnListItems = [
    [
        "All items must be in their original packaging with product tags intact",
        "All items must be unworn, unused, unwashed and in its original condition",
        "Footwear should have no scuff marks on its outsole",
        "Originals receipts would need to be included",
        "All items would need to be purchased originally fromSingapore"
    ],
    [
        "The Company Pte Ltd",
        "Changi South Lane",
        "#03-01/03NanWahBuilding",
        "Singapore",
        "Tel: +65 6214 1490"
    ],
]

export const returnExchange = [
    {
        title: "RETURNS & EXCHANGES POLICY",
        content: <div className="space-y-2">
            <p className="text-sm">
                We want you to be happy with your purchase and we apologize if it is not. For whatever reason that you are not satisfied, we would be most happy to provide exchanges and returns for all items purchased from us if the following conditions are met :
            </p>
            <ul className="space-y-1">
                {returnListItems[0].map((list, index) => (
                    <li
                        key={index}
                        className="text-sm list-disc ml-4">
                        {list}
                    </li>
                ))}
            </ul>
            <p className="text-sm">
                If non of the above conditions are met, we regret to inform that we are unable to process any claims for exchanges or refund regardless that the items have been mailed back to us.<span className={`${libre.className} font-semibold italic`}>Sales item(s) are non-exchangeable nor returnable either in our retail boutique or via our online portal.</span>
            </p>
        </div>
    },
    {
        title: "VALIDITY FOR EXCHANGES & RETURNS",
        content: <div className="space-y-2">
            <p className="text-sm">
                All exchanges and returns would need to be raised within 10 days of the invoice date for Singapore orders, and 20 days for overseas orders. For local deliveries, there is an option to exchange at any of our boutiques within Singapore or through our online portal at <Link href={"/"}>www.company.com</Link>. All requests for returns however, would need to be strictly made online at <Link href={"/"}>www.company.com</Link> for both local and overseas deliveries.
            </p>
        </div>
    },
    {
        title: "EXCHANGES AT OUR BOUTIQUES",
        list: [
            "You will need to bring along your original invoice together with the item(s) in its original condition and packaging to any of our boutiques.",
            "You will be entitled to an exchange of any item(s) in the boutique immediately after evaluation by our retail associates that it is valid.",
            "If the value of the exchange item(s) is higher than the original item(s), you will be required to top up the difference in cash.",
            "There will be no refund if the value of the exchange item(s) is lower than the original item(s).",
            "No other forms of exchanges(such as boutique cash vouchers or online store credit) will be given at our boutiques."
        ]
    },
    {
        title: "EXCHANGES & RETURNS ONLINE",
        list: [
            "You will need to include your original invoice together with the item(s) in its original condition and packaging.",
            "Kindly print and fill up the Exchange/Return Request Form here and follow the steps indicated in the form for your exchange.",
            "Mail us your parcel via a traceable mode of postage.",
            "Wait for our email confirmation and you will be notified once your online Store Credit Voucher is ready.  Generally, the processing period is 5 working days upon receipt of your parcel.",
            "All requests for returns will be refunded via online Store Credit Vouchers only. Your online Store Credit Voucher is valid for 30 days and can be used for your next purchase online. It is strictly non refundable, non extendable, non exchangeable for cash and non exchangeable for boutique vouchers. The online Store Credit Voucher is applicable online only and cannot be used in our Retail boutiques.",
            "Online Store Credit Vouchers are to be used in a singular transaction and any excess amount not utilized, would not be refunded.",
            "Online Store Credit Vouchers given will be at the buying price of the product as stated in the original invoice. No refunds will be given for delivery charges incurred in the original, returned and onward shipping charges of exchanged items.",
            "However, if any of the products received is deemed defective or a wrong shipment, BeetleBug.com will bear the cost of shipping the item(s) back to you. Please note that all exchanges are subjected to stock availability and whilst we endeavour to ship a replacement item(s) back to you, we reserve the right to do an exchange by way of an item(s) of a similar value or providing online store credits or any other methods at the discretion of BeetleBug.com.",
            "No refunds will be given for taxes, duties, tariffs and excise charges levied for overseas orders either for refunds or exchanged items.",
            <span>All returns and exchanges made via our online portal at <Link href={"/"}>www.company.com</Link> would need to be shipped to :</span>,
        ],
        content: <ul className="space-y-1">
            {returnListItems[1].map((list, index) => (
                <li
                    key={index}
                    className="text-sm list-disc ml-4">
                    {list}
                </li>
            ))}
        </ul>
    },
    {
        title: "OTHER TERMS & CONDITIONS",
        list: [
            "All items that are returned and exchanged, can only be made once.",
            "We reserve the right and full discretion to disqualify you from enjoying free returns if the subsequent item(s) for return or exchange are of the same item(s) as a previous order",
            "Our returns and exchanges policy does not cover damage resulting from unique, accidental, or random damage that is the result of use by you or wear and tear of a product.",
            "BeetleBug makes no warranty in respect of any product, express or implied, including any implied warranties of merchantability, quality, compliance with description and fitness for a particular purpose.",
            "Such returns are at all times governed by the provisions of the Consumer Protection (Fair Trading) Act of Singapore.",
            "All decisions made by BeetleBug.com is final."
        ]
    },
    {
        title: "REPAIR POLICY",
        content: <div className="space-y-2">
            <p className="text-sm">
                We offer repair services for all our products. Kindly visit us at any of our boutiques in Singapore for more information or contact us atmarketing@company.com
            </p>
        </div>
    }
]