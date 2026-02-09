export const validateForm = (form, userRole) => {

  var requiredFields = null
  var fieldLabels = null

  if (userRole == 'dokter') {
    // Required fields (except plgf)
    requiredFields = [
      'nama', 
      'email', 
      'noHp', 
      'namaFaskes', 
      'namaNakes',
      'noHpNakes',
      'emailNakes',
      'tglLahir',
      'kehamilanPertama', 
      'itervalKehamilan', 
      'conceptionMethod',
      'riwayatHamilPe', 
      'riwayatdiabetesMelitus',
      'riwayatHipertensiKronik', 
      'riwayatIbuSaudaraPerempuanPe',
      'systoleKiri1', 
      'diastoleKiri1', 
      'systoleKanan1', 
      'diastoleKanan1',
      'systoleKiri2', 
      'diastoleKiri2', 
      'systoleKanan2', 
      'diastoleKanan2',
      'berat', 
      'tinggi', 
      'utpiKanan',
      'utpiKiri',
      'vel1', 
      'vel2'
    ]

    fieldLabels = [
      'Nama', 
      'Email', 
      'No HP', 
      'Nama Faskes',
      'Nama Nakes',
      'No HP Nakes',
      'Email Nakes',
      'Tanggal Lahir',
      'Kehamilan Pertama', 
      'Interval Kehamilan', 
      'Conception Method',
      'Riwayat Hamil PE', 
      'Riwayat Diabetes Melitus',
      'Riwayat Hipertensi Kronik', 
      'Riwayat Ibu/Saudara Perempuan PE',
      'Systole Kiri 1', 
      'Diastole Kiri 1', 
      'Systole Kanan 1', 
      'Diastole Kanan 1',
      'Systole Kiri 2', 
      'Diastole Kiri 2', 
      'Systole Kanan 2', 
      'Diastole Kanan 2',
      'Berat Badan', 
      'Tinggi Badan', 
      'UTPI Kiri',
      'UTPI Kanan',
      'Vel 1', 
      'Vel 2'
    ]
  } else {
    // Required fields (except plgf)
    requiredFields = [
      'nama', 
      'email', 
      'noHp', 
      'namaFaskes', 
      'namaNakes',
      'noHpNakes',
      'emailNakes',
      'multiparaPasanganBaru',
      'teknologiReproduksi',
      'usiaLebih35',
      'nulipara',
      'jarakKehamilanLebih10',
      'riwayatPeKeluarga',
      'obesitasSebelumHamil',
      'riwayatPeSebelumnya',
      'kehamilanMultipel',
      'diabetesKehamilan',
      'hipertensiKronik',
      'penyakitGinjal',
      'autoimunSLE',
      'antiphospholipidSyndrome',
      'systoleKiri1', 
      'diastoleKiri1', 
      'systoleKanan1', 
      'diastoleKanan1',
      'systoleKiri2', 
      'diastoleKiri2', 
      'systoleKanan2', 
      'diastoleKanan2',
      'proteinuria'
    ]

    fieldLabels = [
      'Nama', 
      'Email', 
      'No HP', 
      'Nama Faskes',
      'Nama Nakes',
      'No HP Nakes',
      'Email Nakes',
      'Multipara dengan Pasangan Baru',
      'Kehamilan dengan Teknologi Reproduksi Berbantu',
      'Usia Ibu ≥ 35 Tahun',
      'Nulipara',
      'Jarak Kehamilan Sebelumnya > 10 Tahun',
      'Riwayat Preeklampsia pada Ibu / Saudara Perempuan',
      'Obesitas Sebelum Hamil (IMT > 30)',
      'Riwayat Preeklampsia Sebelumnya',
      'Kehamilan Multipel',
      'Diabetes dalam Kehamilan',
      'Hipertensi Kronik',
      'Penyakit Ginjal',
      'Penyakit Autoimun (SLE)',
      'Antiphospholipid Syndrome',
      'Systole Kiri 1', 
      'Diastole Kiri 1', 
      'Systole Kanan 1', 
      'Diastole Kanan 1',
      'Systole Kiri 2', 
      'Diastole Kiri 2', 
      'Systole Kanan 2', 
      'Diastole Kanan 2',
      'Proteinuria'
    ]
  }

  
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!form[field]) {
      return { valid: false, message: `Field "${fieldLabels[i]}" harus diisi.` };
    }
  }

  // Validate utpi/oph (at least one must be filled)
  // if (!form.utpi && !form.oph) {
  //   return { valid: false, message: 'Hasil analisis USG harus diisi' }
  // }

  if (!form.hpl && !form.hpht && userRole == 'dokter') {
    return { valid: false, message: 'HPL/HPHT harus diisi salah satunya' }
  }

  return { valid: true }
}

