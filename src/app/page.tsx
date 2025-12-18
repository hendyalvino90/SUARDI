'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  Users, 
  TrendingUp,
  Award,
  Store,
  Package,
  Truck,
  Shield,
  Star
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <img
                  src="/suardi-logo.png"
                  alt="SUARDI Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                SUARDI
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="font-semibold"
              >
                Beranda
              </Button>
              <Button 
                variant={activeTab === 'about' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('about')}
                className="font-semibold"
              >
                Tentang
              </Button>
              <Button 
                variant={activeTab === 'services' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('services')}
                className="font-semibold"
              >
                Layanan
              </Button>
              <Button 
                variant={activeTab === 'contact' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('contact')}
                className="font-semibold"
              >
                Kontak
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-500/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-2">
                <Store className="w-4 h-4 mr-2" />
                Perdagangan Eceran Terpercaya
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Selamat Datang di <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">SUARDI</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Mitra terpercaya untuk kebutuhan perdagangan eceran Anda. Kami menyediakan berbagai produk berkualitas dengan harga terjangkau dan pelayanan terbaik.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Belanja Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg transform hover:scale-105 transition-transform">
                  <Package className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">Produk Lengkap</h3>
                  <p className="text-sm text-gray-600">Berbagai kebutuhan sehari-hari</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 shadow-lg transform hover:scale-105 transition-transform">
                  <Truck className="w-8 h-8 text-orange-500 mb-3" />
                  <h3 className="font-semibold text-gray-900">Pengiriman Cepat</h3>
                  <p className="text-sm text-gray-600">Pesanan cepat sampai</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-200 shadow-lg transform hover:scale-105 transition-transform">
                  <Shield className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">100% Aman</h3>
                  <p className="text-sm text-gray-600">Transaksi terjamin</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg transform hover:scale-105 transition-transform">
                  <Award className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">Kualitas Terbaik</h3>
                  <p className="text-sm text-gray-600">Produk terjamin mutunya</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">SUARDI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk memberikan pengalaman berbelanja terbaik dengan produk berkualitas dan pelayanan prima
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pelayanan Terbaik</h3>
              <p className="text-gray-600 leading-relaxed">
                Tim kami siap melayani Anda dengan ramah dan profesional, memastikan setiap kebutuhan Anda terpenuhi
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Harga Kompetitif</h3>
              <p className="text-gray-600 leading-relaxed">
                Dapatkan produk berkualitas dengan harga terjangkau dan bersaing di pasaran
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Buka Setiap Hari</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami siap melayani kebutuhan Anda setiap hari dengan jam operasional yang fleksibel
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">SUARDI</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SUARDI adalah usaha perdagangan eceran yang berlokasi di Cirebon, Jawa Barat. 
                Kami telah berdedikasi untuk melayani masyarakat dengan menyediakan berbagai produk 
                kebutuhan sehari-hari dengan kualitas terbaik dan harga yang terjangkau.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Dengan pengalaman dan komitmen kami terhadap kepuasan pelanggan, SUARDI terus 
                berkembang menjadi mitra terpercaya untuk memenuhi kebutuhan perdagangan eceran di wilayah kami.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Kualitas Terjamin</p>
                    <p className="text-sm text-gray-600">Produk terbaik pilihan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Harga Bersahabat</p>
                    <p className="text-sm text-gray-600">Terjangkau untuk semua</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-600">
                      DUSUN 01 DAYEUH, Desa/Kelurahan Gumulung Lebak, Kec. Greged,
                      Kab. Cirebon, Provinsi Jawa Barat
                    </p>
                    <p className="text-gray-600">Kode Pos: 45170</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p className="text-gray-600">087729887794</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">Hubungi kami untuk informasi lebih lanjut</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10">
                  <img
                    src="/suardi-logo.png"
                    alt="SUARDI Logo"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <h3 className="text-xl font-bold">SUARDI</h3>
              </div>
              <p className="text-gray-400">
                Mitra terpercaya untuk kebutuhan perdagangan eceran Anda
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Produk Eceran</li>
                <li>Kebutuhan Sehari-hari</li>
                <li>Konsultasi Produk</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Jam Buka</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Senin - Sabtu: 08:00 - 20:00</li>
                <li>Minggu: 08:00 - 18:00</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>087729887794</li>
                <li>Gumulung Lebak, Greged</li>
                <li>Cirebon, Jawa Barat</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 SUARDI. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy">
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  Privacy Policy
                </Button>
              </a>
              <a href="/terms">
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  Terms & Conditions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}