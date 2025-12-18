'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, ShoppingCart, AlertCircle, CheckCircle, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="p-2">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <img
                    src="/suardi-logo.png"
                    alt="SUARDI Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  SUARDI
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Terms & Conditions
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">SUARDI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan ini mengatur penggunaan layanan dan produk yang disediakan 
              oleh SUARDI. Dengan menggunakan layanan kami, Anda menyetujui syarat ini.
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* Penerimaan Syarat */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-2xl">Penerimaan Syarat</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Dengan mengakses atau menggunakan layanan SUARDI, Anda menyatakan bahwa:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</li>
                  <li>Anda berusia minimal 18 tahun atau memiliki izin orang tua/wali</li>
                  <li>Anda memiliki kapasitas hukum untuk mengikatkan diri dalam kontrak</li>
                  <li>Anda akan mematuhi semua hukum dan peraturan yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            {/* Layanan Produk */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                  <span className="text-2xl">Layanan dan Produk</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  SUARDI menyediakan layanan perdagangan eceran yang meliputi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Penjualan produk eceran berkualitas</li>
                  <li>Konsultasi produk dan kebutuhan</li>
                  <li>Layanan pelanggan dan dukungan</li>
                  <li>Informasi produk dan promosi</li>
                  <li>Pengiriman produk (jika tersedia)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Kami berhak mengubah atau menghentikan produk dan layanan kapan saja 
                  dengan pemberitahuan sebelumnya.
                </p>
              </CardContent>
            </Card>

            {/* Harga dan Pembayaran */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Harga dan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Ketentuan harga dan pembayaran:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Harga yang tercantum adalah harga akhir dan belum termasuk biaya pengiriman</li>
                  <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
                  <li>Pembayaran dapat dilakukan tunai atau transfer bank</li>
                  <li>Pembayaran harus diselesaikan sebelum produk diterima</li>
                  <li>Struk pembayaran harus disimpan sebagai bukti transaksi</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pengembalian Produk */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Kebijakan Pengembalian</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Pengembalian produk dapat dilakukan dengan syarat:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Produk dikembalikan dalam kondisi baik dan tidak terpakai</li>
                  <li>Pengembalian dilakukan maksimal 7 hari sejak pembelian</li>
                  <li>Menyertakan struk pembelian asli</li>
                  <li>Produk rusak atau tidak sesuai deskripsi</li>
                  <li>Pengembalian karena alasan lain akan diproses sesuai kebijakan toko</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Pengembalian dana akan diproses dalam 3-5 hari kerja setelah persetujuan.
                </p>
              </CardContent>
            </Card>

            {/* Kewajiban Pelanggan */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  <span className="text-2xl">Kewajiban Pelanggan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sebagai pelanggan, Anda berkewajiban untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memperbarui informasi pribadi secara berkala</li>
                  <li>Menggunakan layanan secara bertanggung jawab</li>
                  <li>Mematuhi semua syarat dan ketentuan yang berlaku</li>
                  <li>Tidak melakukan penipuan atau kegiatan ilegal</li>
                  <li>Menjaga kerahasiaan akun dan informasi pribadi</li>
                </ul>
              </CardContent>
            </Card>

            {/* Batasan Tanggung Jawab */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Batasan Tanggung Jawab</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  SUARDI tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Keterlambatan pengiriman karena faktor di luar kendali kami</li>
                  <li>Kerusakan produk akibat penggunaan yang salah</li>
                  <li>Kehilangan data atau informasi selama transmisi</li>
                  <li>Gangguan layanan karena pemeliharaan sistem</li>
                </ul>
              </CardContent>
            </Card>

            {/* Hak Kekayaan Intelektual */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Semua konten, desain, logo, dan materi di website dan toko SUARDI 
                  dilindungi oleh hukum hak cipta dan merek dagang. Anda tidak diperkenankan 
                  menggunakan, menyalin, atau mendistribusikan materi kami tanpa izin tertulis.
                </p>
              </CardContent>
            </Card>

            {/* Penyelesaian Sengketa */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Gavel className="w-6 h-6 text-purple-600" />
                  <span className="text-2xl">Penyelesaian Sengketa</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Musyawarah dan mufakat terlebih dahulu</li>
                  <li>Mediasi melalui pihak ketiga yang netral</li>
                  <li>Proses peradilan di wilayah hukum Cirebon</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Hukum yang berlaku adalah hukum Republik Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Perubahan Syarat */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Perubahan Syarat dan Ketentuan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  SUARDI berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan 
                  akan berlaku efektif setelah dipublikasikan di website atau toko kami. 
                  Penggunaan layanan setelah perubahan dianggap sebagai persetujuan Anda 
                  terhadap syarat yang telah diperbarui.
                </p>
              </CardContent>
            </Card>

            {/* Kontak */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
                </p>
                <div className="bg-white p-6 rounded-lg space-y-3">
                  <p className="font-semibold text-gray-900">SUARDI</p>
                  <p className="text-gray-600">
                    DUSUN 01 DAYEUH, Desa/Kelurahan Gumulung Lebak<br />
                    Kec. Greged, Kab. Cirebon, Provinsi Jawa Barat<br />
                    Kode Pos: 45170
                  </p>
                  <p className="text-gray-600">
                    Telepon: 087729887794<br />
                    Email: info@suardi.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Informasi Legal */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Informasi Legal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Nama Perusahaan:</strong> SUARDI<br />
                  <strong>Jenis Usaha:</strong> Perdagangan Eceran<br />
                  <strong>Alamat:</strong> DUSUN 01 DAYEUH, Gumulung Lebak, Greged, Cirebon, Jawa Barat 45170<br />
                  <strong>Tanggal berlaku:</strong> 1 Januari 2024<br />
                  <strong>Terakhir diperbarui:</strong> 1 Januari 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8">
                <img
                  src="/suardi-logo.png"
                  alt="SUARDI Logo"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <h3 className="text-lg font-bold">SUARDI</h3>
            </div>
            <div className="text-center md:text-right text-sm text-gray-400">
              <p>© 2024 SUARDI. Hak Cipta Dilindungi.</p>
              <div className="flex space-x-4 mt-2 justify-center md:justify-end">
                <Link href="/privacy">
                  <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                    Privacy Policy
                  </Button>
                </Link>
                <Link href="/terms">
                  <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                    Terms & Conditions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}