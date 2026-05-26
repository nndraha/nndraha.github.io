---
layout: page
title: Protokol Kombinasi MPN-PCR untuk Deteksi dan Kuantifikasi Staphylococcus aureus pada Sayuran Hijau (Kubis)
description: Protokol laboratorium standar untuk pengayaan MPN dilanjutkan dengan konfirmasi molekuler berbasis PCR gen femA.
related_publications: true
date: 2026-05-26 10:00:00
tags: Food Safety
categories: food safety
---

# PROTOKOL PENELITIAN 
## Deteksi dan Kuantifikasi *Staphylococcus aureus* pada Kubis (*Brassica oleracea*) Menggunakan Integrasi *Most Probable Number* (MPN) dan *Polymerase Chain Reaction* (PCR)

**Dibuat Oleh:** Laboratorium Mikrobiologi dan Keamanan Pangan Nasional  
**Format:** `al-folio` GitHub Pages Template  
**Versi:** 1.0.0  
**Tanggal:** 26 Mei 2026  

---

### 1. PENDAHULUAN & PRINSIP METODE
Kontaminasi bakteri patogen pada sayuran hijau, khususnya kubis, merupakan ancaman serius bagi keamanan pangan karena sering dikonsumsi mentah (sebagai lalapan). *Staphylococcus aureus* adalah patogen oportunistik yang mampu menghasilkan enterotoksin tahan panas.

Metode konvensional MPN mengandalkan konfirmasi biokimia yang memakan waktu hingga 5-7 hari. Protokol hibrida **MPN-PCR** ini menggabungkan kapasitas kuantifikasi dari metode MPN (3-seri tabung) dengan spesifisitas tinggi serta kecepatan dari amplifikasi DNA (PCR) untuk mendeteksi gen ***femA* **— sebuah penanda genetik spesifik untuk *S. aureus* yang meregulasi pembentukan jembatan peptidoglikan dinding sel.

---

### 2. ALAT DAN BAHAN

#### A. Peralatan Utama
1. **Stomacher** (Homogenizer laboratorium) beserta kantong steril (*stomacher bags*).
2. **Thermal Cycler (Mesin PCR)**.
3. **Aparatus Elektroforesis Gel Horizontal** beserta *Power Supply*.
4. **Gel Documentation System** (UV Transilluminator / Blue Light LED).
5. **Inkubator** (Akurasi suhu $35^\circ	ext{C} \pm 1^\circ	ext{C}$).
6. **Mikropipet** (Rentang volume 0.5–10 $\mu	ext{L}$, 10–100 $\mu	ext{L}$, dan 100–1000 $\mu	ext{L}$) beserta *filter tips* steril.
7. **Sentrifugasi Mikro** (*Microcentrifuge* dengan kecepatan hingga 13.000 rpm).
8. **Water Bath** / **Heating Block** digital.

#### B. Media dan Reagen Kimia
1. **Buffered Peptone Water (BPW) 1%** (sebagai media pra-pengayaan dan pengencer).
2. **Giaconetti / Giolitti-Cantoni Broth** atau **Tryptic Soy Broth (TSB) + 10% NaCl** (sebagai media selektif MPN untuk *S. aureus*).
3. **Nuclease-Free Water (NFW)**.
4. **PCR Master Mix 2X** (mengandung Taq DNA Polymerase, dNTPs, MgCl₂, dan buffer reaksi).
5. **Primer Spesifik untuk Gen *femA***:
   * **FemA-F:** `5’-AAAAAAGCACATAACAAAGC-3’`
   * **FemA-R:** `5’-GATAAAGAAGAAACCAGCAG-3’`
   * *Target Amplikon:* 132 bp.
6. **Larutan NaOH 0.5 M** (jika menggunakan metode ekstraksi NaOH).
7. **Agarosa** (derajat biologi molekuler).
8. **Buffer TAE 1X** atau **TBE 1X**.
9. **DNA Stain** (seperti GelRed, Ethidium Bromide, atau SYBR Safe).
10. **DNA Ladder 100 bp**.

---

### 3. TAHAPAN PROTOKOL KERJA

