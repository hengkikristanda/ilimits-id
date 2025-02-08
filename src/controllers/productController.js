const { getSelectedLanguageCode } = require("../utils/commonUtils");

const AI_TRADING = {
	ID: {
		heading:
			"Rasakan trading otomatis yang menganalisis perilaku pasar untuk memaksimalkan keuntungan Anda",
		subheading:
			"Menggunakan AI dalam trading forex berarti memanfaatkan program komputer cerdas untuk membantu mengambil keputusan dalam trading Anda. Program ini menganalisis sejumlah besar data pasar, seperti perubahan harga dan berita, jauh lebih cepat daripada manusia. AI dapat mengenali pola dan tren yang mungkin terlewatkan oleh manusia dan secara otomatis melakukan trading berdasarkan informasi tersebut. Ini membantu trader dengan memprediksi kemungkinan pergerakan pasar berikutnya, mengambil keputusan yang lebih cepat dan akurat, serta menghilangkan emosi yang dapat menyebabkan kesalahan. Ini menjadikan AI alat yang kuat bagi pemula maupun trader berpengalaman.",
		cta: "Siap merevolusi pengalaman trading Anda? Bergabunglah dengan iLimits Invest hari ini dan biarkan AI kami bekerja untuk Anda.",
		ctaLabel: "Mulai Sekarang",
		faq: [
			{
				q: "Bagaimana cara memulai dengan iLimits Invest?",
				a: "Cukup daftar di website kami, setor dana ke akun Anda, dan AI kami akan mulai mengelola trading Anda secara otomatis.",
			},
			{
				q: "Apa yang membedakan AI Anda dari copy trading tradisional?",
				a: "Berbeda dengan copy trading yang meniru trader manusia, AI kami menganalisis perilaku pasar, menjalankan strategi hedging dinamis, dan mengelola risiko tanpa campur tangan emosi, yang sering menghasilkan performa lebih konsisten.",
			},
			{
				q: "Apakah investasi saya aman?",
				a: "Ya, kami menerapkan protokol keamanan yang kuat untuk melindungi data dan dana Anda. Selain itu, fitur manajemen risiko AI kami bertujuan untuk meminimalkan potensi kerugian.",
			},
			{
				q: "Dapatkah saya memantau kinerja akun saya?",
				a: "Tentu saja. Dashboard kami yang ramah pengguna memungkinkan Anda untuk melacak kinerja dan penghasilan akun Anda secara real-time.",
			},
		],
	},
	EN: {
		heading: "Experience automated trading that analyzes market behaviors to maximize your profits",
		subheading:
			"Using AI in forex trading means using smart computer programs to help make decisions for your trade. These programs analyse large amounts of market data, such as price changes and news, much faster than a person can. AI can spot patterns and trends that people might miss and can automatically make trades based on this information. It helps traders by predicting what might happen next in the market, making faster and more accurate decisions, and removing emotions that can lead to mistakes. This makes AI a powerful tool for both beginners and experienced traders.",
		cta: "Ready to revolutionize your trading experience? Join iLimits Invest today and let our AI work for you.",
		ctaLabel: "Get Started Now",
		faq: [
			{
				q: "How do I get started with iLimits Invest?",
				a: "Simply sign up on our website, deposit funds into your account, and our AI will begin managing your trades automatically.",
			},
			{
				q: "What makes your AI different from traditional copy trading?",
				a: "Unlike copy trading, which mirrors human traders, our AI analyzes market behaviors, executes dynamic hedging strategies, and manages risk without emotional interference, often resulting in more consistent performance.",
			},
			{
				q: "Is my investment secure?",
				a: "Yes, we implement robust security protocols to protect your data and funds. Additionally, our AI's risk management features aim to minimize potential losses.",
			},
			{
				q: "Can I monitor my account's performance?",
				a: "Absolutely. Our user-friendly dashboard allows you to track your account's performance and earnings in real-time.",
			},
		],
	},
	MS: {
		heading:
			"Alami perdagangan automatik yang menganalisis tingkah laku pasaran untuk memaksimumkan keuntungan anda",
		subheading:
			"Menggunakan AI dalam perdagangan forex bermaksud menggunakan program komputer pintar untuk membantu membuat keputusan dalam perdagangan anda. Program ini menganalisis sejumlah besar data pasaran, seperti perubahan harga dan berita, jauh lebih pantas daripada manusia. AI dapat mengenal pasti corak dan trend yang mungkin terlepas pandang oleh manusia dan secara automatik membuat perdagangan berdasarkan maklumat tersebut. Ia membantu pedagang dengan meramalkan apa yang mungkin berlaku seterusnya di pasaran, membuat keputusan yang lebih cepat dan tepat, serta menghapuskan emosi yang boleh menyebabkan kesilapan. Ini menjadikan AI sebagai alat yang berkuasa untuk pedagang baru dan berpengalaman.",
		cta: "Bersedia untuk merevolusikan pengalaman perdagangan anda? Sertai iLimits Invest hari ini dan biarkan AI kami bekerja untuk anda.",
		ctaLabel: "Mula Sekarang",
		faq: [
			{
				q: "Bagaimana saya boleh memulakan dengan iLimits Invest?",
				a: "Hanya daftar di laman web kami, depositkan dana ke dalam akaun anda, dan AI kami akan mula mengurus perdagangan anda secara automatik.",
			},
			{
				q: "Apakah perbezaan AI anda dengan copy trading tradisional?",
				a: "Tidak seperti copy trading yang meniru pedagang manusia, AI kami menganalisis tingkah laku pasaran, melaksanakan strategi lindung nilai dinamik, dan mengurus risiko tanpa gangguan emosi, sering menghasilkan prestasi yang lebih konsisten.",
			},
			{
				q: "Adakah pelaburan saya selamat?",
				a: "Ya, kami melaksanakan protokol keselamatan yang kukuh untuk melindungi data dan dana anda. Selain itu, ciri pengurusan risiko AI kami bertujuan untuk meminimumkan potensi kerugian.",
			},
			{
				q: "Bolehkah saya memantau prestasi akaun saya?",
				a: "Sudah tentu. Papan pemuka kami yang mesra pengguna membolehkan anda menjejaki prestasi dan pendapatan akaun anda secara masa nyata.",
			},
		],
	},
};

