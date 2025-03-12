// Dữ liệu về các chương trình affiliate
const affiliatePrograms = [
    // Crypto Exchange Programs (1-15)
    {
        id: 1,
        name: "Binance",
        logo: "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
        category: "Crypto Exchange",
        commission: "Up to 40% commission",
        payoutTime: "Daily",
        established: 2017,
        monthlyTraffic: "28.6M/mo",
        paymentMethods: [
            {name: "BTC", icon: "fab fa-bitcoin", class: "payment-crypto"},
            {name: "ETH", icon: "fab fa-ethereum", class: "payment-crypto"},
            {name: "USDT", icon: "fas fa-coins", class: "payment-crypto"}
        ],
        trafficData: [85, 72, 86, 81, 84, 86, 83],
        url: "https://www.binance.com",
        affiliateUrl: "https://www.binance.com/en/activity/referral"
    },
    {
        id: 2,
        name: "Bybit",
        logo: "https://www.bybit.com/bbc-static/inherit/assets/img/logo-dark.svg",
        category: "Crypto Exchange",
        commission: "Up to 50% commission",
        payoutTime: "Daily",
        established: 2018,
        monthlyTraffic: "10.2M/mo",
        paymentMethods: [
            {name: "BTC", icon: "fab fa-bitcoin", class: "payment-crypto"},
            {name: "USDT", icon: "fas fa-coins", class: "payment-crypto"},
            {name: "ETH", icon: "fab fa-ethereum", class: "payment-crypto"}
        ],
        trafficData: [60, 68, 75, 76, 79, 80, 78],
        url: "https://www.bybit.com",
        affiliateUrl: "https://www.bybit.com/en-US/affiliate"
    },
    {
        id: 3,
        name: "Coinbase",
        logo: "https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg",
        category: "Crypto Exchange",
        commission: "50% of trading fees for 3 months",
        payoutTime: "Monthly",
        established: 2012,
        monthlyTraffic: "88.5M/mo",
        paymentMethods: [
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "ACH", icon: "fas fa-money-check", class: "payment-bank"}
        ],
        trafficData: [90, 88, 85, 92, 89, 85, 90],
        url: "https://www.coinbase.com",
        affiliateUrl: "https://www.coinbase.com/affiliates"
    },
    {
        id: 4,
        name: "OKX",
        logo: "https://www.okx.com/cdn/assets/imgs/221/E5B0BF952FD37A38.png",
        category: "Crypto Exchange",
        commission: "Up to 40% commission",
        payoutTime: "Weekly",
        established: 2017,
        monthlyTraffic: "8.2M/mo",
        paymentMethods: [
            {name: "BTC", icon: "fab fa-bitcoin", class: "payment-crypto"},
            {name: "USDT", icon: "fas fa-coins", class: "payment-crypto"},
            {name: "OKB", icon: "fas fa-coins", class: "payment-crypto"}
        ],
        trafficData: [45, 52, 58, 62, 68, 71, 73],
        url: "https://www.okx.com",
        affiliateUrl: "https://www.okx.com/affiliate"
    },
    {
        id: 5,
        name: "Upbit",
        logo: "https://static.upbit.com/logos/upbit-symbol.png",
        category: "Crypto Exchange",
        commission: "Up to 30% commission",
        payoutTime: "Monthly",
        established: 2017,
        monthlyTraffic: "6.7M/mo",
        paymentMethods: [
            {name: "KRW", icon: "fas fa-won-sign", class: "payment-bank"},
            {name: "BTC", icon: "fab fa-bitcoin", class: "payment-crypto"}
        ],
        trafficData: [65, 70, 75, 60, 55, 70, 72],
        similarWeb: {
            value: "6.7M",
            change: "0%",
            trend: "neutral",
            source: "SimilarWeb May 2023"
        },
        url: "https://upbit.com/affiliate",
        affiliateUrl: "https://upbit.com/affiliate"
    },
    {
        id: 6,
        name: "Bitget",
        logo: "https://static.bitget.com/logo/bitget_logo.svg",
        category: "Crypto Exchange",
        commission: "Up to 60% commission",
        payoutTime: "Weekly",
        established: 2018,
        monthlyTraffic: "8.2M/mo",
        paymentMethods: [
            {name: "BTC", icon: "fab fa-bitcoin", class: "payment-crypto"},
            {name: "USDT", icon: "fas fa-coins", class: "payment-crypto"},
            {name: "ETH", icon: "fab fa-ethereum", class: "payment-crypto"}
        ],
        trafficData: [60, 65, 75, 68, 72, 78, 79],
        url: "https://www.bitget.com/en/referral",
        affiliateUrl: "https://www.bitget.com/en/referral"
    },
    {
        id: 7,
        name: "MEXC",
        logo: "https://www.mexc.com/favicon.ico",
        category: "Crypto Exchange",
        commission: "50% trading fee commission",
        payoutTime: "Daily",
        established: 2018,
        monthlyTraffic: "12.3M/mo",
        paymentMethods: [
            {name: "BTC", icon: "fab fa-bitcoin", class: "payment-crypto"},
            {name: "USDT", icon: "fas fa-coins", class: "payment-crypto"},
            {name: "ETH", icon: "fab fa-ethereum", class: "payment-crypto"}
        ],
        trafficData: [62, 68, 72, 75, 78, 73, 70],
        url: "https://www.mexc.com/affiliate",
        affiliateUrl: "https://www.mexc.com/affiliate"
    },
    {
        id: 8,
        name: "KuCoin",
        logo: "https://cryptologos.cc/logos/kucoin-token-kcs-logo.png",
        category: "Crypto Exchange",
        commission: "Up to 45% commission",
        payoutTime: "Weekly",
        established: 2017,
        monthlyTraffic: "3.5M/mo",
        paymentMethods: ["BTC", "USDT", "KCS", "+45 more"],
        trafficData: [55, 58, 62, 65, 70, 68, 64],
        url: "https://www.kucoin.com/affiliate",
        affiliateUrl: "https://www.kucoin.com/affiliate"
    },
    {
        id: 9,
        name: "Gate.io",
        logo: "https://cryptologos.cc/logos/gate-token-gt-logo.png",
        category: "Crypto Exchange",
        commission: "Up to 30% commission",
        payoutTime: "Weekly",
        established: 2013,
        monthlyTraffic: "7.8M/mo",
        paymentMethods: ["BTC", "USDT", "GT", "+19 more"],
        trafficData: [60, 65, 70, 73, 68, 65, 62],
        url: "https://www.gate.io/referral_program",
        affiliateUrl: "https://www.gate.io/referral_program"
    },
    {
        id: 10,
        name: "Kraken",
        logo: "https://cryptologos.cc/logos/kraken-logo.png",
        category: "Crypto Exchange",
        commission: "Up to 20% commission",
        payoutTime: "Monthly",
        established: 2011,
        monthlyTraffic: "5.3M/mo",
        paymentMethods: ["USD", "EUR", "GBP", "+5 more"],
        trafficData: [58, 62, 65, 68, 72, 70, 68],
        url: "https://www.kraken.com/affiliate",
        affiliateUrl: "https://www.kraken.com/affiliate"
    },
    {
        id: 11,
        name: "Phemex",
        logo: "https://cryptologos.cc/logos/phemex-logo.png",
        category: "Crypto Exchange",
        commission: "Up to 50% commission",
        payoutTime: "Weekly",
        established: 2019,
        monthlyTraffic: "4.8M/mo",
        paymentMethods: ["BTC", "USDT"],
        trafficData: [50, 55, 58, 62, 65, 62, 60],
        url: "https://phemex.com/referral",
        affiliateUrl: "https://phemex.com/referral"
    },
    {
        id: 12,
        name: "Bithumb",
        logo: "https://cryptologos.cc/logos/bithumb-logo.png",
        category: "Crypto Exchange",
        commission: "Up to 30% commission",
        payoutTime: "Bi-weekly",
        established: 2014,
        monthlyTraffic: "7.9M/mo",
        paymentMethods: ["KRW", "BTC"],
        trafficData: [52, 55, 60, 58, 55, 52, 50],
        url: "https://www.bithumb.com/affiliate",
        affiliateUrl: "https://www.bithumb.com/affiliate"
    },
    {
        id: 13,
        name: "WhiteBIT",
        logo: "https://cryptologos.cc/logos/whitebit-logo.png",
        category: "Crypto Exchange",
        commission: "Up to 40% commission",
        payoutTime: "Weekly",
        established: 2018,
        monthlyTraffic: "4.2M/mo",
        paymentMethods: ["BTC", "USDT", "EUR"],
        trafficData: [45, 48, 52, 55, 58, 56, 54],
        url: "https://whitebit.com/affiliate",
        affiliateUrl: "https://whitebit.com/affiliate"
    },
    {
        id: 14,
        name: "DigiFinex",
        logo: "https://cryptologos.cc/logos/digifinex-dft-logo.png",
        category: "Crypto Exchange",
        commission: "Up to 50% commission",
        payoutTime: "Weekly",
        established: 2017,
        monthlyTraffic: "3.5M/mo",
        paymentMethods: ["BTC", "USDT"],
        trafficData: [42, 45, 48, 50, 53, 51, 49],
        url: "https://www.digifinex.com/en-ww/affiliate",
        affiliateUrl: "https://www.digifinex.com/en-ww/affiliate"
    },
    {
        id: 15,
        name: "Bitmart",
        logo: "https://cryptologos.cc/logos/bitmart-bmt-logo.png",
        category: "Crypto Exchange",
        commission: "Up to 40% commission",
        payoutTime: "Weekly",
        established: 2017,
        monthlyTraffic: "5.6M/mo",
        paymentMethods: ["BTC", "USDT", "ETH"],
        trafficData: [40, 43, 47, 50, 53, 51, 48],
        url: "https://www.bitmart.com/affiliate",
        affiliateUrl: "https://www.bitmart.com/affiliate"
    },
    
    // AI Video Programs (16-25)
    {
        id: 16,
        name: "InVideo",
        logo: "https://assets.invideo.io/new_assets/img/logo.svg",
        category: "AI Video",
        commission: "30% recurring commission",
        payoutTime: "Monthly",
        established: 2017,
        monthlyTraffic: "3.5M/mo",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "Wise", icon: "fas fa-exchange-alt", class: "payment-wise"}
        ],
        trafficData: [28, 32, 35, 38, 42, 45, 48],
        url: "https://invideo.io",
        affiliateUrl: "https://invideo.io/affiliates"
    },
    {
        id: 17,
        name: "Synthesia",
        logo: "https://assets-global.website-files.com/61dc0796f359b6145bc3902d/62b0de4366968834420b8276_OG%20Image%20(5).png",
        category: "AI Video",
        commission: "30% recurring for life",
        payoutTime: "Monthly",
        established: 2019,
        monthlyTraffic: "2.8M/mo",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "Wise", icon: "fas fa-exchange-alt", class: "payment-wise"}
        ],
        trafficData: [22, 25, 29, 34, 39, 42, 45],
        url: "https://www.synthesia.io",
        affiliateUrl: "https://www.synthesia.io/partners/affiliates"
    },
    {
        id: 18,
        name: "Runway",
        logo: "https://assets-global.website-files.com/5d56cb37dc0dc86ec4162a5f/650b6d7b6c82f92aa9688c5b_Logo.svg",
        category: "AI Video",
        commission: "20% recurring commission",
        payoutTime: "Monthly",
        established: 2018,
        monthlyTraffic: "3.8M/mo",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Stripe", icon: "fab fa-stripe", class: "payment-stripe"}
        ],
        trafficData: [55, 60, 65, 70, 68, 72, 70],
        url: "https://runwayml.com/partners/",
        affiliateUrl: "https://runwayml.com/affiliate"
    },
    {
        id: 19,
        name: "Descript",
        logo: "https://www.descript.com/favicon.ico",
        category: "AI Video",
        commission: "20% on all referrals",
        payoutTime: "Monthly",
        established: 2017,
        monthlyTraffic: "5.2M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [65, 70, 75, 78, 72, 75, 70],
        url: "https://www.descript.com/affiliates",
        affiliateUrl: "https://www.descript.com/affiliate"
    },
    {
        id: 20,
        name: "Pictory",
        logo: "https://app.pictory.ai/img/pictory-primary.svg",
        category: "AI Video",
        commission: "30% recurring for life",
        payoutTime: "Monthly",
        established: 2020,
        monthlyTraffic: "1.2M/mo",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"}
        ],
        trafficData: [15, 18, 22, 25, 28, 32, 35],
        url: "https://pictory.ai",
        affiliateUrl: "https://pictory.ai/refer"
    },
    {
        id: 21,
        name: "HeyGen",
        logo: "https://assets-global.website-files.com/63f580596efa74629ceecdf5/642031a4c42d1211aec72d8a_Favicon-32x32.png",
        category: "AI Video",
        commission: "25% on all referrals",
        payoutTime: "Monthly",
        established: 2021,
        monthlyTraffic: "2.9M/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [45, 50, 55, 60, 65, 70, 75],
        url: "https://www.heygen.com/affiliate",
        affiliateUrl: "https://www.heygen.com/affiliate"
    },
    {
        id: 22,
        name: "Elai.io",
        logo: "https://elai.io/favicon.ico",
        category: "AI Video",
        commission: "20% recurring commission",
        payoutTime: "Monthly",
        established: 2019,
        monthlyTraffic: "950K/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [30, 35, 40, 45, 50, 48, 45],
        url: "https://elai.io/affiliate-program",
        affiliateUrl: "https://elai.io/affiliate-program"
    },
    {
        id: 23,
        name: "VEED.IO",
        logo: "https://www.veed.io/favicon.ico",
        category: "AI Video",
        commission: "15% lifetime commission",
        payoutTime: "Monthly",
        established: 2018,
        monthlyTraffic: "3.1M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [55, 58, 62, 65, 68, 65, 60],
        url: "https://www.veed.io/affiliate",
        affiliateUrl: "https://www.veed.io/affiliate"
    },
    {
        id: 24,
        name: "Kapwing",
        logo: "https://www.kapwing.com/favicon.ico",
        category: "AI Video",
        commission: "20% commission",
        payoutTime: "Monthly",
        established: 2018,
        monthlyTraffic: "2.7M/mo",
        paymentMethods: ["PayPal", "Venmo"],
        trafficData: [48, 52, 55, 58, 62, 60, 58],
        url: "https://www.kapwing.com/affiliate",
        affiliateUrl: "https://www.kapwing.com/affiliate"
    },
    {
        id: 25,
        name: "FlexClip",
        logo: "https://www.flexclip.com/favicon.ico",
        category: "AI Video",
        commission: "30% commission on sales",
        payoutTime: "Monthly",
        established: 2019,
        monthlyTraffic: "2.2M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [45, 48, 52, 55, 58, 56, 54],
        url: "https://www.flexclip.com/affiliate.html",
        affiliateUrl: "https://www.flexclip.com/affiliate.html"
    },
    
    // AI SEO Programs (26-35)
    {
        id: 26,
        name: "Surfer SEO",
        logo: "https://surferseo.com/favicon.ico",
        category: "AI SEO",
        commission: "30% recurring commission",
        payoutTime: "Monthly",
        established: 2017,
        monthlyTraffic: "1.5M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [60, 65, 70, 75, 78, 75, 72],
        url: "https://surferseo.com/affiliates/",
        affiliateUrl: "https://surferseo.com/affiliate"
    },
    {
        id: 27,
        name: "SE Ranking",
        logo: "https://seranking.com/favicon.ico",
        category: "AI SEO",
        commission: "Up to 30% recurring",
        payoutTime: "Monthly",
        established: 2013,
        monthlyTraffic: "1.2M/mo",
        paymentMethods: ["PayPal", "Bank Transfer", "Bitcoin"],
        trafficData: [58, 62, 65, 68, 72, 70, 68],
        url: "https://seranking.com/affiliate.html",
        affiliateUrl: "https://seranking.com/affiliate"
    },
    {
        id: 28,
        name: "Semrush",
        logo: "https://cdn.semrush.com/static/index/semrush-logo.svg",
        category: "AI SEO",
        commission: "40% commission for 1st month, 15% recurring",
        payoutTime: "Monthly",
        established: 2008,
        monthlyTraffic: "25.5M/mo",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "Wise", icon: "fas fa-exchange-alt", class: "payment-wise"}
        ],
        trafficData: [68, 72, 75, 77, 76, 79, 80],
        url: "https://www.semrush.com",
        affiliateUrl: "https://www.semrush.com/affiliate/"
    },
    {
        id: 29,
        name: "Ahrefs",
        logo: "https://ahrefs.com/favicon.ico",
        category: "AI SEO",
        commission: "Up to $275 per referral",
        payoutTime: "Monthly",
        established: 2011,
        monthlyTraffic: "28M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [72, 75, 78, 82, 85, 82, 80],
        url: "https://ahrefs.com/affiliates",
        affiliateUrl: "https://ahrefs.com/affiliate"
    },
    {
        id: 30,
        name: "Rank Math",
        logo: "https://rankmath.com/favicon.ico",
        category: "AI SEO",
        commission: "30% recurring commission",
        payoutTime: "Monthly",
        established: 2018,
        monthlyTraffic: "1.8M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [60, 65, 68, 72, 75, 72, 70],
        url: "https://rankmath.com/affiliates/",
        affiliateUrl: "https://rankmath.com/affiliate"
    },
    {
        id: 31,
        name: "Frase.io",
        logo: "https://frase.io/wp-content/uploads/2019/11/favicon-1.png",
        category: "AI SEO",
        commission: "20% recurring commission",
        payoutTime: "Monthly",
        established: 2016,
        monthlyTraffic: "850K/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [48, 52, 55, 58, 62, 60, 58],
        url: "https://frase.io/affiliate-program/",
        affiliateUrl: "https://frase.io/affiliate-program/"
    },
    {
        id: 32,
        name: "Jasper AI",
        logo: "https://www.jasper.ai/favicon.ico",
        category: "AI SEO",
        commission: "30% recurring for 12 months",
        payoutTime: "Monthly",
        established: 2021,
        monthlyTraffic: "3.5M/mo",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "ACH", icon: "fas fa-university", class: "payment-bank"},
            {name: "Crypto", icon: "fab fa-bitcoin", class: "payment-crypto"}
        ],
        trafficData: [65, 68, 72, 75, 78, 75, 72],
        url: "https://www.jasper.ai",
        affiliateUrl: "https://www.jasper.ai/partners"
    },
    {
        id: 33,
        name: "MarketMuse",
        logo: "https://www.marketmuse.com/favicon.ico",
        category: "AI SEO",
        commission: "25% recurring commission",
        payoutTime: "Monthly",
        established: 2015,
        monthlyTraffic: "580K/mo",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "Wise", icon: "fas fa-exchange-alt", class: "payment-wise"}
        ],
        trafficData: [45, 48, 52, 55, 58, 55, 52],
        url: "https://www.marketmuse.com",
        affiliateUrl: "https://www.marketmuse.com/affiliate-program/"
    },
    {
        id: 34,
        name: "Scalenut",
        logo: "https://scalenut.s3.amazonaws.com/app/favicon-32x32.png",
        category: "AI SEO",
        commission: "35% lifetime commission",
        payoutTime: "Monthly",
        established: 2021,
        monthlyTraffic: "620K/mo",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Stripe", icon: "fab fa-stripe", class: "payment-stripe"},
            {name: "Wire", icon: "fas fa-university", class: "payment-bank"}
        ],
        trafficData: [42, 45, 48, 52, 55, 52, 50],
        url: "https://www.scalenut.com",
        affiliateUrl: "https://www.scalenut.com/affiliate-program"
    },
    {
        id: 35,
        name: "WordAI",
        logo: "https://wordai.com/favicon.ico",
        category: "AI SEO",
        commission: "20% lifetime commission",
        payoutTime: "Monthly",
        established: 2011,
        monthlyTraffic: "750K/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [40, 42, 45, 48, 52, 50, 48],
        url: "https://wordai.com/affiliate-program",
        affiliateUrl: "https://wordai.com/affiliate-program"
    },
    
    // AI Productivity Programs (36-45)
    {
        id: 36,
        name: "Notion",
        logo: "https://www.notion.so/images/favicon.ico",
        category: "AI Productivity",
        commission: "$5 per sign up + 20% recurring",
        payoutTime: "Monthly",
        established: 2016,
        monthlyTraffic: "42M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [85, 88, 92, 95, 92, 90, 88],
        url: "https://www.notion.so/affiliates",
        affiliateUrl: "https://www.notion.so/affiliates"
    },
    {
        id: 37,
        name: "Taskade",
        logo: "https://www.taskade.com/static/images/favicon.ico",
        category: "AI Productivity",
        commission: "30% lifetime commission",
        payoutTime: "Monthly",
        established: 2017,
        monthlyTraffic: "1.8M/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [60, 65, 68, 72, 75, 72, 70],
        url: "https://www.taskade.com/affiliate",
        affiliateUrl: "https://www.taskade.com/affiliate"
    },
    {
        id: 38,
        name: "Otter.ai",
        logo: "https://otter.ai/favicon.ico",
        category: "AI Productivity",
        commission: "20% recurring commission",
        payoutTime: "Monthly",
        established: 2016,
        monthlyTraffic: "6.5M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [65, 68, 72, 75, 78, 76, 74],
        url: "https://otter.ai/affiliate-program",
        affiliateUrl: "https://otter.ai/affiliate-program"
    },
    {
        id: 39,
        name: "ClickUp",
        logo: "https://clickup.com/favicon.ico",
        category: "AI Productivity",
        commission: "Up to 40% recurring revenue",
        payoutTime: "Monthly",
        established: 2017,
        monthlyTraffic: "12.5M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [72, 75, 78, 82, 85, 82, 80],
        url: "https://clickup.com/affiliates",
        affiliateUrl: "https://clickup.com/affiliate"
    },
    {
        id: 40,
        name: "Zapier",
        logo: "https://zapier.com/favicon.ico",
        category: "AI Productivity",
        commission: "20% recurring for 12 months",
        payoutTime: "Monthly",
        established: 2011,
        monthlyTraffic: "18M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [78, 82, 85, 88, 85, 82, 80],
        url: "https://zapier.com/affiliate",
        affiliateUrl: "https://zapier.com/affiliate"
    },
    {
        id: 41,
        name: "Grammarly",
        logo: "https://www.grammarly.com/favicon.ico",
        category: "AI Productivity",
        commission: "$20 per referral",
        payoutTime: "Monthly",
        established: 2009,
        monthlyTraffic: "30M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [82, 85, 88, 92, 90, 88, 85],
        url: "https://www.grammarly.com/affiliates",
        affiliateUrl: "https://www.grammarly.com/affiliate"
    },
    {
        id: 42,
        name: "Fireflies.ai",
        logo: "https://fireflies.ai/favicon.ico",
        category: "AI Productivity",
        commission: "25% recurring commission",
        payoutTime: "Monthly",
        established: 2016,
        monthlyTraffic: "1.1M/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [58, 62, 65, 68, 72, 70, 68],
        url: "https://fireflies.ai/affiliate",
        affiliateUrl: "https://fireflies.ai/affiliate"
    },
    {
        id: 43,
        name: "Motion",
        logo: "https://www.usemotion.com/favicon.ico",
        category: "AI Productivity",
        commission: "20% recurring revenue",
        payoutTime: "Monthly",
        established: 2019,
        monthlyTraffic: "950K/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [52, 55, 58, 62, 65, 62, 60],
        url: "https://www.usemotion.com/affiliate",
        affiliateUrl: "https://www.usemotion.com/affiliate"
    },
    {
        id: 44,
        name: "Raycast",
        logo: "https://www.raycast.com/favicon.ico",
        category: "AI Productivity",
        commission: "30% recurring for 12 months",
        payoutTime: "Monthly",
        established: 2020,
        monthlyTraffic: "720K/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [48, 52, 55, 58, 55, 52, 50],
        url: "https://www.raycast.com/affiliate",
        affiliateUrl: "https://www.raycast.com/affiliate"
    },
    {
        id: 45,
        name: "Mem.ai",
        logo: "https://mem.ai/favicon.ico",
        category: "AI Productivity",
        commission: "15% recurring commission",
        payoutTime: "Monthly",
        established: 2019,
        monthlyTraffic: "580K/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [45, 48, 52, 55, 52, 50, 48],
        url: "https://mem.ai/affiliate",
        affiliateUrl: "https://mem.ai/affiliate"
    },
    
    // AI Agents Programs (46-55)
    {
        id: 46,
        name: "Anthropic Claude",
        logo: "https://www.anthropic.com/favicon.ico",
        category: "AI Agents",
        commission: "25% for first 3 months",
        payoutTime: "Monthly",
        established: 2021,
        monthlyTraffic: "22M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [75, 78, 82, 85, 88, 90, 92],
        url: "https://www.anthropic.com/partners",
        affiliateUrl: "https://www.anthropic.com/partners"
    },
    {
        id: 47,
        name: "OpenAI (ChatGPT)",
        logo: "https://openai.com/favicon.ico",
        category: "AI Agents",
        commission: "$5 per ChatGPT Plus sign-up",
        payoutTime: "Monthly",
        established: 2015,
        monthlyTraffic: "1.8B/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [92, 95, 98, 95, 92, 90, 88],
        url: "https://openai.com/affiliates",
        affiliateUrl: "https://openai.com/affiliate"
    },
    {
        id: 48,
        name: "Perplexity AI",
        logo: "https://www.perplexity.ai/favicon.ico",
        category: "AI Agents",
        commission: "30% for first year",
        payoutTime: "Monthly",
        established: 2022,
        monthlyTraffic: "50M/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [80, 82, 85, 88, 92, 95, 98],
        url: "https://www.perplexity.ai/affiliate",
        affiliateUrl: "https://www.perplexity.ai/affiliate"
    },
    {
        id: 49,
        name: "You.com",
        logo: "https://you.com/favicon.ico",
        category: "AI Agents",
        commission: "20% recurring commission",
        payoutTime: "Monthly",
        established: 2020,
        monthlyTraffic: "38M/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [75, 78, 82, 85, 88, 85, 82],
        url: "https://you.com/affiliates",
        affiliateUrl: "https://you.com/affiliate"
    },
    {
        id: 50,
        name: "Character.AI",
        logo: "https://character.ai/favicon.ico",
        category: "AI Agents",
        commission: "$10 per paid subscription",
        payoutTime: "Monthly",
        established: 2021,
        monthlyTraffic: "120M/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [85, 88, 92, 95, 98, 95, 92],
        url: "https://character.ai/affiliate",
        affiliateUrl: "https://character.ai/affiliate"
    },
    {
        id: 51,
        name: "Poe (Quora)",
        logo: "https://poe.com/favicon.ico",
        category: "AI Agents",
        commission: "15% recurring commission",
        payoutTime: "Monthly",
        established: 2022,
        monthlyTraffic: "25M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [70, 75, 78, 82, 85, 82, 80],
        url: "https://poe.com/affiliate",
        affiliateUrl: "https://poe.com/affiliate"
    },
    {
        id: 52,
        name: "Replika",
        logo: "https://replika.com/favicon.ico",
        category: "AI Agents",
        commission: "30% on first purchase",
        payoutTime: "Monthly",
        established: 2017,
        monthlyTraffic: "15M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [65, 68, 72, 75, 78, 75, 72],
        url: "https://replika.com/affiliate",
        affiliateUrl: "https://replika.com/affiliate"
    },
    {
        id: 53,
        name: "HuggingFace",
        logo: "https://huggingface.co/favicon.ico",
        category: "AI Agents",
        commission: "20% on Pro subscriptions",
        payoutTime: "Monthly",
        established: 2016,
        monthlyTraffic: "32M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [72, 75, 78, 82, 85, 82, 80],
        url: "https://huggingface.co/affiliates",
        affiliateUrl: "https://huggingface.co/affiliate"
    },
    {
        id: 54,
        name: "Bard (Gemini)",
        logo: "https://bard.google.com/favicon.ico",
        category: "AI Agents",
        commission: "$8 per Gemini Advanced subscription",
        payoutTime: "Monthly",
        established: 2023,
        monthlyTraffic: "65M/mo",
        paymentMethods: ["PayPal", "Bank Transfer"],
        trafficData: [80, 85, 88, 92, 95, 92, 90],
        url: "https://gemini.google.com/affiliate",
        affiliateUrl: "https://gemini.google.com/affiliate"
    },
    {
        id: 55,
        name: "Cohere",
        logo: "https://cohere.com/favicon.ico",
        category: "AI Agents",
        commission: "15% recurring commission",
        payoutTime: "Monthly",
        established: 2019,
        monthlyTraffic: "3.5M/mo",
        paymentMethods: ["PayPal", "Stripe"],
        trafficData: [60, 62, 65, 68, 70, 72, 75],
        url: "https://cohere.com/partners",
        affiliateUrl: "https://cohere.com/partners"
    }
];