```
[Alur Kerja Protokol]
Sampling Kubis -> Transportasi Dingin (<4°C) -> Homogenisasi (10g dalam 90ml BPW)
       |
       v
Serial Dilution (10^-1, 10^-2, 10^-3) -> Inokulasi ke 3-Tabung MPN -> Inkubasi 24 Jam
       |
       v
Ekstraksi DNA (Metode Boiling/NaOH) -> Amplifikasi PCR (Gen femA)
       |
       v
Elektroforesis Gel Agarosa 2% -> Identifikasi Band (132 bp)
       |
       v
Kombinasi Kode Positif -> Cocokkan Tabel MPN -> Konversi ke MPN/g
```

#### Langkah 1: Pengumpulan dan Transportasi Sampel
1. Ambil sampel kubis segar secara aseptik minimal **200-500 gram** menggunakan sarung tangan steril dan masukkan ke dalam kantong sampel steril.
2. Tempatkan sampel di dalam *cool box* yang dilengkapi dengan *ice pack* untuk menjaga suhu transportasi tetap berada pada **$< 4^\circ	ext{C}$**.
3. Transportasikan sampel ke laboratorium segera. Proses analisis **wajib dimulai dalam rentang waktu maksimal 24 jam** setelah pengambilan sampel untuk mencegah perubahan mikroflora alami.

#### Langkah 2: Homogenisasi dan Pengenceran Berseri (*Serial Dilution*)
1. Timbang **10 gram** sampel kubis secara aseptik (potong kecil-kecil menggunakan pisau/gunting steril jika diperlukan).
2. Masukkan sampel ke dalam *stomacher bag*, lalu tambahkan **90 mL media BPW 1%** hangat (perbandingan 1:10).
3. Homogenkan menggunakan alat *stomacher* selama **2 menit** dengan kecepatan normal. Campuran ini dikategorikan sebagai **Pengenceran $10^{-1}$**.
4. Lakukan pengenceran berseri secara logaritmik:
   * Ambil 1 mL dari pengenceran $10^{-1}$, masukkan ke dalam tabung berisi 9 mL BPW steril (**Pengenceran $10^{-2}$**).
   * Ambil 1 mL dari pengenceran $10^{-2}$, masukkan ke dalam tabung berisi 9 mL BPW steril (**Pengenceran $10^{-3}$**).
   * Lakukan terus hingga tingkat pengenceran yang diperkirakan sesuai dengan tingkat kontaminasi target.

#### Langkah 3: Inokulasi dan Inkubasi Seri 3-Tabung MPN
1. Siapkan 3 set tabung reaksi (masing-masing set berisi 3 tabung, total 9 tabung) yang telah diisi dengan **9 mL media selektif** (TSB + 10% NaCl atau Giolitti-Cantoni Broth).
2. **Set I (Pengenceran $10^{-1}$):** Inokulasikan 1 mL suspensi pengenceran $10^{-1}$ ke dalam masing-masing dari 3 tabung pertama.
3. **Set II (Pengenceran $10^{-2}$):** Inokulasikan 1 mL suspensi pengenceran $10^{-2}$ ke dalam masing-masing dari 3 tabung kedua.
4. **Set III (Pengenceran $10^{-3}$):** Inokulasikan 1 mL suspensi pengenceran $10^{-3}$ ke dalam masing-masing dari 3 tabung ketiga.
5. Homogenkan seluruh tabung secara perlahan menggunakan *vortex*.
6. Inkubasi seluruh tabung pada suhu **$35^\circ	ext{C} \pm 1^\circ	ext{C}$ selama 24 jam** di bawah kondisi aerobik.

#### Langkah 4: Skrining Visual dan Ekstraksi DNA Templat
Setelah 24 jam, amati kekeruhan (*turbidity*) atau perubahan warna pada tabung MPN. Seluruh tabung yang menunjukkan indikasi pertumbuhan bakteri (keruh) akan diproses untuk ekstraksi DNA. 

*Catatan: Jika ragu, ambil seluruh tabung untuk meminimalkan hasil negatif palsu (false-negative).*