const COPY_TRADE = {
	ID: {
		heading:
			"Rasakan trading otomatis yang menganalisis perilaku pasar untuk memaksimalkan keuntungan Anda",
		cta: "Siap memulai Copy Trading? Bergabunglah dengan iLimits hari ini dan tiru strategi trader ahli dengan percaya diri dan mudah.",
		ctaLabel: "Jelajahi Master Kami",
	},
	MS: {
		heading:
			"Alami perdagangan automatik yang menganalisis tingkah laku pasaran untuk memaksimumkan keuntungan anda",
		cta: "Bersedia untuk memulakan Copy Trading? Sertai iLimits hari ini dan tiru strategi pedagang pakar dengan yakin dan mudah.",
		ctaLabel: "Terokai Master Kami",
	},
	EN: {
		heading: "Experience automated trading that analyzes market behaviors to maximize your profits",
		cta: "Ready to Start Copy Trading? Join iLimits today and copy the strategies of expert traders with confidence and ease.",
		ctaLabel: "Explore Our Masters",
	},
};

const HEDGE = {
	EN: {
		heading: "WHAT IS HEDGE TRADING ?",
		subheading:
			"Hedge trading is a starteg y designed to protect your investments from potential losses. By taking off setting positions, we reduce the risk of markets fluctuations that allowing you to experience smaller, more controlled risk. In our Hedge Trading Program, you can participate in a safer investment environment while still earning a portion of the profits.",
		overview: {
			heading: "How Hedge Trading Works",
			content:
				"Our Hedge Trading strategy is simple and effective. We use carefully selected positions to offset potential losses in open trades, reducing your exposure to risk. By joining our Hedge Trading program you can:",
			benefits: [
				"Participate in our hedge accounts",
				"Benefit from reduced risk trading",
				"Receive a share of the profits generated",
				"Enjoy more security with less volatility",
			],
		},
		disclaimer: {
			heading: "Important Risk Disclaimer",
			content:
				"Although our Hedge Trading program is designed to minimize risk, there is no guarantee of profit, and trading involves inherent risks. Please make sure you fully understand the strategy before committing to any investments.",
		},
		cta: {
			heading: "Start Trading with Us Today",
			content:
				"Sign up for the Hedge Trading program to experience low-risk trading and start earning your share of the profits.",
			buttonLabel: "Join Now",
		},
	},
	ID: {
		heading: "APA ITU HEDGE TRADING?",
		subheading:
			"Hedge trading adalah strategi yang dirancang untuk melindungi investasi Anda dari potensi kerugian. Dengan mengambil posisi yang saling mengimbangi, kami mengurangi risiko fluktuasi pasar, memungkinkan Anda mengalami risiko yang lebih kecil dan lebih terkontrol. Dalam Program Hedge Trading kami, Anda dapat berpartisipasi dalam lingkungan investasi yang lebih aman sambil tetap mendapatkan bagian dari keuntungan.",
		overview: {
			heading: "Bagaimana Cara Kerja Hedge Trading",
			content:
				"Strategi Hedge Trading kami sederhana dan efektif. Kami menggunakan posisi yang dipilih dengan cermat untuk mengimbangi potensi kerugian dalam perdagangan terbuka, sehingga mengurangi eksposur risiko Anda. Dengan bergabung dalam program Hedge Trading kami, Anda dapat:",
			benefits: [
				"Berpartisipasi dalam akun hedge kami",
				"Memanfaatkan perdagangan dengan risiko yang lebih rendah",
				"Menerima bagian dari keuntungan yang dihasilkan",
				"Menikmati keamanan lebih dengan volatilitas yang lebih rendah",
			],
		},
		disclaimer: {
			heading: "Peringatan Risiko Penting",
			content:
				"Meskipun program Hedge Trading kami dirancang untuk meminimalkan risiko, tidak ada jaminan keuntungan, dan perdagangan melibatkan risiko yang melekat. Pastikan Anda sepenuhnya memahami strategi sebelum melakukan investasi apa pun.",
		},
		cta: {
			heading: "Mulai Trading dengan Kami Hari Ini",
			content:
				"Daftar ke program Hedge Trading untuk merasakan perdagangan berisiko rendah dan mulai mendapatkan bagian dari keuntungan.",
			buttonLabel: "Bergabung Sekarang",
		},
	},

	MS: {
		heading: "APA ITU HEDGE TRADING?",
		subheading:
			"Hedge trading ialah strategi yang direka untuk melindungi pelaburan anda daripada potensi kerugian. Dengan mengambil posisi yang saling mengimbangi, kami mengurangkan risiko turun naik pasaran, membolehkan anda mengalami risiko yang lebih kecil dan lebih terkawal. Dalam Program Hedge Trading kami, anda boleh menyertai persekitaran pelaburan yang lebih selamat sambil masih memperoleh bahagian daripada keuntungan.",
		overview: {
			heading: "Bagaimana Hedge Trading Berfungsi",
			content:
				"Strategi Hedge Trading kami adalah mudah dan berkesan. Kami menggunakan posisi yang dipilih dengan teliti untuk mengimbangi potensi kerugian dalam dagangan terbuka, sekali gus mengurangkan pendedahan risiko anda. Dengan menyertai program Hedge Trading kami, anda boleh:",
			benefits: [
				"Menyertai akaun hedge kami",
				"Mendapat manfaat daripada dagangan berisiko rendah",
				"Menerima bahagian keuntungan yang dijana",
				"Menikmati lebih keselamatan dengan kurang turun naik pasaran",
			],
		},
		disclaimer: {
			heading: "Penafian Risiko Penting",
			content:
				"Walaupun program Hedge Trading kami direka untuk mengurangkan risiko, tiada jaminan keuntungan, dan perdagangan melibatkan risiko yang wujud. Pastikan anda memahami strategi sepenuhnya sebelum membuat sebarang pelaburan.",
		},
		cta: {
			heading: "Mulakan Dagangan dengan Kami Hari Ini",
			content:
				"Daftar untuk program Hedge Trading untuk mengalami dagangan berisiko rendah dan mula memperoleh bahagian keuntungan anda.",
			buttonLabel: "Sertai Sekarang",
		},
	},
};

const renderAiTrading = (req, res) => {
	const languageCode = getSelectedLanguageCode(req);

	const data = {
		content:
			languageCode == "ID" ? AI_TRADING.ID : languageCode == "MS" ? AI_TRADING.MS : AI_TRADING.EN,
		selectedLanguage: languageCode,
	};

	res.render("product/ai-trading", data); // Render the "home.ejs" template
};

const renderCopyTrade = (req, res) => {
	const languageCode = getSelectedLanguageCode(req);

	const data = {
		content:
			languageCode == "ID" ? COPY_TRADE.ID : languageCode == "MS" ? COPY_TRADE.MS : COPY_TRADE.EN,
		selectedLanguage: languageCode,
	};

	res.render("product/copy-trade", data); // Render the "home.ejs" template
};

const renderHedge = (req, res) => {
	const languageCode = getSelectedLanguageCode(req);

	const data = {
		content: languageCode == "ID" ? HEDGE.ID : languageCode == "MS" ? HEDGE.MS : HEDGE.EN,
		selectedLanguage: languageCode,
	};

	res.render("product/hedge", data); // Render the "home.ejs" template
};

// Export the function using CommonJS
module.exports = {
	renderAiTrading,
	renderCopyTrade,
	renderHedge,
};
