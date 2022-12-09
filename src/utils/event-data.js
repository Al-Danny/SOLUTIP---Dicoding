const events = [
	{
		id: 'event-1',
		image:
			'http://katakota.com/wp-content/uploads/2020/05/IMG-20200530-WA0040-650x433.jpg',
		title: 'Donor Darah',
		description:
			'Donating blood is an act of solidarity. Join the effort and save lives. Donor darah dapat membantu menyelamatkan nyawa orang lain, satu donasi darah dapat menyelamatkan tiga jiwa. Donor darah memberikan manfaat secara fisik dan mental. Berikut beberapa manfaat donor darah terhadap kesehatan fisik dan mental: menurunkan risiko penyakit jantung, mengurangi kekentalan darah dengan menurunkan tingkat zat besi dalam tubuh, menurunkan tingkat kolesterol dalam tubuh, dan menurunkan kadar oksidan dalam tubuh dengan meningkatkan kandungan antioksidan dalam tubuh. Dengan melakukan donor darah, kita dapat memeriksakan kesehatan gratis. Petugas akan melakukan pemeriksaan detak jantung, tekanan darah, suhu tubuh, dan tingkat hemoglobin sebelum pengambilan darah.',
		createdAt: '2022-04-14T04:27:34.572Z',
	},
	{
		id: 'event-2',
		image:
			'https://res.cloudinary.com/dk0z4ums3/image/upload/v1650264833/attached_image/daftar-imunisasi-wajib-yang-harus-didapat-si-kecil.jpg',
		title: 'Imunisasi Anak',
		description:
			'Imunisasi anak adalah pemberian vaksin kepada anak untuk mencegah penularan penyakit tertentu. Vaksin adalah zat yang berfungsi membantu membentuk kekebalan tubuh atau imunitas terhadap infeksi sejumlah penyakit menular. Dua manfaat imunisasi yang utama, yakni bagi anak dan bagi masyarakat umum. Ketika anak mendapat imunisasi, mereka telah membantu melindungi kesehatan masyarakat umum secara keseluruhan. Sebab, saat sudah cukup jumlah orang dalam suatu komunitas yang kebal terhadap infeksi, makin sulit penyakit itu menyebar dan menulari orang lain yang belum diimunisasi. Kondisi ini disebut sebagai herd immunity atau kekebalan komunitas. Jadi secara tidak langsung anak yang menerima imunisasi telah berkontribusi terhadap komunitasnya dalam hal kesehatan.',
		createdAt: '2022-04-15T04:27:34.572Z',
	},
	{
		id: 'event-3',
		image:
			'https://res.cloudinary.com/dk0z4ums3/image/upload/v1614314922/attached_image/mengenal-vaksin-sputnik-untuk-covid-19.jpg',
		title: 'Vaksinasi COVID-19',
		description:
			'Pemerintah melalui Kementerian Kesehatan terus berupaya dalam mengakhiri pandemi di Indonesia, selain dengan protokol kesehatan juga dilakukan vaksinasi Covid-19 terhadap masyarakat. Unit Pelayanan Kesehatan Kemenkes RI juga turut berinovasi dalam pelayanan dengan memberikan layanan vaksinasi. Vaksinasi COVID-19 akan dilakukan setelah kepastian keamanan dan keampuhannya ada, merupakan upaya menurunkan kesakitan dan kematian dan mendorong terbentuknya kekebalan kelompok. Selain itu, vaksinasi COVID-19 bertujuan untuk melindungi dan memperkuat sistem kesehatan secara menyeluruh, menjaga produktivitas dan mengurangi dampak sosial dan ekonomi masyarakat. Pemerintah memberikan target agar melaksanakan vaksinasi kepada seluruh masyarakat Indonesia. Namun dalam proses pelaksanaannya, banyak masyarakat takut melakukan vaksin karena hoax tersebar media sosial.',
		createdAt: '2022-04-16T04:27:34.572Z',
	},
	{
		id: 'event-4',
		image:
			'https://res.cloudinary.com/dk0z4ums3/image/upload/v1607889367/attached_image/ini-alasan-harus-puasa-sebelum-tes-kesehatan.jpg',
		title: 'Free Medical Check Up',
		description:
			'Medical check up merupakan salah satu kegiatan memeriksakan kesehatan baik itu secara fisik dan juga klinis dengan menyeluruh Pemeriksaan dilakukan secara berkala guna mengetahui kondisi kesehatan dan juga dapat mengetahui potensi dari timbulnya penyakit lebih dini. Sehingga bila terdapat penyakit, dapat dilakukan pengobatan melalui resep obat rutin lebih awal untuk mencegah penyakit berkembang lebih parah. Pemeriksaan Medical Check Up berupa : Pemeriksaan Tekanan Darah, Pemeriksaan Kolesterol dan Gula Darah, Tes Darah, Pemeriksaan Jantung, Pemeriksaan Mata. seluruh pemeriksaan yang disebutkan tidak dipungut biaya, tunggu apa lagi ? segera daftarkan diri anda karena kami sedang membuka untuk masyarakat umum dalam melakukan medical check up secara gratis.',
		createdAt: '2022-04-17T04:27:34.572Z',
	},
	{
		id: 'event-5',
		image:
			'https://diskop.ntbprov.go.id/data/2020/10/1C8708DF-6111-44C5-BB59-57CD9ECE24C9-650x433-1.jpeg',
		title: 'Seminar Kesehatan',
		description:
			'seminar kesehatan dengan tajuk “Mewujudkan Masyarakat Sehat dengan Healthy City dan Healthy Tourism”. Kegiatan yang berlangsung di aula barat kampus 4 UAD, Jln. Ringroad Selatan, Tamanan, Bantul, Yogyakarta, merupakan salah satu rangkaian Milad FKM ke-16. Seminar kesehatan ini menghadirkan empat pemateri. Pada panel pertama Jati Untari, S.K.M.,M.Kes., akan menyampaikan materi peran ahli kesehatan masyarakat dalam mewujudkan masyarakat sehat. Sementara drg. M. Taufik Abdul Kadir, M.Kes. dari bidang pelayanan kesehatan Dinkes DIY akan memberikan materi integrasi akademisi dan dinas kesehatan dalam mewujudkan health city. Di akhir acara ada pembagian hadiah, trofi, dan sertifikat bagi seluruh peserta dalam rangka memperingati Milad FKM UAD ke-16.',
		createdAt: '2022-04-18T04:27:34.572Z',
	},
	{
		id: 'event-6',
		image:
			'https://suyanto.id/wp-content/uploads/2021/01/Lomba-video-kreatif-Suyanto.id_.jpg',
		title: 'Lomba Video Aksi Germas',
		description:
			'Dalam menyambut hari kesehatan tanggal 12 November 2022 Kementerian Kesehatan Republik Indonesia (Kemenkes RI) menggelar lomba foto dan video aksi Germas dengan hadiah uang tunai jutaan rupiah. Syarat dan Ketentuan Umum : Karya original belum pernah dilombakan, Tidak mengandung SARA, kekerasan, pornografi, politik, dan ujaran kebencian, Hasil karya Vidio diunggah pada akun media sosial Instagram (institusi) dengan tagar/hastag #HKN2021 dan #AksiGermas dan akun peserta tidak boleh dikunci/ private dan wajib menandai/tagged dan mengikuti/follow media sosial akun Instagram Direktorat Promosi kesehatan dan Pemberdayaan Masyarakat @dit.promkes dan Kementrian Kesehatan @kemenkes_ri, dan Pemenang berdasarkan hak mutlak dari juri dan tidak dapat diganggu gugat',
		createdAt: '2022-04-19T04:27:34.572Z',
	},
	{
		id: 'event-7',
		image:
			'https://my-doc.com/wp-content/uploads/2020/04/examining-medical-check-up-singapore.jpg',
		title: 'Workshop Mental Health',
		description:
			'Workshop bertajuk Mental Health yang dibuka untuk umum di wilayah Jawa Tengah. Kegiatan yang berlangsung di aula barat kampus A UNAIR, Jalan Prof. Dr. Moestopo 47, Surabaya, merupakan salah satu rangkaian Milad FKM ke-20. Workshop mental health ini menghadirkan empat pemateri. Pada panel pertama Jati Untari, S.K.M.,M.Kes., akan menyampaikan materi peran ahli kesehatan masyarakat dalam mewujudkan masyarakat sehat. Sementara drg. M. Taufik Abdul Kadir, M.Kes. dari bidang pelayanan kesehatan Dinkes DIY akan memberikan materi integrasi akademisi dan dinas kesehatan dalam mewujudkan health city. Di akhir acara ada pembagian hadiah, trofi, dan sertifikat bagi seluruh peserta dalam rangka memperingati Milad FKM UNAIR ke-20.',
		createdAt: '2022-04-20T04:27:34.572Z',
	},
	{
		id: 'event-8',
		image:
			'https://th.bing.com/th/id/R.260d81a1195fcadafe5fb9ca92d5f55f?rik=dfsH7ctHyMRcXw&riu=http%3a%2f%2fkontekstual.com%2fwp-content%2fuploads%2f2021%2f07%2f106884393-1621330948703-gettyimages-1231059006-BELGIUM_VACCINATIONS-scaled.jpeg&ehk=8YN7o6E88Ut6vb4exewvQkBFwxFMa8lhjsPoKkN5%2fC0%3d&risl=&pid=ImgRaw&r=0',
		title: 'Vaksinasi Booster',
		description:
			'Setelah sukses dengan Vaksinasi Dosis Pertama dan kedua , pemerintah melalui Kementerian Kesehatan terus berupaya dalam mengakhiri pandemi di Indonesia dengan diadakannya vaksinasi Booster. Unit Pelayanan Kesehatan Kemenkes RI juga turut berinovasi dalam pelayanan dengan memberikan layanan vaksinasi. Vaksinasi COVID-19 akan dilakukan setelah kepastian keamanan dan keampuhannya ada, merupakan upaya menurunkan kesakitan dan kematian dan mendorong terbentuknya kekebalan kelompok. Selain itu, vaksinasi COVID-19 bertujuan untuk melindungi dan memperkuat sistem kesehatan secara menyeluruh, menjaga produktivitas dan mengurangi dampak sosial dan ekonomi masyarakat. Pemerintah memberikan target agar melaksanakan vaksinasi kepada seluruh masyarakat Indonesia. Namun dalam proses pelaksanaannya, banyak masyarakat takut melakukan vaksin karena hoax tersebar media sosial.',
		createdAt: '2022-04-20T04:27:34.572Z',
	},
];

function getAllEvent() {
	return events;
}

function getEvents(id) {
	const foundedEvent = events.find((eventss) => eventss.id === id);
	return foundedEvent;
}

function getEventsHome() {
	const eventHome = events.filter((event) => event.id <= 'event-4');
	return eventHome;
}

function getActiveEvents() {
	const activeEvents = events.filter((event) => !event.archived);
	return activeEvents;
}

function getArchivedEvents() {
	const archivedEvents = events.filter((event) => event.archived);
	return archivedEvents;
}

export {
	getAllEvent,
	getEvents,
	getEventsHome,
	getActiveEvents,
	getArchivedEvents,
};