##### Opsi A: Metode Pemasakan (*Boiling Method* - Direkomendasikan untuk Efisiensi Waktu)
1. Ambil **1 mL** kultur dari tabung MPN yang positif, masukkan ke dalam mikrotabung 1.5 mL.
2. Sentrifugasi pada **12.000 rpm selama 5 menit** untuk mengendapkan pelet sel. Buang supernatannya.
3. Cuci pelet dengan menambahkan 500 $\mu	ext{L}$ Sterile Aquabidest/NFW, sentrifugasi kembali, dan buang supernatannya.
4. Resuspensi pelet dalam **100 $\mu	ext{L}$ NFW**.
5. Panaskan mikrotabung dalam *heating block* pada suhu **$95^\circ	ext{C} - 100^\circ	ext{C}$ selama 10–15 menit** untuk melisiskan dinding sel *S. aureus*.
6. Dinginkan segera di atas es (*ice bath*) selama 5 menit.
7. Sentrifugasi pada **13.000 rpm selama 3 menit**. Ambil bagian supernatant yang mengandung DNA kasar (*crude DNA*) dan pindahkan ke tabung baru. Simpan pada suhu $-20^\circ	ext{C}$ sebagai templat PCR.

##### Opsi B: Metode NaOH Lisis Ringan
1. Ambil 1 mL kultur, sentrifugasi pelet seperti di atas.
2. Resuspensi pelet sel dalam **50 $\mu	ext{L}$ larutan NaOH 0.5 M**.
3. Inkubasi pada suhu ruang selama 5 menit, lalu panaskan pada suhu **$95^\circ	ext{C}$ selama 5 menit**.
4. Tambahkan **50 $\mu	ext{L}$ Buffer Tris-HCl (pH 8.0)** untuk menetralkan pH larutan.
5. Sentrifugasi pada 12.000 rpm selama 5 menit, ambil supernatannya.

##### Opsi C: Komersial Kit (DNeasy Blood & Tissue Kit / Sejenis)
* Ikuti protokol isolasi bakteri Gram-Positif dari manufaktur, yang melibatkan penambahan enzim **Lisozim atau Lisostafin** (wajib untuk lisis dinding sel peptidoglikan tebal milik *S. aureus*).

#### Langkah 5: Amplifikasi PCR (Target Gen *femA*)
Siapkan campuran reaksi PCR dalam tabung PCR 0.2 mL steril secara aseptik di dalam *PCR Hood*.

##### Komposisi Reaksi PCR (Volume Total: 25 $\mu$L)

| Komponen Reaksi | Konsentrasi Awal | Volume per Reaksi ($\mu	ext{L}$) | Konsentrasi Akhir |
| :--- | :--- | :--- | :--- |
| **PCR Master Mix 2X** | 2X | 12.5 $\mu	ext{L}$ | 1X |
| **Primer Forward (FemA-F)** | 10 $\mu	ext{M}$ | 1.0 $\mu	ext{L}$ | 0.4 $\mu	ext{M}$ |
| **Primer Reverse (FemA-R)** | 10 $\mu	ext{M}$ | 1.0 $\mu	ext{L}$ | 0.4 $\mu	ext{M}$ |
| **DNA Templat** | bervariasi | 2.0 $\mu	ext{L}$ | ~10–50 ng |
| **Nuclease-Free Water (NFW)**| - | 8.5 $\mu	ext{L}$ | _Ad_ 25 $\mu	ext{L}$ |

##### Pengaturan Profil Siklus Termal (Siklus PCR)

| Tahapan Reaksi | Suhu ($\circ	ext{C}$) | Durasi Waktu | Jumlah Siklus |
| :--- | :--- | :--- | :--- |
| **Denaturasi Awal** | $94^\circ	ext{C}$ | 5 menit | 1 siklus |
| **Denaturasi** | $94^\circ	ext{C}$ | 30 detik | |
| **Annealing (Pempelotan)** | $55^\circ	ext{C}$ | 30 detik | 35 siklus |
| **Ekstensi / Elongasi** | $72^\circ	ext{C}$ | 45 detik | |
| **Ekstensi Akhir** | $72^\circ	ext{C}$ | 5 menit | 1 siklus |
| **Penyimpanan (*Holding*)**| $4^\circ	ext{C}$ | $\infty$ | - |

#### Langkah 6: Separasi dengan Elektroforesis Gel Agarosa
1. Pembuatan Gel: Timbang **2.0 gram agarosa** dalam 100 mL Buffer TAE 1X atau TBE 1X (konsentrasi **2% w/v** untuk pemisahan fragmen kecil ~100 bp). Larutkan dengan *microwave* hingga jernih.
2. Dinginkan hingga larutan suam-suam kuku ($pprox 50^\circ	ext{C}$), tambahkan 5 $\mu	ext{L}$ DNA Stain (misal: GelRed). Tuang ke dalam cetakan gel yang telah dipasang sisir sumuran.
3. Setelah gel memadat, masukkan gel ke dalam bak elektroforesis yang telah diisi buffer TAE/TBE 1X.
4. Masukkan **5 $\mu	ext{L}$ produk PCR** ke dalam sumuran gel. Jangan lupa masukkan **3 $\mu	ext{L}$ DNA Ladder 100 bp** pada sumuran pertama sebagai marker ukuran.
5. Jalankan elektroforesis pada tegangan **100 Volt selama 40–45 menit**.
6. Visualisasikan pita DNA menggunakan *Gel Documentation System*.

