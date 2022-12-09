let consultation = [
  {
    id: 'consultation-1',
    Nama: 'Pierre Evander',
    description:
			'Hallo dok saya pria saat ini saya berumur 21 tahun, selama 3 hari ini saya mengalami cegukan secara terus menerus, saya sudah banyak minum air putih tetapi cegukannya tidak hilang. hal apa yang harus saya lakukan dok, apakah ada solusi terhadap perihal keluhan yang saya alami saat ini ? sebelumnya terimakasih',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    antrianke: "1",
  },
  {
    id: 'consultation-2',
    Nama: 'Cora Thalassini Aphrodite',
    description:
			'saya wanita berumur 17 tahun, mempunyai keluhan setiap saya terkena udara dingin di malam hari kaki, tangan serta leher saya gatal - gatal dan muncul bentol besar hal ini baru dialami selama 1 bulan terakhir dan sebelumnya belumpernah mengalami hal ini, apakah ada obat yang dapat mencegah gejala yang saya alami saat ini ? terimakasih',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    antrianke: "2",
  },
  {
    id: 'consultation-3',
    Nama: 'Eros Atalla Arion',
    description:
			'Halo dok saya pria berumur 19 tahun saat ini saya merasakan sakit tenggorokan saat menguap, dan menelan saat makan bahkan saat minum air putihpun tenggorokan saya terasa sakit sudah berlangsung selama 2 hari ini',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    antrianke: "3",
  },
  {
    id: 'consultation-4',
    Nama: 'Gaia Calliope',
    description:
			'dok saya wanita berumur 18 tahun sewaktu saya SD memiliki benjolan yang telah didiagnosis tumor dan sudah di operasi pada waktu itu akan tetapi saat kelas 2 SMA benjolan muncul kembali dan semakin membesar.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    antrianke: "4",
  },
  {
    id: 'consultation-5',
    Nama: 'Gino Sebastian',
    description:
			'halo dokter saya pria berumur 17 tahun dibagian punggung dan paha saya muncul garis - garis berwarna putih secara tiba tiba dan saya tidak tau penyebabnya apakah strechmark dapat dialami oleh pria ? saya sangat bingung dan menjadi kurang percaya diri ketika memakai celana pendek dok mohon bantuannya sebelumnya terimakasih',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    antrianke: "5",
  },
  {
    id: 'consultation-6',
    Nama: 'Selena Kalista Jocasta',
    description:
			'dok saya wanita berumur 21 tahun sudah sekitar sebulan ini setiap harinya saya mengalami kesulitan tidursaya baru bisa tidur saat jam 2 pagi, apakah ada penyebab tertentu sehingga saya tidak bisa tidur pada waktu yang normal dan adakah cara agar saya dapat tertidur dengan cepat sebelumnya saya ucapkan terimaksih dokter',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    antrianke: "6",
  },
];

function getAllConsul() {
  return consultation;
}

function getConsul(id) {
  const foundedConsul = consultation.find((consult) => consult.id === id);
  return foundedConsul;
}

function getActiveConsul() {
  const activeConsul = consultation.filter((consult) => !consult.archived);
  return activeConsul;
}

function getArchivedConsul() {
  const archivedConsul = consultation.filter((consult) => consult.archived);
  return archivedConsul;
}

function addConsul({ antrianke, Nama, description}) {
  consultation = [
    ...consultation,
    {
      id: `consultation-${+new Date()}`,
      antrianke: antrianke || "eror hapus dan ambil antrian",
      Nama: Nama || "(untitled)",
      description,
      createdAt: new Date().toISOString(),
    },
  ];
}

function deleteConsul(id) {
  consultation = consultation.filter((consult) => consult.id !== id);
}

export {
  getAllConsul,
  getConsul,
  getActiveConsul,
  getArchivedConsul,
  addConsul,
  deleteConsul,
};