// Thêm hoặc cập nhật dữ liệu các chương trình không có payment methods đúng
const additionalAffiliateData = [
    {
        id: 27,
        name: "SE Ranking",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "BTC", icon: "fab fa-bitcoin", class: "payment-crypto"}
        ]
    },
    {
        id: 33,
        name: "MarketMuse",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "Wise", icon: "fas fa-exchange-alt", class: "payment-wise"}
        ]
    },
    {
        id: 28,
        name: "Semrush",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "Wise", icon: "fas fa-exchange-alt", class: "payment-wise"}
        ]
    },
    {
        id: 29,
        name: "Ahrefs",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "Wise", icon: "fas fa-exchange-alt", class: "payment-wise"}
        ]
    },
    {
        id: 30,
        name: "Rank Math",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"},
            {name: "BTC", icon: "fab fa-bitcoin", class: "payment-crypto"}
        ]
    },
    {
        id: 31,
        name: "Frase.io",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Stripe", icon: "fab fa-stripe", class: "payment-stripe"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"}
        ]
    },
    {
        id: 32,
        name: "Jasper AI",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Stripe", icon: "fab fa-stripe", class: "payment-stripe"},
            {name: "Wire", icon: "fas fa-university", class: "payment-bank"}
        ]
    },
    {
        id: 34,
        name: "Scalenut",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Stripe", icon: "fab fa-stripe", class: "payment-stripe"},
            {name: "Wise", icon: "fas fa-exchange-alt", class: "payment-wise"}
        ]
    },
    {
        id: 35,
        name: "WordAI",
        paymentMethods: [
            {name: "PayPal", icon: "fab fa-paypal", class: "payment-paypal"},
            {name: "Card", icon: "fas fa-credit-card", class: "payment-bank"},
            {name: "Bank", icon: "fas fa-university", class: "payment-bank"}
        ]
    }
];

