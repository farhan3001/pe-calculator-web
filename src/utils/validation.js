export const convertFormToJSON = (form) => {
  return {
    nama: String(form.nama),
    email: String(form.email),
    noHp: String(form.noHp),
    namaFaskes: String(form.namaFaskes),
    hpht: String(form.hpht),
    hpl: String(form.hpl),
    kehamilanPertama: form.kehamilanPertama,
    usiaIbu: form.usiaIbu,
    itervalKehamilan:
      parseInt(form.itervalKehamilan) >= 1 && parseInt(form.itervalKehamilan) < 10 ? '1' : '0',
    conceptionMethod: form.conceptionMethod,
    riwayatHamilPe: form.riwayatHamilPe,
    riwayatdiabetesMelitus: form.riwayatdiabetesMelitus,
    riwayatHipertensiKronik: form.riwayatHipertensiKronik,
    riwayatIbuSaudaraPerempuanPe: form.riwayatIbuSaudaraPerempuanPe,
    systoleKiri1: String(form.systoleKiri1),
    diastoleKiri1: String(form.diastoleKiri1),
    systoleKanan1: String(form.systoleKanan1),
    diastoleKanan1: String(form.diastoleKanan1),
    systoleKiri2: String(form.systoleKiri2),
    diastoleKiri2: String(form.diastoleKiri2),
    systoleKanan2: String(form.systoleKanan2),
    diastoleKanan2: String(form.diastoleKanan2),
    berat: String(form.berat),
    tinggi: String(form.tinggi),
    utpi: String(form.utpi),
    oph: String(form.oph),
    plgf: String(form.plgf || '')
  }
}

export const validateForm = (form) => {

  const f = form?.value ?? form 

  console.log('ROLE:', String(f.role))

  var requiredFields = null

  if (String(f.role) == 'dokter') {
    // Required fields (except plgf)
    requiredFields = [
      'nama', 
      'email', 
      'noHp', 
      'namaFaskes', 
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
  } else {
    // Required fields (except plgf)
    requiredFields = [
      'nama', 
      'email', 
      'noHp', 
      'namaFaskes', 
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
      'tinggi'
    ]
  }

  const fieldLabels = [
    'Nama', 
    'Email', 
    'No HP', 
    'Nama Faskes', 
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

  if (!form.hpl && !form.hpht) {
    return { valid: false, message: 'HPL/HPHT harus diisi salah satunya' }
  }

  return { valid: true }
}

