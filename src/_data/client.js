module.exports = {
    "name": "Patthira Thai Spa",
    "email": "patthirathaispa@gmail.com",
    "phoneForTel": "+441604946448",
    "phoneFormatted": "01604 946448",
    "openingHours": "Mon-Sat: 10am-8pm",
    "onlineBooking": "https://www.treatwell.co.uk/place/patthira-thai-spa/",
    "address": {
        "lineOne": "34 York Rd",
        "lineTwo": "",
        "city": "Northampton",
        "state": "",
        "zip": "NN1 5QH",
        "country": "UK",
        "mapLink": "https://maps.app.goo.gl/oNukY9Las2WTSCdT8"
    },
    "socials": {
        "facebook": "https://www.facebook.com/profile.php?id=61572085995736",
        "whatsapp": "https://wa.me/+447947424114",
        "googleReview": "",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://www.patthirathaispa.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.patthirathaispa.co.uk/#business",
            "name": "Patthira Thai Spa",
            "image": "https://www.patthirathaispa.co.uk/assets/svgs/logo.svg",
            "url": "https://www.patthirathaispa.co.uk",
            "telephone": "+441604946448",
            "email": "patthirathaispa@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "34 York Rd",
                "addressLocality": "Northampton",
                "postalCode": "NN1 5QH",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/oNukY9Las2WTSCdT8"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "10:00",
                    "closes": "20:00"
                }
            ],
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61572085995736"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.patthirathaispa.co.uk/#website",
            "url": "https://www.patthirathaispa.co.uk",
            "name": "Patthira Thai Spa",
            "publisher": {
                "@id": "https://www.patthirathaispa.co.uk/#business"
            }
        }
    }
};