// Cập nhật dữ liệu payment methods
function updatePaymentMethods() {
    additionalAffiliateData.forEach(additionalData => {
        const program = affiliatePrograms.find(p => p.id === additionalData.id);
        if (program) {
            program.paymentMethods = additionalData.paymentMethods;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật payment methods
    updatePaymentMethods();
    
    // Hiển thị tất cả chương trình ban đầu
    // Sắp xếp chương trình theo commission và traffic trước khi hiển thị
    sortAffiliatePrograms();
    displayAffiliatePrograms(affiliatePrograms);
    
    // Initialize theme - mặc định là light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme + '-theme';
    updateThemeIcon(savedTheme);
    
    // Setup event listeners
    setupThemeToggle();
    setupCategoryTabs();
    setupTableSorting();
    setupColumnFilter();
    setupAIChat();
    updateLogos();
    setupSearch();
    setupCategoryDropdown();
    
    // Add loading animation
    showLoadingAnimation();
    
    // Simulate loading data
    setTimeout(() => {
        hideLoadingAnimation();
    }, 800);

    // Initialize tooltips
    initTooltips();
});

// Hàm sắp xếp các chương trình affiliate theo commission và traffic
function sortAffiliatePrograms() {
    affiliatePrograms.sort((a, b) => {
        // Trích xuất giá trị phần trăm từ chuỗi commission
        const getCommissionPercentage = (commissionStr) => {
            if (!commissionStr) return 0;
            const matches = commissionStr.match(/(\d+)%/);
            if (matches && matches[1]) {
                return parseInt(matches[1]);
            }
            // Xử lý "Up to X%" hoặc "X% recurring"
            const upToMatches = commissionStr.match(/Up to (\d+)%/i);
            if (upToMatches && upToMatches[1]) {
                return parseInt(upToMatches[1]);
            }
            // Xử lý "X% recurring" hoặc "X% lifetime"
            const recurringMatches = commissionStr.match(/(\d+)%\s+(recurring|lifetime|commission|on|for)/i);
            if (recurringMatches && recurringMatches[1]) {
                return parseInt(recurringMatches[1]);
            }
            return 0;
        };

        // Trích xuất giá trị traffic từ chuỗi monthlyTraffic
        const getTrafficValue = (trafficStr) => {
            if (!trafficStr) return 0;
            
            // Xử lý "X.YM/mo"
            const millionMatches = trafficStr.match(/(\d+(?:\.\d+)?)M\/mo/i);
            if (millionMatches && millionMatches[1]) {
                return parseFloat(millionMatches[1]) * 1000000;
            }
            
            // Xử lý "XK/mo"
            const thousandMatches = trafficStr.match(/(\d+(?:\.\d+)?)K\/mo/i);
            if (thousandMatches && thousandMatches[1]) {
                return parseFloat(thousandMatches[1]) * 1000;
            }
            
            return 0;
        };

        // Lấy giá trị commission
        const commissionA = getCommissionPercentage(a.commission);
        const commissionB = getCommissionPercentage(b.commission);
        
        // So sánh commission
        if (commissionB !== commissionA) {
            return commissionB - commissionA; // Từ cao đến thấp
        }
        
        // Nếu commission bằng nhau, so sánh traffic
        const trafficA = getTrafficValue(a.monthlyTraffic);
        const trafficB = getTrafficValue(b.monthlyTraffic);
        return trafficB - trafficA; // Từ cao đến thấp
    });
}

// Hiển thị danh sách các chương trình affiliate
function displayAffiliatePrograms(programs) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    
    programs.forEach((program, index) => {
        const row = document.createElement('tr');
        row.setAttribute('data-category', program.category.toLowerCase().replace(/\s+/g, '-'));
        
        // Tạo class category dựa trên danh mục
        let categoryClass = '';
        if (program.category.includes('Crypto')) {
            categoryClass = 'cat-cex';
        } else if (program.category.includes('Video')) {
            categoryClass = 'cat-ai-video';
        } else if (program.category.includes('SEO')) {
            categoryClass = 'cat-ai-seo';
        } else if (program.category.includes('Productivity')) {
            categoryClass = 'cat-ai-productivity';
        } else if (program.category.includes('Agents')) {
            categoryClass = 'cat-ai-agents';
        }
        
        // Lưu trữ giá trị cho việc sắp xếp - cải thiện để xử lý chuỗi phức tạp hơn
        const extractCommissionValue = (commissionStr) => {
            if (!commissionStr) return 0;
            // Xử lý "Up to X%"
            const upToMatches = commissionStr.match(/Up to (\d+)%/i);
            if (upToMatches && upToMatches[1]) {
                return parseInt(upToMatches[1]);
            }
            // Xử lý "X% recurring" hoặc các biến thể
            const percentMatches = commissionStr.match(/(\d+)%/);
            if (percentMatches && percentMatches[1]) {
                return parseInt(percentMatches[1]);
            }
            // Xử lý giá trị cố định "$X per Y"
            const fixedMatches = commissionStr.match(/\$(\d+)/);
            if (fixedMatches && fixedMatches[1]) {
                return parseInt(fixedMatches[1]);
            }
            return 0;
        };
        
        const extractTrafficValue = (trafficStr) => {
            if (!trafficStr) return 0;
            // Xử lý "X.YM/mo"
            const millionMatches = trafficStr.match(/(\d+(?:\.\d+)?)M\/mo/i);
            if (millionMatches && millionMatches[1]) {
                return parseFloat(millionMatches[1]) * 1000000;
            }
            // Xử lý "XK/mo"
            const thousandMatches = trafficStr.match(/(\d+(?:\.\d+)?)K\/mo/i);
            if (thousandMatches && thousandMatches[1]) {
                return parseFloat(thousandMatches[1]) * 1000;
            }
            return 0;
        };
        
        const commissionValue = extractCommissionValue(program.commission);
        const trafficValue = extractTrafficValue(program.monthlyTraffic);
        
        // Xác định URL chính xác cho nút Visit
        let visitUrl = '';
        if (program.affiliateUrl) {
            // Nếu có URL chương trình tiếp thị liên kết cụ thể
            visitUrl = program.affiliateUrl;
        } else if (program.url) {
            // Nếu có URL chương trình nhưng không phải URL affiliate cụ thể
            visitUrl = program.url;
        } else {
            // Nếu không có URL nào, tạo URL giả định dựa trên tên
            const domainName = program.name.toLowerCase().replace(/\s+/g, '');
            visitUrl = `https://www.${domainName}.com`;
        }
        
        // Xác định URL trang chi tiết
        let detailPageUrl = '';
        // Nếu là Binance, liên kết đến trang chi tiết đã có sẵn
        if (program.name === 'Binance') {
            detailPageUrl = './detail/binance.html';
        } else {
            // Cho các chương trình khác, chuẩn bị URL chung (có thể được thêm trong tương lai)
            const programSlug = program.name.toLowerCase().replace(/\s+/g, '-');
            detailPageUrl = `#${programSlug}`; // Tạm thời dùng hashtag để không chuyển hướng đến 404
        }
        
        // Chuẩn hóa dữ liệu payment methods
        let paymentMethodsHTML = '';
        if (program.paymentMethods && Array.isArray(program.paymentMethods)) {
            // Nếu đã là mảng object đúng định dạng
            if (program.paymentMethods[0] && typeof program.paymentMethods[0] === 'object' && program.paymentMethods[0].name) {
                paymentMethodsHTML = program.paymentMethods.slice(0, 3).map(method => 
                    `<span class="payment-method ${method.class || ''}">
                        <i class="${method.icon}"></i> ${method.name}
                    </span>`
                ).join('');
                
                if (program.paymentMethods.length > 3) {
                    paymentMethodsHTML += `<span class="more-methods">+${program.paymentMethods.length - 3}</span>`;
                }
            } 
            // Nếu là mảng chuỗi, chuyển đổi thành định dạng hiển thị chuẩn
            else if (program.paymentMethods.length > 0) {
                const paymentIcons = {
                    'PayPal': {icon: 'fab fa-paypal', class: 'payment-paypal'},
                    'Stripe': {icon: 'fab fa-stripe', class: 'payment-stripe'},
                    'Bank': {icon: 'fas fa-university', class: 'payment-bank'},
                    'Bank Transfer': {icon: 'fas fa-university', class: 'payment-bank'},
                    'Wire': {icon: 'fas fa-university', class: 'payment-bank'},
                    'ACH': {icon: 'fas fa-university', class: 'payment-bank'},
                    'Wise': {icon: 'fas fa-exchange-alt', class: 'payment-wise'},
                    'BTC': {icon: 'fab fa-bitcoin', class: 'payment-crypto'},
                    'ETH': {icon: 'fab fa-ethereum', class: 'payment-crypto'},
                    'USDT': {icon: 'fas fa-coins', class: 'payment-crypto'},
                    'Crypto': {icon: 'fab fa-bitcoin', class: 'payment-crypto'}
                };
                
                paymentMethodsHTML = program.paymentMethods.slice(0, 3).map(method => {
                    let name = typeof method === 'string' ? method : 'PayPal';
                    let iconInfo = paymentIcons[name] || {icon: 'fas fa-credit-card', class: 'payment-bank'};
                    
                    return `<span class="payment-method ${iconInfo.class}">
                        <i class="${iconInfo.icon}"></i> ${name}
                    </span>`;
                }).join('');
                
                if (program.paymentMethods.length > 3) {
                    paymentMethodsHTML += `<span class="more-methods">+${program.paymentMethods.length - 3}</span>`;
                }
            }
        } else {
            // Nếu không có dữ liệu hoặc định dạng không đúng, sử dụng mặc định
            paymentMethodsHTML = `
                <span class="payment-method payment-paypal">
                    <i class="fab fa-paypal"></i> PayPal
                </span>
                <span class="payment-method payment-bank">
                    <i class="fas fa-university"></i> Bank
                </span>`;
        }
        
        // Cập nhật HTML - thêm class clickable và liên kết đến trang chi tiết
        row.innerHTML = `
            <td class="rank-col">${index + 1}</td>
            <td>
                <div class="program-name clickable" data-detail-link="${detailPageUrl}">
                    <div class="program-logo clickable">
                        <img src="${program.logo}" alt="${program.name} logo">
                    </div>
                    <span class="program-title">${program.name}</span>
                </div>
            </td>
            <td data-commission="${commissionValue}">${program.commission}</td>
            <td>${program.payoutTime}</td>
            <td>${program.established}</td>
            <td data-traffic="${trafficValue}">${program.monthlyTraffic}</td>
            <td>
                <div class="payment-methods">
                    ${paymentMethodsHTML}
                </div>
            </td>
            <td>
                <span class="category-badge ${categoryClass}">${program.category}</span>
            </td>
            <td>
                <div class="action-buttons">
                    <a href="${detailPageUrl}" class="detail-btn">
                        <i class="fas fa-info-circle"></i> Details
                    </a>
                    <a href="${visitUrl}" target="_blank" class="visit-btn">
                        <i class="fas fa-external-link-alt"></i> Visit
                    </a>
                </div>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Thêm event listener cho các phần tử có thể nhấp
    document.querySelectorAll('.program-name.clickable, .program-logo.clickable').forEach(element => {
        element.addEventListener('click', function() {
            const detailLink = this.getAttribute('data-detail-link');
            if (detailLink) {
                window.location.href = detailLink;
            }
        });
    });
}

// Thiết lập bộ lọc danh mục
function setupCategoryFilters() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Loại bỏ trạng thái active từ tất cả nút
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Thêm trạng thái active cho nút được chọn
            button.classList.add('active');
            
            // Lọc danh sách theo danh mục
            const filter = button.getAttribute('data-filter');
            
            // Lọc chương trình theo danh mục
            let filteredPrograms;
            
            if (filter === 'all') {
                // Hiển thị tất cả sản phẩm
                filteredPrograms = affiliatePrograms;
            } else {
                // Chuyển đổi filter sang đúng định dạng để so sánh
                let categoryFilter = '';
                
                if (filter === 'cex') {
                    categoryFilter = "Crypto Exchange";
                } else if (filter === 'ai-video') {
                    categoryFilter = "AI Video";
                } else if (filter === 'ai-seo') {
                    categoryFilter = "AI SEO";
                } else if (filter === 'ai-productivity') {
                    categoryFilter = "AI Productivity";
                } else if (filter === 'ai-agents') {
                    categoryFilter = "AI Agents";
                }
                
                filteredPrograms = affiliatePrograms.filter(program => 
                    program.category === categoryFilter
                );
            }
            
            displayAffiliatePrograms(filteredPrograms);
        });
    });
}

// Thiết lập bộ lọc bổ sung
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Loại bỏ trạng thái active từ tất cả nút
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Thêm trạng thái active cho nút được chọn
            button.classList.add('active');
            
            // Áp dụng bộ lọc tương ứng
            const buttonText = button.textContent.trim();
            let sortedPrograms = [...affiliatePrograms];
            
            if (buttonText.includes('Top')) {
                // Không cần sắp xếp (đã theo thứ tự)
            } else if (buttonText.includes('Trending')) {
                // Sắp xếp theo lưu lượng hàng tháng (giảm dần)
                sortedPrograms.sort((a, b) => {
                    const trafficA = parseFloat(a.monthlyTraffic);
                    const trafficB = parseFloat(b.monthlyTraffic);
                    return trafficB - trafficA;
                });
            } else if (buttonText.includes('New')) {
                // Sắp xếp theo năm thành lập (mới nhất đầu tiên)
                sortedPrograms.sort((a, b) => b.established - a.established);
            } else if (buttonText.includes('Highest Commission')) {
                // Sắp xếp theo hoa hồng (giả định rằng hoa hồng cao nhất là tốt nhất)
                sortedPrograms.sort((a, b) => {
                    const commA = parseInt(a.commission.match(/\d+/)) || 0;
                    const commB = parseInt(b.commission.match(/\d+/)) || 0;
                    return commB - commA;
                });
            } else if (buttonText.includes('Recurring')) {
                // Lọc các chương trình có kỳ thanh toán hàng ngày hoặc hàng tuần
                sortedPrograms = sortedPrograms.filter(program => 
                    program.payoutTime.includes('Daily') || 
                    program.payoutTime.includes('Weekly')
                );
            }
            
            displayAffiliatePrograms(sortedPrograms);
        });
    });
}

// Thiết lập tìm kiếm
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Xử lý sự kiện input để hiển thị kết quả tìm kiếm
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.classList.remove('show');
            return;
        }
        
        // Tìm các chương trình phù hợp
        const matchingPrograms = affiliatePrograms.filter(program => 
            program.name.toLowerCase().includes(query) || 
            program.category.toLowerCase().includes(query)
        );
        
        // Hiển thị kết quả
        if (matchingPrograms.length > 0) {
            displaySearchResults(matchingPrograms);
            searchResults.classList.add('show');
        } else {
            searchResults.classList.remove('show');
        }
    });
    
    // Ẩn kết quả khi click ra ngoài
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('show');
        }
    });
    
    // Khi focus vào input, hiển thị lại kết quả nếu có query
    searchInput.addEventListener('focus', function() {
        const query = this.value.trim().toLowerCase();
        if (query.length >= 2) {
            const matchingPrograms = affiliatePrograms.filter(program => 
                program.name.toLowerCase().includes(query) || 
                program.category.toLowerCase().includes(query)
            );
            
            if (matchingPrograms.length > 0) {
                displaySearchResults(matchingPrograms);
                searchResults.classList.add('show');
            }
        }
    });
}

// Thiết lập sắp xếp cột
function setupTableSorting() {
    const sortableHeaders = document.querySelectorAll('th.sortable');
    
    // Mặc định sắp xếp theo commission giảm dần khi tải trang
    const defaultSortHeader = document.querySelector('th[data-sort="commission"]');
    if (defaultSortHeader) {
        defaultSortHeader.setAttribute('data-order', 'desc');
        defaultSortHeader.querySelector('.sort-icon[data-order="desc"]').classList.add('active');
    }
    
    sortableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const sortBy = this.getAttribute('data-sort');
            const currentOrder = this.getAttribute('data-order') || 'none';
            const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';
            
            // Reset all headers
            sortableHeaders.forEach(h => {
                h.setAttribute('data-order', 'none');
                const ascIcon = h.querySelector('.sort-icon[data-order="asc"]');
                const descIcon = h.querySelector('.sort-icon[data-order="desc"]');
                if (ascIcon) ascIcon.classList.remove('active');
                if (descIcon) descIcon.classList.remove('active');
            });
            
            // Set new order on this header
            this.setAttribute('data-order', newOrder);
            const activeIcon = this.querySelector(`.sort-icon[data-order="${newOrder}"]`);
            if (activeIcon) activeIcon.classList.add('active');
            
            // Sort the table
            sortTable(sortBy, newOrder);
            
            // Show toast notification
            showSortToast(sortBy, newOrder);
            
            // Add smooth animation to rows
            addSortAnimation();
        });
    });
}

function sortTable(sortBy, order) {
    const tableBody = document.querySelector('tbody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    
    // Sort the rows
    rows.sort((a, b) => {
        let aValue, bValue;
        
        if (sortBy === 'rank') {
            aValue = parseInt(a.querySelector('.rank-col').textContent);
            bValue = parseInt(b.querySelector('.rank-col').textContent);
        } else if (sortBy === 'name' || sortBy === 'program') {
            aValue = a.querySelector('.program-title').textContent.toLowerCase();
            bValue = b.querySelector('.program-title').textContent.toLowerCase();
        } else if (sortBy === 'commission') {
            // Trích xuất giá trị commission thực từ thuộc tính data
            const aCell = a.querySelector('td[data-commission]');
            const bCell = b.querySelector('td[data-commission]');
            aValue = aCell ? parseInt(aCell.getAttribute('data-commission')) : 0;
            bValue = bCell ? parseInt(bCell.getAttribute('data-commission')) : 0;
            
            // Nếu giá trị commission bằng nhau, sắp xếp theo traffic
            if (aValue === bValue) {
                const aTrafficCell = a.querySelector('td[data-traffic]');
                const bTrafficCell = b.querySelector('td[data-traffic]');
                const aTraffic = aTrafficCell ? parseFloat(aTrafficCell.getAttribute('data-traffic')) : 0;
                const bTraffic = bTrafficCell ? parseFloat(bTrafficCell.getAttribute('data-traffic')) : 0;
                
                // Sắp xếp theo traffic chỉ khi commission bằng nhau và sắp xếp theo chiều giảm dần
                if (order === 'desc') {
                    return bTraffic - aTraffic;
                } else {
                    return aTraffic - bTraffic;
                }
            }
        } else if (sortBy === 'traffic') {
            const aCell = a.querySelector('td[data-traffic]');
            const bCell = b.querySelector('td[data-traffic]');
            aValue = aCell ? parseFloat(aCell.getAttribute('data-traffic')) : 0;
            bValue = bCell ? parseFloat(bCell.getAttribute('data-traffic')) : 0;
        } else if (sortBy === 'established') {
            aValue = parseInt(a.cells[4].textContent);
            bValue = parseInt(b.cells[4].textContent);
        } else if (sortBy === 'category') {
            aValue = a.querySelector('.category-badge').textContent.toLowerCase();
            bValue = b.querySelector('.category-badge').textContent.toLowerCase();
        } else {
            // Fallback for other columns
            aValue = a.textContent.toLowerCase();
            bValue = b.textContent.toLowerCase();
        }
        
        // Compare values
        if (order === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });
    
    // Reappend in new order with staggered animation
    rows.forEach((row, index) => {
        // Add a staggered delay based on index
        row.style.animationDelay = `${index * 0.03}s`;
        tableBody.appendChild(row);
    });
}

// Hiển thị thông báo toast
function showSortToast(message) {
    // Kiểm tra và xóa toast cũ nếu có
    const existingToast = document.querySelector('.sort-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Tạo toast mới
    const toast = document.createElement('div');
    toast.className = 'sort-toast';
    toast.textContent = message;
    
    // Thêm vào body
    document.body.appendChild(toast);
    
    // Hiển thị toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Tự động ẩn sau 3 giây
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Thiết lập chức năng chuyển đổi giao diện
function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const bodyElement = document.body;
    
    // Kiểm tra nếu người dùng đã lưu theme trước đó
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        bodyElement.className = savedTheme + '-theme';
    }
    
    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('dark-theme')) {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            bodyElement.classList.remove('light-theme');
            bodyElement.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });
}

// Thiết lập bộ lọc cột
function setupColumnFilter() {
    const customizeColumnsBtn = document.getElementById('customize-columns-btn');
    const columnsModal = document.getElementById('columns-modal');
    const closeBtn = document.querySelector('#columns-modal .close');
    const applyBtn = document.querySelector('#columns-modal .primary-btn');
    const resetBtn = document.querySelector('#columns-modal .secondary-btn');
    const columnOptions = document.querySelectorAll('.column-option input');
    
    // Load saved column preferences
    loadColumnPreferences();
    
    customizeColumnsBtn.addEventListener('click', function() {
        columnsModal.classList.add('show');
    });
    
    closeBtn.addEventListener('click', function() {
        columnsModal.classList.remove('show');
    });
    
    // Đóng modal khi click ra ngoài
    columnsModal.addEventListener('click', function(e) {
        if (e.target === columnsModal) {
            columnsModal.classList.remove('show');
        }
    });
    
    // Áp dụng bộ lọc
    applyBtn.addEventListener('click', function() {
        const columns = {};
        
        columnOptions.forEach(option => {
            const columnName = option.getAttribute('data-column');
            columns[columnName] = option.checked;
        });
        
        // Save preferences to localStorage
        localStorage.setItem('columnPreferences', JSON.stringify(columns));
        
        // Áp dụng bộ lọc
        applyColumnFilters(columns);
        
        // Show a success message
        showFilterAppliedToast();
        
        // Close modal
        columnsModal.classList.remove('show');
    });
    
    // Reset bộ lọc
    resetBtn.addEventListener('click', function() {
        // Thiết lập cài đặt mặc định
        const defaultPreferences = {
            rank: true,
            program: true,
            commission: true,
            payout: false,      // Mặc định ẩn Payout Time
            established: true,
            traffic: true,
            payment: false,     // Mặc định ẩn Payment Methods 
            category: false,    // Mặc định ẩn Category
            action: true
        };
        
        // Reset checkbox states to default
        document.querySelectorAll('.column-option input').forEach(option => {
            const columnName = option.getAttribute('data-column');
            option.checked = defaultPreferences[columnName];
        });
        
        // Save to localStorage
        localStorage.setItem('columnPreferences', JSON.stringify(defaultPreferences));
        
        // Apply filters
        applyColumnFilters(defaultPreferences);
        
        // Show a reset message
        showFilterResetToast();
        
        // Close modal
        columnsModal.classList.remove('show');
    });
}

// Áp dụng bộ lọc cột
function applyColumnFilters(columns) {
    // Lấy tất cả các cột trong bảng
    const table = document.querySelector('table');
    const headerCells = table.querySelectorAll('thead th');
    const rows = table.querySelectorAll('tbody tr');
    
    // Xử lý từng cột trong header
    headerCells.forEach(cell => {
        const column = cell.getAttribute('data-column');
        if (column && columns[column] !== undefined) {
            if (columns[column]) {
                cell.classList.remove('hidden-column');
            } else {
                cell.classList.add('hidden-column');
            }
        }
    });
    
    // Xử lý từng cột trong các dòng
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
            const column = headerCells[index].getAttribute('data-column');
            if (column && columns[column] !== undefined) {
                if (columns[column]) {
                    cell.classList.remove('hidden-column');
                } else {
                    cell.classList.add('hidden-column');
                }
            }
        });
    });
}

// Thiết lập AI Chat Bot
function setupAIChat() {
    const chatToggle = document.querySelector('.ai-chat-toggle');
    const chatBox = document.querySelector('.ai-chat-box');
    const minimizeBtn = document.querySelector('.ai-minimize');
    const closeBtn = document.querySelector('.ai-close');
    const chatInput = document.querySelector('.ai-chat-input input');
    const sendBtn = document.querySelector('.ai-send-btn');
    const messagesContainer = document.querySelector('.ai-chat-messages');
    const quickReplies = document.querySelectorAll('.ai-quick-reply');
    
    // Toggle chat box visibility
    chatToggle.addEventListener('click', function() {
        console.log("Chat toggle clicked"); // Debug
        chatBox.classList.toggle('hidden');
        console.log("Chat box hidden class:", chatBox.classList.contains('hidden')); // Debug
        
        if (!chatBox.classList.contains('hidden')) {
            // Focus input when opening
            setTimeout(() => chatInput.focus(), 300);
            
            // Add badge animation
            this.classList.add('pulse');
            setTimeout(() => this.classList.remove('pulse'), 500);
        }
    });
    
    // Minimize chat
    minimizeBtn.addEventListener('click', function() {
        chatBox.classList.add('hidden');
    });
    
    // Close chat
    closeBtn.addEventListener('click', function() {
        chatBox.classList.add('hidden');
    });
    
    // Đảm bảo chatbox có thể nhìn thấy ban đầu và sau đó ẩn đi
    setTimeout(() => {
        chatBox.style.opacity = '1';
        chatBox.style.transform = 'scale(1)';
        
        // Sau đó ẩn đi (đã được ẩn bằng class hidden từ HTML)
        // setTimeout(() => {
        //     chatBox.classList.add('hidden');
        // }, 100);
    }, 0);
    
    // Handle quick replies
    quickReplies.forEach(reply => {
        reply.addEventListener('click', function() {
            const message = this.textContent;
            addUserMessage(message);
            
            // Remove quick replies after selection
            document.querySelector('.ai-quick-replies').style.display = 'none';
            
            // Generate AI response
            setTimeout(() => {
                let response;
                
                if (message.includes('best crypto exchange')) {
                    response = "Based on my analysis, the best crypto exchange affiliate programs currently are Binance, OKX, and Bybit. These offer high commission rates (up to 50%) and have the best conversion rates.";
                } else if (message.includes('highest commission')) {
                    response = "The highest commission rates in AI tools are offered by Synthesia (up to 30% recurring commission), RunwayML (25% recurring commissions), and InVideo (up to 50% on annual plans).";
                } else if (message.includes('Compare AI SEO')) {
                    response = "AI SEO programs typically offer: Surfer SEO (Paypal, Crypto), Frase.io (Paypal, Credit card), MarketMuse (Paypal, Bank transfer), and SE Ranking (PayPal, Crypto, Bank transfer, Wise).";
                } else {
                    response = "I'm sorry, I don't have specific information on that topic yet. I recommend checking the affiliate programs table for more details on specific programs, or asking another question about affiliate marketing strategies.";
                }
                
                addAIResponse(response);
            }, 1000);
        });
    });
    
    // Send message on button click
    sendBtn.addEventListener('click', function() {
        sendMessage();
    });
    
    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addUserMessage(message);
            chatInput.value = '';
            
            // Show typing indicator
            showTypingIndicator();
            
            // Generate AI response after a delay
            setTimeout(() => {
                removeTypingIndicator();
                generateResponse(message);
            }, 1500);
        }
    }
    
    function addUserMessage(message) {
        const userMessage = document.createElement('div');
        userMessage.className = 'ai-message user-message';
        userMessage.innerHTML = `
            <div class="user-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="ai-message-content user-content">
                <p>${message}</p>
            </div>
        `;
        messagesContainer.appendChild(userMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    function addAIResponse(response) {
        const aiMessage = document.createElement('div');
        aiMessage.className = 'ai-message';
        aiMessage.innerHTML = `
            <div class="ai-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="ai-message-content">
                <p>${response}</p>
            </div>
        `;
        messagesContainer.appendChild(aiMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Add entrance animation
        aiMessage.style.opacity = '0';
        aiMessage.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            aiMessage.style.transition = 'all 0.3s ease';
            aiMessage.style.opacity = '1';
            aiMessage.style.transform = 'translateY(0)';
        }, 50);
    }
    
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'ai-message typing-indicator';
        typingIndicator.innerHTML = `
            <div class="ai-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="ai-message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    function generateResponse(message) {
        let response;
        
        message = message.toLowerCase();
        
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            response = "Hello! I'm your affiliate assistant. How can I help you with affiliate marketing today?";
        } else if (message.includes('best') && (message.includes('program') || message.includes('affiliate'))) {
            response = "Based on our current data, the top affiliate programs with the best combination of commission rates and conversion rates are Binance, OKX and Bybit for crypto exchanges. For AI tools, RunwayML and Synthesia lead the pack with excellent recurring commission structures.";
        } else if (message.includes('commission') || message.includes('rate')) {
            response = "The highest commission rates are currently offered by Bybit (up to 50%), OKX (up to 40%), and Kucoin (up to 50%). Among AI tools, Synthesia offers up to 30% recurring commission, which can be very profitable long-term.";
        } else if (message.includes('payout') || message.includes('payment')) {
            response = "Most programs offer payouts via multiple methods including PayPal, bank transfer, and cryptocurrency. Crypto exchanges typically offer faster payouts (often weekly), while other programs usually pay on a Net-30 basis. OKX and Bybit offer the most payment options.";
        } else if (message.includes('tip') || message.includes('strategy') || message.includes('improve')) {
            response = "Here are some effective affiliate marketing strategies: 1) Create detailed comparison content, 2) Use targeted landing pages for different traffic sources, 3) Include authentic case studies and results, 4) Leverage email marketing for follow-ups, and 5) Use retargeting to capture users who didn't convert initially.";
        } else {
            response = "I'm not sure I understand your question completely. Could you clarify or ask about specific affiliate programs, commission rates, marketing strategies, or optimization techniques?";
        }
        
        addAIResponse(response);
    }
}

function updateLogos() {
    // Find all program logos and update with higher quality versions
    const programLogos = document.querySelectorAll('.program-logo');
    
    programLogos.forEach(logo => {
        const img = logo.querySelector('img');
        if (img) {
            const programName = img.alt.toLowerCase();
            
            // Update specific logos with better quality versions but ensure consistent sizing
            if (programName.includes('binance')) {
                img.src = 'https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png';
            } else if (programName.includes('bybit')) {
                img.src = 'https://www.bybit.com/bbc-static/inherit/assets/img/logo-dark.svg';
            } else if (programName.includes('coinbase')) {
                // Ensure Coinbase logo is properly sized
                img.src = 'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg';
                img.style.maxWidth = '22px'; // Adjust to be consistent with others
            } else if (programName.includes('okx')) {
                img.src = 'https://www.okx.com/cdn/assets/imgs/221/E5B0BF952FD37A38.png';
            } else if (programName.includes('invideo')) {
                img.src = 'https://assets.invideo.io/new_assets/img/logo.svg';
            } else if (programName.includes('synthesia')) {
                img.src = 'https://assets-global.website-files.com/61dc0796f359b6145bc3902d/62b0de4366968834420b8276_OG%20Image%20(5).png';
            } else if (programName.includes('runway')) {
                img.src = 'https://assets-global.website-files.com/5d56cb37dc0dc86ec4162a5f/650b6d7b6c82f92aa9688c5b_Logo.svg';
            } else if (programName.includes('kucoin')) {
                img.src = 'https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEoFYi8YlXuAVORLxLsEgKK.svg';
            } else if (programName.includes('kraken')) {
                img.src = 'https://www.kraken.com/img/logo/kraken-logo-light.svg';
            } else if (programName.includes('mexc')) {
                img.src = 'https://www.mexc.com/images/MEXC_logo.svg';
            }
            
            // Add lazy loading for better performance
            img.loading = 'lazy';
            
            // Kiểm tra kích thước hình ảnh quá lớn
            img.onload = function() {
                // Kiểm tra nếu hình ảnh quá cao hoặc rộng, điều chỉnh về kích thước chuẩn
                if (this.naturalWidth > 80 || this.naturalHeight > 80) {
                    this.style.maxWidth = '22px';
                    this.style.maxHeight = '22px';
                }
            };
            
            // Add error handling for logos
            img.onerror = function() {
                // Replace with a fallback logo or initials
                const parentLogo = this.parentElement;
                const programTitle = this.alt.split(' ')[0] || 'AF';
                const initials = programTitle.substring(0, 2).toUpperCase();
                
                // Create a colorful div with initials
                const fallbackLogo = document.createElement('div');
                fallbackLogo.className = 'fallback-logo';
                fallbackLogo.textContent = initials;
                
                // Generate a consistent color based on the program name
                const colors = ['#3861fb', '#ef476f', '#06d6a0', '#ffd166', '#118ab2', '#073b4c'];
                const colorIndex = Math.abs(programTitle.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colors.length;
                fallbackLogo.style.backgroundColor = colors[colorIndex];
                
                // Replace the img with the fallback
                this.replaceWith(fallbackLogo);
            };
            
            // Add animation on hover
            logo.addEventListener('mouseenter', function() {
                img.style.transform = 'scale(1.1)';
                img.style.transition = 'transform 0.3s ease';
            });
            
            logo.addEventListener('mouseleave', function() {
                img.style.transform = 'scale(1)';
            });
        }
    });
}

function updateThemeIcon(theme) {
    const moonIcon = document.querySelector('.fa-moon');
    const sunIcon = document.querySelector('.fa-sun');
    
    if (theme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}

function setupCategoryTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tableRows = document.querySelectorAll('tbody tr');
    
    // Update active count on initial load
    updateActiveCount();
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Apply smooth fade transition
            tableRows.forEach(row => {
                row.style.transition = 'opacity 0.3s ease';
                
                if (category === 'all') {
                    row.style.display = '';
                    setTimeout(() => {
                        row.style.opacity = '1';
                    }, 50);
                } else {
                    const rowCategory = row.getAttribute('data-category');
                    
                    if (rowCategory === category) {
                        row.style.display = '';
                        setTimeout(() => {
                            row.style.opacity = '1';
                        }, 50);
                    } else {
                        row.style.opacity = '0';
                        setTimeout(() => {
                            row.style.display = 'none';
                        }, 300);
                    }
                }
            });
            
            // Update count of active items
            updateActiveCount();
        });
    });
}

