'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">SUARDI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* Pengumpulan Data */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Database className="w-6 h-6 text-blue-600" />
                  <span className="text-2xl">Pengumpulan Data Pribadi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  SUARDI mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Mendaftar sebagai pelanggan</li>
                  <li>Melakukan pembelian produk</li>
                  <li>Menghubungi layanan pelanggan</li>
                  <li>Berpartisipasi dalam promosi atau survei</li>
                  <li>Mengunjungi toko fisik kami</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Data yang kami kumpulkan meliputi: nama, alamat, nomor telepon, email, 
                  informasi pembelian, dan preferensi produk.
                </p>
              </CardContent>
            </Card>

            {/* Penggunaan Data */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Eye className="w-6 h-6 text-orange-500" />
                  <span className="text-2xl">Penggunaan Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami menggunakan data pribadi Anda untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Memproses dan mengelola transaksi pembelian</li>
                  <li>Memberikan layanan pelanggan yang lebih baik</li>
                  <li>Menginformasikan produk dan promosi terbaru</li>
                  <li>Meningkatkan kualitas produk dan layanan</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Perlindungan Data */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Lock className="w-6 h-6 text-green-600" />
                  <span className="text-2xl">Keamanan Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  SUARDI berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas kepada authorized personnel</li>
                  <li>Sistem keamanan yang terus diperbarui</li>
                  <li>Monitoring keamanan 24/7</li>
                  <li>Backup data secara berkala</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Kami tidak akan menjual, menyewakan, atau membagikan data pribadi Anda 
                  kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.
                </p>
              </CardContent>
            </Card>

            {/* Hak Pelanggan */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <UserCheck className="w-6 h-6 text-purple-600" />
                  <span className="text-2xl">Hak Anda Sebagai Pelanggan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sebagai pelanggan, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Mengakses data pribadi yang kami simpan</li>
                  <li>Memperbarui atau mengoreksi data yang tidak akurat</li>
                  <li>Menghapus data pribadi Anda (dengan syarat dan ketentuan)</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan kebijakan privasi ini</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Kebijakan Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Website kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis traffic website</li>
                  <li>Mempersonalisasi pengalaman browsing</li>
                  <li>Menyediakan fitur-fitur interaktif</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Anda dapat menonaktifkan cookies melalui pengaturan browser Anda, 
                  namun hal ini dapat mempengaruhi fungsionalitas website.
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
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                  melaksanakan hak Anda sebagai pelanggan, silakan hubungi:
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
                    Email: hubungi@suardi.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Update Policy */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Pembaruan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Kebijakan privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan 
                  perubahan dalam praktik bisnis kami atau perubahan peraturan yang berlaku. 
                  Setiap perubahan akan diberitahukan melalui website atau komunikasi langsung.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
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