---

### 4. IDENTIFIKASI, INTERPRETASI DATA, DAN KUANTIFIKASI

#### A. Identifikasi Molekuler
* **Hasil Positif *S. aureus*:** Jika visualisasi gel menunjukkan pita DNA (*band*) yang tegas migrasinya sejajar dengan ukuran **132 bp** pada DNA Ladder.
* **Kontrol Negatif:** Tidak boleh memunculkan pita apa pun (jika ada pita, terjadi kontaminasi sistemik).
* **Kontrol Positif:** Wajib menunjukkan pita tegas pada 132 bp menggunakan DNA kontrol dari strain murni *S. aureus* (misal ATCC 25923).

#### B. Kuantifikasi Menggunakan Kode MPN 3-Tabung
Catat jumlah tabung yang terkonfirmasi **positif PCR (memiliki pita 132 bp)** pada masing-masing seri pengenceran. Kombinasi 3 digit angka yang diperoleh (misal: 3-2-1) dikonversikan menggunakan Tabel Standar MPN 3-Tabung untuk mendapatkan indeks nilai MPN per gram sampel.

##### Tabel Referensi MPN 3-Tabung (Contoh Selektif Nilai Umum)

| Tabung Positif Pengenceran $10^{-1}$ | Tabung Positif Pengenceran $10^{-2}$ | Tabung Positif Pengenceran $10^{-3}$ | Indeks MPN (per gram) | Batas Kepercayaan 95% Rendah | Batas Kepercayaan 95% Tinggi |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | < 0.3 | 0.0 | 0.95 |
| 1 | 0 | 0 | 0.36 | 0.02 | 1.7 |
| 2 | 0 | 0 | 0.92 | 0.15 | 3.5 |
| 3 | 0 | 0 | 2.3 | 0.46 | 9.4 |
| 3 | 1 | 0 | 4.3 | 0.9 | 18.1 |
| **3** | **2** | **1** | **15.0** | **3.0** | **48.0** |
| 3 | 3 | 2 | 110.0 | 30.0 | 380.0 |
| 3 | 3 | 3 | > 110.0 | - | - |

##### Rumus Kalibrasi/Koreksi Faktor Pengenceran
Jika tingkat pengenceran awal yang diinokulasikan berbeda dari deretan seri standar dasar ($10^{-1}, 10^{-2}, 10^{-3}$), gunakan rumus kalibrasi berikut:

$$	ext{Hasil Akhir (MPN/g)} = 	ext{Nilai Indeks MPN dari Tabel} 	imes \left( rac{0.1}{	ext{Volume pengenceran terendah yang digunakan}} 
ight)$$

**Contoh Kasus:** Bila kombinasi tabung positif berdasarkan konfirmasi PCR *femA* menunjukkan angka **3-2-1**, maka nilai indeks tabel adalah **15.0**. Jika deretan pengenceran yang dimasukkan ke tabung adalah benar bermula dari $10^{-1}$ (setara 0.1 g/mL sampel), maka densitas bakteri target adalah **15.0 MPN/g**.

---

### 5. CATATAN KESELAMATAN & JAMINAN MUTU (QA/QC)
1. ***S. aureus* adalah patogen Biosafety Level 2 (BSL-2).** Seluruh pengerjaan kultur wajib dilakukan di dalam Biosafety Cabinet (BSC) Kelas II.
2. Gunakan area terpisah untuk: (A) Preparasi Master Mix PCR, (B) Isolasi DNA Templat, dan (C) Elektroforesis produk pasca-PCR untuk mencegah **kontaminasi silang bawaan (*carry-over contamination*)**.
3. Autoklaf seluruh limbah kultur MPN pada suhu $121^\circ	ext{C}$ selama 15 menit sebelum dibuang ke sistem pembuangan biomedis.