function updateActiveCount() {
    const activeTab = document.querySelector('.tab-btn.active');
    const category = activeTab.getAttribute('data-category');
    const tableRows = document.querySelectorAll('tbody tr');
    
    let visibleCount = 0;
    
    tableRows.forEach(row => {
        if (category === 'all' || row.getAttribute('data-category') === category) {
            visibleCount++;
        }
    });
    
    // Update the count in the UI
    const countElement = document.querySelector('.active-count');
    if (countElement) {
        countElement.textContent = visibleCount;
    }
}

function showLoadingAnimation() {
    // Create and add loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading affiliate programs...</p>
        </div>
    `;
    document.body.appendChild(loadingOverlay);
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
}

function hideLoadingAnimation() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('fade-out');
        setTimeout(() => {
            loadingOverlay.remove();
            document.body.style.overflow = '';
        }, 500);
    }
}

function initTooltips() {
    // Find all elements with tooltip attribute
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        
        // Add tooltip to document
        document.body.appendChild(tooltip);
        
        // Show tooltip on hover
        element.addEventListener('mouseenter', function(e) {
            const rect = element.getBoundingClientRect();
            
            // Position tooltip above the element
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            
            // Show with animation
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
            tooltip.style.display = 'block';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
            }, 10);
        });
        
        // Hide tooltip when mouse leaves
        element.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                tooltip.style.display = 'none';
            }, 300);
        });
    });
}

// Cập nhật hàm loadColumnPreferences
function loadColumnPreferences() {
    const savedPreferences = localStorage.getItem('columnPreferences');
    
    // Thiết lập mặc định - các cột cơ bản hiển thị, các cột Payout Time, Payment Methods và Category ẩn
    const defaultPreferences = {
        rank: true,
        program: true,
        commission: true,
        payout: false,      // Mặc định ẩn Payout Time
        established: true,
        traffic: true,
        payment: false,     // Mặc định ẩn Payment Methods 
        category: false,    // Mặc định ẩn Category
        action: true
    };
    
    let columns;
    
    if (savedPreferences) {
        columns = JSON.parse(savedPreferences);
    } else {
        columns = defaultPreferences;
        // Lưu preferences mặc định
        localStorage.setItem('columnPreferences', JSON.stringify(defaultPreferences));
    }
    
    // Cập nhật trạng thái checkbox trong modal
    document.querySelectorAll('.column-option input').forEach(option => {
        const columnName = option.getAttribute('data-column');
        if (columns[columnName] !== undefined) {
            option.checked = columns[columnName];
        }
    });
    
    // Áp dụng preferences
    applyColumnFilters(columns);
}

function showFilterAppliedToast() {
    showToast('Column preferences applied');
}

function showFilterResetToast() {
    showToast('Column preferences reset to default');
}

function showToast(message) {
    // Create toast if it doesn't exist
    let toast = document.querySelector('.custom-toast');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'custom-toast';
        document.body.appendChild(toast);
    }
    
    // Set message and show
    toast.textContent = message;
    toast.classList.add('show');
    
    // Hide after delay
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults(programs) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    
    // Giới hạn chỉ hiển thị tối đa 5 kết quả
    const limitedPrograms = programs.slice(0, 5);
    
    limitedPrograms.forEach(program => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        
        // Tạo HTML cho mỗi kết quả
        resultItem.innerHTML = `
            <div class="search-result-logo">
                <img src="${program.logo}" alt="${program.name}" onerror="this.src='https://via.placeholder.com/24?text=${program.name.charAt(0)}'">
            </div>
            <div class="search-result-name">${program.name}</div>
            <div class="search-result-category">${program.category}</div>
        `;
        
        // Thêm sự kiện click để lọc tất cả các chương trình và chỉ hiển thị chương trình được chọn
        resultItem.addEventListener('click', function() {
            // Lọc bảng để chỉ hiển thị chương trình này
            const singleProgram = [program];
            displayAffiliatePrograms(singleProgram);
            
            // Cập nhật trạng thái active của các tab
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Ẩn kết quả tìm kiếm
            searchResults.classList.remove('show');
            
            // Clear input
            document.getElementById('search-input').value = '';
            
            // Hiển thị thông báo tìm kiếm
            showToast(`Showing results for: ${program.name}`);
        });
        
        searchResults.appendChild(resultItem);
    });
    
    // Thêm nút "Show all results" nếu có nhiều hơn 5 kết quả
    if (programs.length > 5) {
        const showAllBtn = document.createElement('div');
        showAllBtn.className = 'search-result-item show-all';
        showAllBtn.innerHTML = `<div class="search-result-name">Show all ${programs.length} results</div>`;
        
        showAllBtn.addEventListener('click', function() {
            // Hiển thị tất cả các chương trình phù hợp
            displayAffiliatePrograms(programs);
            
            // Ẩn kết quả tìm kiếm
            searchResults.classList.remove('show');
            
            // Clear input
            document.getElementById('search-input').value = '';
            
            // Hiển thị thông báo tìm kiếm
            showToast(`Showing ${programs.length} results`);
        });
        
        searchResults.appendChild(showAllBtn);
    }
}

// Thiết lập dropdown menu cho Categories
function setupCategoryDropdown() {
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const category = this.getAttribute('data-category');
            
            // Tìm và kích hoạt tab tương ứng
            const tabButtons = document.querySelectorAll('.tab-btn');
            
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                    // Kích hoạt sự kiện click trên tab
                    btn.click();
                }
            });
        });
    });
} 